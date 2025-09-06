export type AnyPropertyName = string | symbol | number;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InstanceValueMap = WeakMap<any, any>;

export type AccessorMap = Map<AnyPropertyName, InstanceValueMap>;

export type ObjectInstance<Source> = Source extends
   | null
   | undefined
   | string
   | number
   | symbol
   | boolean
   | bigint
   ? never
   : Source;
