import { SYMBOL_LOOKUP } from '../constants/symbol-lookup.constant';
import { UsecaseSymbolModel } from '../types/usecase-symbol-model.interface';
import { SymbolId } from '../types/utility.type';
import { createSymbolName } from './create-symbol-name.function';

export function getSymbolById<Type extends string, Id extends string>(
   type: Type,
   id: Id,
): UsecaseSymbolModel<Type, Id>;

export function getSymbolById<Type extends string, Id extends string>(
   fullId: string | SymbolId<Type, Id>,
): UsecaseSymbolModel<Type, Id>;

export function getSymbolById(typeOrFullId: string, id?: string) {
   const fullId = createSymbolName(typeOrFullId, id);

   if (SYMBOL_LOOKUP.has(fullId)) {
      return SYMBOL_LOOKUP.get(fullId);
   }

   return null;
}
