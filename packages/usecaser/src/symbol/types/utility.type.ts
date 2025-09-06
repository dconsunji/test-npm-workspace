import { UsecaseSymbolModel } from './usecase-symbol-model.interface';

export type AnyUsecaseSymbol = UsecaseSymbolModel<string, string>;

export type SymbolId<Type, Id> = Type extends string
   ? Id extends string
      ? `${Type}<${Id}>`
      : `${Type}`
   : Id extends string
     ? `${Id}`
     : never;
