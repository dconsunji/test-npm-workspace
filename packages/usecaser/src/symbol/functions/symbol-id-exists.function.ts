import { SYMBOL_LOOKUP } from '../constants/symbol-lookup.constant';
import { createSymbolName } from './create-symbol-name.function';

export function isSymbolIdExists(fullId: string): boolean;
export function isSymbolIdExists<Type extends string, Id extends string>(
   type: Type,
   id: Id,
): boolean;

export function isSymbolIdExists(typeOrFullId: string, id?: string): boolean {
   return SYMBOL_LOOKUP.has(createSymbolName(typeOrFullId, id));
}
