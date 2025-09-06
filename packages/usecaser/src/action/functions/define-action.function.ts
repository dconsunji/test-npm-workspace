import { AnyBoundary } from '../../boundary/types/utility.type';
import { createSymbolName } from '../../symbol/functions/create-symbol-name.function';
import { isSymbolIdExists } from '../../symbol/functions/symbol-id-exists.function';

import { AnyFunction } from '../../utils/types/utility.type';
import { Action } from '../classes/action.class';

export function defineAction<
   Description extends string,
   Boundary extends AnyBoundary,
   Handler extends AnyFunction,
>(
   description: Description,
   boundary: Boundary,
   handler: Handler,
): Action<Description, Boundary, Handler> {
   const id = createSymbolName('Usecase', description);

   if (isSymbolIdExists(id)) {
      throw new ReferenceError(`${id} already exist.`);
   }

   return new Action(description, boundary, handler);
}
