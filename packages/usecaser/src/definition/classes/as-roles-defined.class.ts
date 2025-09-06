import { AnyRole } from '../../actor/types/role.type';
import { AnyFunction } from '../../utils/types/utility.type';
import { getProps } from '../../weak-props/functions/get-props.function';
import { setProps } from '../../weak-props/functions/set-props.function';
import { ICanActionDefined } from './i-can-action-defined.class';

export class AsRolesDefined<Roles extends readonly AnyRole[]> {
   get roles(): Roles {
      return getProps(this, 'roles');
   }

   constructor(roles: Roles) {
      setProps(this, 'roles', roles);
   }

   Ican<Description extends string, Handler extends AnyFunction>(
      description: Description,
      handler: Handler,
   ) {
      return new ICanActionDefined(this.roles, description, handler);
   }
}

// export const test = new AsRolesDefined([defineRole('admin')]).Ican(
//    'create User',
//    (name: string) => {
//       return `user ${name}`;
//    },
// );
