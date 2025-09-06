import { SymbolId } from '../types/utility.type';

export function createSymbolName<Type extends string, Id extends string>(
   type: Type,
   id: Id,
): SymbolId<Type, Id>;

export function createSymbolName<Type extends string, Id extends string>(
   fullId: SymbolId<Type, Id>,
): SymbolId<Type, Id>;

export function createSymbolName(typeOrFullId: string, id?: string) {
   if (id && typeof id === 'string') {
      return `${typeOrFullId}<${id}>`;
   }
   return `${typeOrFullId}`;
}
