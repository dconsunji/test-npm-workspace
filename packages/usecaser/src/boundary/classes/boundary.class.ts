import { UsecaseSymbol } from '../../symbol/classes/usecase-symbol.class';

export class Boundary<
   Type extends string,
   Title extends string,
> extends UsecaseSymbol<'Boundary', `${Type}:${Title}`> {
   readonly type = 'Boundary';
   readonly subtype: Type;

   constructor(type: Type, title: Title) {
      super(`${type}:${title}`);

      this.subtype = type;
   }

   toJSON() {
      return {
         ...super.toJSON(),
         subtype: this.subtype,
      };
   }
}
