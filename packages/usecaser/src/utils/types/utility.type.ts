// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;

export type AnyList = AnyType[];

export type AnyFunction = (...args: AnyList) => AnyType;

export type AnyConstructor = new (...args: AnyList) => AnyType;

export type FunctionResult<Fn extends AnyFunction> = Fn extends (
   ...args: AnyList
) => infer Return
   ? Return
   : never;

export type PrependTuple<Tuple extends readonly AnyType[], Item> = [
   Item,
   ...Tuple,
];

export type AppendTuple<Tuple extends readonly AnyType[], Item> = [
   ...Tuple,
   Item,
];

export type Stringify<
   Source,
   FailedReplaceMent extends string = '',
> = Source extends string | number | bigint | boolean
   ? `${Source}`
   : FailedReplaceMent;

export type StringifyTuple<
   Source extends readonly (string | number | bigint | boolean)[],
   FailedReplaceMent extends string = '?',
> = Source extends [infer First]
   ? `${Stringify<First, FailedReplaceMent>}`
   : Source extends [infer First, infer Last]
     ? `${Stringify<First, FailedReplaceMent>},${Stringify<Last, FailedReplaceMent>}`
     : Source extends [infer First, ...infer Others, infer Last]
       ? Others extends readonly AnyType[]
          ? `${Stringify<First, FailedReplaceMent>},${StringifyTuple<Others, FailedReplaceMent>},${Stringify<Last, FailedReplaceMent>}`
          : `${Stringify<First, FailedReplaceMent>},${FailedReplaceMent},${Stringify<Last, FailedReplaceMent>}`
       : FailedReplaceMent;
