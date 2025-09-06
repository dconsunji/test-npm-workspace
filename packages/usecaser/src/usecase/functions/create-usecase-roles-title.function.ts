import { defineRole } from '../../actor/functions/define-role.function';
import { AnyRole, RoleName, RoleNames } from '../../actor/types/role.type';
import { AnyType, StringifyTuple } from '../../utils/types/utility.type';

function createRoleNames<Roles extends readonly AnyRole[]>(
   roles: Roles,
): RoleNames<Roles> {
   return roles.map(role => role.id) as RoleNames<Roles>;
}

function unifyRoleNames<Items extends readonly string[]>(
   items: Items,
): StringifyTuple<Items> {
   return items.join(',') as StringifyTuple<Items>;
}

// export function createUsecaseRoleTitle<Roles extends readonly AnyRole[]>(
//    roles: Roles,
// ): `As Role<${StringifyTuple<RRS<Roles>>}>` {
//    const names = roles.map(role => role.id).join(',');

//    return `As Role<${names}>` as `As Role<${StringifyTuple<RRS<Roles>>}>`;
// }

const r1 = defineRole('admin');
const r2 = defineRole('user');

const items = [r1, r2];
const strings = createRoleNames(items);
const result = unifyRoleNames(strings);
