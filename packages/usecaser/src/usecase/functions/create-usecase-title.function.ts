import { defineAction } from '../../action/functions/define-action.function';
import { AnyAction } from '../../action/types/utility.type';
import { defineRole } from '../../actor/functions/define-role.function';
import { AnyRole } from '../../actor/types/role.type';
import { defineBoundary } from '../../boundary/functions/define-boundary.function';
import { StringifyUseCaseTitle } from '../types/utility.type';

export function createUsecaseTitle<
   Roles extends readonly AnyRole[],
   Action extends AnyAction,
>(roles: Roles, action: Action): StringifyUseCaseTitle<Roles, Action> {
   const roleNames = roles.map(role => role.id).join(',');
   const boundary = action.boundary;

   const boundaryName = `${boundary.subtype}:${boundary.id}`;
   const actionDescription = action.id;

   return `As Role<${roleNames}>, I can ${actionDescription} in ${boundaryName}` as StringifyUseCaseTitle<
      Roles,
      Action
   >;
}

const roles = [defineRole('admin'), defineRole('diko')];
const action = defineAction(
   'create User',
   defineBoundary('System', 'User'),
   (name: string) => ({
      name,
   }),
);

export const title = createUsecaseTitle(roles, action);
