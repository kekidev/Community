import { Migration } from '@mikro-orm/migrations';

export class Migration20210419150951 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" rename column "usernane" to "username";');


    this.addSql('alter table "user" drop constraint "user_usernane_unique";');

    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

}
