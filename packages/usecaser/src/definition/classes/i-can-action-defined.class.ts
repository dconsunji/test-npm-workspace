import { AnyRole } from '../../actor/types/role.type';
import { AnyFunction } from '../../utils/types/utility.type';
import { getProps } from '../../weak-props/functions/get-props.function';
import { setProps } from '../../weak-props/functions/set-props.function';

export class ICanActionDefined<
   Roles extends readonly AnyRole[],
   Description extends string,
   Handler extends AnyFunction,
> {
   get roles(): Roles {
      return getProps(this, 'roles');
   }

   get desription(): Description {
      return getProps(this, 'description');
   }

   get handler(): Handler {
      return getProps(this, 'handler');
   }

   constructor(roles: Roles, description: Description, handler: Handler) {
      setProps(this, 'roles', roles);
      setProps(this, 'description', description);
      setProps(this, 'handler', handler);
   }

   on() {
      return 'string';
   }
}
