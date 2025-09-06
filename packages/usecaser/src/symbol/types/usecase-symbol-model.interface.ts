export interface UsecaseSymbolModel<
   Type extends string,
   Id extends string = string,
> {
   readonly type: Type;
   readonly id: Id;
}
