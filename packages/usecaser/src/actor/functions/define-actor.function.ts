import { createSymbolName } from '../../symbol/functions/create-symbol-name.function';
import { getSymbolById } from '../../symbol/functions/get-symbol-by-id.function';
import { isSymbolIdExists } from '../../symbol/functions/symbol-id-exists.function';
import { PrependTuple } from '../../utils/types/utility.type';
import { Actor } from '../classes/actor.class';
import { Role } from '../classes/role.class';
import { AnyRole } from '../types/role.type';
import { defineRole } from './define-role.function';

export function defineActor<
   Name extends string,
   Roles extends readonly AnyRole[] | [],
>(name: Name, roles: Roles): Actor<Name, PrependTuple<Roles, Role<Name>>> {
   const id = createSymbolName('Actor', name);

   if (isSymbolIdExists(id)) {
      throw new ReferenceError(`${id} already exist.`);
   }

   // get role or create if do not exist!
   const role = (getSymbolById('Role', name) as Role<Name>) || defineRole(name);

   return new Actor(name, [role, ...roles]);
}

const r1 = new Role('admin');
const r2 = new Role('guest');

export const a1 = defineActor('diko', [r1, r2]);
export const a2 = defineActor('cha', []);

export const test = new Actor('diko', [r1, r2]);

export const actorRoles = test.roles;
