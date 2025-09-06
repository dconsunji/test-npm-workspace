import { defineAction } from '../../action/functions/define-action.function';
import { AnyAction } from '../../action/types/utility.type';
import { defineRole } from '../../actor/functions/define-role.function';
import { AnyRole } from '../../actor/types/role.type';
import { defineBoundary } from '../../boundary/functions/define-boundary.function';
import { createSymbolName } from '../../symbol/functions/create-symbol-name.function';
import { isSymbolIdExists } from '../../symbol/functions/symbol-id-exists.function';

export function defineUsecase<
   Roles extends readonly AnyRole[],
   Action extends AnyAction,
>(roles: Roles, action: Action) {
   const id = createSymbolName('Story', gist);

   if (isSymbolIdExists(id)) {
      throw new ReferenceError(`${id} already exist.`);
   }

   return new Story(gist, roles, action);
}

export const story = defineStory(
   'Mao ni akong story!',
   [defineRole('admin')],
   defineAction(
      'create Subscription',
      defineBoundary('System', 'Card'),
      (cardNumber: string, chargeAmount: number) => ({
         cardNumber,
         chargeAmount,
      }),
   ),
);
