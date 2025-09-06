export type AnyPropertyName = string | symbol | number;
export type InstanceValueMap = WeakMap<any, any>;
export type AccessorMap = Map<AnyPropertyName, InstanceValueMap>;
export type ObjectInstance<Source> = Source extends null | undefined | string | number | symbol | boolean | bigint ? never : Source;
