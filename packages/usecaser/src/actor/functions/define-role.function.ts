import { createSymbolName } from '../../symbol/functions/create-symbol-name.function';
import { isSymbolIdExists } from '../../symbol/functions/symbol-id-exists.function';
import { Role } from '../classes/role.class';

export function defineRole<Name extends string>(name: Name) {
   const id = createSymbolName('Role', name);

   if (isSymbolIdExists(id)) {
      throw new ReferenceError(`${id} already exist.`);
   }

   return new Role(name);
}
