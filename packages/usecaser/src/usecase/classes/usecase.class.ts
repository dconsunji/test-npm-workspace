import { AnyAction } from '../../action/types/utility.type';
import { AnyRole } from '../../actor/types/role.type';
import { UsecaseSymbol } from '../../symbol/classes/usecase-symbol.class';
import { getProps } from '../../weak-props/functions/get-props.function';
import { setProps } from '../../weak-props/functions/set-props.function';

export class Usecase<
   Gist extends string,
   Roles extends readonly AnyRole[],
   Action extends AnyAction,
> extends UsecaseSymbol<'Usecase', Gist> {
   get roles(): Roles {
      return getProps(this, 'roles');
   }

   get action(): Action {
      return getProps(this, 'action');
   }

   constructor(gist: Gist, roles: Roles, action: Action) {
      super(gist);

      setProps(this, 'roles', roles);
      setProps(this, 'action', action);
   }
}
