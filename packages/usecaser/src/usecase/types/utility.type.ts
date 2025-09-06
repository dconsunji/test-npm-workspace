import {
   ActionBoundary,
   ActionDescription,
   AnyAction,
} from '../../action/types/utility.type';
import { Role } from '../../actor/classes/role.class';
import { defineRole } from '../../actor/functions/define-role.function';
import {
   AnyRole,
   RoleNames,
   StringifyRoles,
} from '../../actor/types/role.type';
import { StringifyBoundary } from '../../boundary/types/utility.type';
import { StringifyTuple } from '../../utils/types/utility.type';

export type StringifyUsecaseRoles<Roles extends readonly AnyRole[]> =
   `As Role<${StringifyTuple<RoleNames<Roles>>}>`;

export type StringifyUseCaseTitle<
   Roles extends readonly AnyRole[],
   Action extends AnyAction,
> = `As Role<${StringifyRoles<Roles>}>, I can ${ActionDescription<Action>} in ${StringifyBoundary<ActionBoundary<Action>>}`;
