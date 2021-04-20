import {
  Resolver,
  Mutation,
  Arg,
  InputType,
  Field,
  Ctx,
  ObjectType,
  Query,
} from "type-graphql";
import { MyContext } from "../types";
import { User } from "../entities/User";
import argon2 from "argon2";
import { EntityManager } from "@mikro-orm/postgresql";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: MyContext) {
    if (!req.session.userId) {
      return null;
    }

    const user = await em.findOne(User, { id: req.session.userId });

    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";

    function check(str: string) {
      for (var i = 0; i < specialChars.length; i++) {
        if (str.indexOf(specialChars[i]) > -1) {
          return true;
        }
      }
      return false;
    }

    if (check(options.username)) {
      return {
        errors: [
          {
            field: "username",
            message: "닉네임에 특수문자를 포함할 수 없습니다",
          },
        ],
      };
    }

    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "닉네임은 2자리 이상이여야 합니다",
          },
        ],
      };
    }

    if (options.username.indexOf(" ") >= 0) {
      return {
        errors: [
          {
            field: "username",
            message: "닉네임에 띄어쓰기를 할 수 없습니다",
          },
        ],
      };
    }

    if (options.password.indexOf(" ") >= 0) {
      return {
        errors: [
          {
            field: "password",
            message: "비밀번호에 띄어쓰기를 할 수 없습니다",
          },
        ],
      };
    }

    if (options.password.length <= 3) {
      return {
        errors: [
          {
            field: "password",
            message: "비밀번호는 3자리 이상이여야 합니다",
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(options.password);
    let user;
    try {
      const result = await (em as EntityManager)
        .createQueryBuilder(User)
        .getKnexQuery()
        .insert({
          username: options.username,
          password: hashedPassword,
          created_at: new Date(),
          updated_at: new Date(),
        })
        .returning("*");

      user = result[0];
    } catch (err) {
      if (err.detail.includes("already exists")) {
        return {
          errors: [
            {
              field: "username",
              message: "이미 사용중인 닉네임입니다",
            },
          ],
        };
      }

      console.log(`Message: ${err.message}`);
    }

    // store user id to session
    // keep them logged in
    req.session.userId = user.id;

    return {
      user,
    };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username: options.username });

    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: "존재하지 않는 닉네임입니다",
          },
        ],
      };
    }

    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "틀린 비밀번호입니다",
          },
        ],
      };
    }

    req.session!.userId = user.id;

    return {
      user,
    };
  }
}
