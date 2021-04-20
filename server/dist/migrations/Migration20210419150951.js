"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210419150951 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210419150951 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('alter table "user" rename column "usernane" to "username";');
            this.addSql('alter table "user" drop constraint "user_usernane_unique";');
            this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
        });
    }
}
exports.Migration20210419150951 = Migration20210419150951;
//# sourceMappingURL=Migration20210419150951.js.map