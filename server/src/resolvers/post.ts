import { Post } from "../entities/Post";
import { MyContext } from "src/types";
import { Resolver, Query, Ctx, Arg, Int, Mutation } from "type-graphql";

// crud graphql

@Resolver()
export class PostResolver {
  @Query(
    // returning list of Posts
    () => [Post]
  )
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    // get access to context
    // return list of Posts

    // get all posts
    return em.find(Post, {});
  }

  @Query(() => Post, { nullable: true })
  post(
    @Arg("id" /* graphql name */, () => Int) id: /* name for code*/ number, // get args for searching
    @Ctx() { em }: MyContext
  ): Promise<Post | null> {
    // return null if dosen't exists
    return em.findOne(Post, { id });
  }

  @Mutation(() => Post)
  async createPost(
    @Arg("title" /* graphql name */, () => String /* graphql type */)
    title: /* name for code*/ string /*ts type*/, // get args for searching
    @Ctx() { em }: MyContext
  ): Promise<Post> {
    const post = em.create(Post, { title });
    await em.persistAndFlush(post);
    return post;
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("id", () => Number)
    id: number,
    @Arg("title", () => String, { nullable: true })
    title: string,
    @Ctx() { em }: MyContext
  ): Promise<Post | null> {
    const post = await em.findOne(Post, { id });

    if (!post) {
      return null;
    }

    if (typeof title !== "undefined") {
      post.title = title; // change title
      await em.persistAndFlush(post); // update
    }

    return post;
  }

  @Mutation(() => Boolean, { nullable: true })
  async deletePost(
    @Arg("id", () => Number)
    id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    const post = await em.findOne(Post, { id });

    if (!post) {
      return false;
    }

    await em.nativeDelete(Post, { id });

    return true;
  }
}
