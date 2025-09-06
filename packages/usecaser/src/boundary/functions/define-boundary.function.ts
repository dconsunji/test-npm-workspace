import { createSymbolName } from '../../symbol/functions/create-symbol-name.function';
import { isSymbolIdExists } from '../../symbol/functions/symbol-id-exists.function';
import { Boundary } from '../classes/boundary.class';

export function defineBoundary<Type extends string, Title extends string>(
   type: Type,
   title: Title,
): Boundary<Type, Title> {
   const id = createSymbolName('Boundary', `${type}:${title}`);

   if (isSymbolIdExists(id)) {
      throw new ReferenceError(`${id} already exists.`);
   }

   return new Boundary(type, title);
}

export const b = defineBoundary('admin', 'diko');

export const tostring = b.toJSON();
