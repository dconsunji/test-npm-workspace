import { getProps } from '../../weak-props/functions/get-props.function';
import { setProps } from '../../weak-props/functions/set-props.function';
import { SYMBOL_LOOKUP } from '../constants/symbol-lookup.constant';
import { createSymbolName } from '../functions/create-symbol-name.function';
import { UsecaseSymbolModel } from '../types/usecase-symbol-model.interface';

export abstract class UsecaseSymbol<Type extends string, Id extends string>
   implements UsecaseSymbolModel<Type>
{
   readonly type: Type;

   get id(): Id {
      return getProps(this, 'id');
   }

   constructor(id: Id) {
      setProps(this, 'id', id);

      // register to symbol lookup
      SYMBOL_LOOKUP.set(createSymbolName(this.type, this.id), this);
   }

   toString() {
      return createSymbolName(this.type, this.id);
   }

   toJSON() {
      return {
         type: this.type,
         id: this.id,
      };
   }
}
