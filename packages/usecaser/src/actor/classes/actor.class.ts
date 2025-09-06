import { UsecaseSymbol } from '../../symbol/classes/usecase-symbol.class';
import { getProps } from '../../weak-props/functions/get-props.function';
import { setProps } from '../../weak-props/functions/set-props.function';
import { AnyRole } from '../types/role.type';

export class Actor<
   Name extends string,
   Roles extends readonly AnyRole[],
> extends UsecaseSymbol<'Actor', Name> {
   readonly type = 'Actor';

   get roles(): Roles {
      return getProps(this, 'roles');
   }

   constructor(name: Name, roles: Roles) {
      super(name);

      setProps(this, 'roles', roles);
   }
}
