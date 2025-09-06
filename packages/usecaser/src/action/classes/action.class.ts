import { UsecaseSymbol } from '../../symbol/classes/usecase-symbol.class';
import { AnyFunction } from '../../utils/types/utility.type';
import { AnyBoundary } from '../../boundary/types/utility.type';

import { getProps } from '../../weak-props/functions/get-props.function';
import { setProps } from '../../weak-props/functions/set-props.function';

export class Action<
   Description extends string,
   Boundary extends AnyBoundary,
   Handler extends AnyFunction,
> extends UsecaseSymbol<'Action', Description> {
   readonly type = 'Action';

   get boundary(): Boundary {
      return getProps(this, 'boundary');
   }

   get handler(): Handler {
      return getProps(this, 'handler');
   }

   constructor(description: Description, boundary: Boundary, handler: Handler) {
      super(description);
      setProps(this, 'boundary', boundary);
      setProps(this, 'handler', handler);
   }

   toJSON() {
      return {
         ...super.toJSON(),
         boundary: this.boundary.id,
      };
   }
}
