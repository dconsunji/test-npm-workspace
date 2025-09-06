import { defineRole } from '../../actor/functions/define-role.function';
import { AnyRole, ResolveRoles } from '../../actor/types/role.type';
import { AsRolesDefined } from '../classes/as-roles-defined.class';

export function As<Targets extends readonly (string | AnyRole)[]>(
   ...roles: Targets
): AsRolesDefined<ResolveRoles<Targets>> {
   const definedRoles = roles.map(item => {
      if (typeof item === 'string') {
         return defineRole(item);
      }

      return item;
   }) as ResolveRoles<Targets>;

   return new AsRolesDefined(definedRoles);
}

export const test1 = As('name');
export const test2 = As('admin', 'diko').Ican(
   'create User',
   (name: string) => `New User! "${name}`,
);
