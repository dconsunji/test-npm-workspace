import {
   AnyList,
   PrependTuple,
   StringifyTuple,
} from '../../utils/types/utility.type';
import { Role } from '../classes/role.class';

export type RoleConstructor<Name extends string> = (
   ...args: AnyList
) => Role<Name>;

export type AnyRole = Role<string>;

export type ResolveRole<Source extends AnyRole | string> = Source extends string
   ? Role<Source>
   : Source extends Role<infer Name>
     ? Role<Name>
     : never;

export type ResolveRoles<Sources> = Sources extends [
   infer First,
   ...infer Others,
]
   ? First extends AnyRole | string
      ? PrependTuple<ResolveRoles<Others>, ResolveRole<First>>
      : [...ResolveRoles<Others>]
   : Sources extends [infer First]
     ? First extends AnyRole | string
        ? [ResolveRole<First>]
        : []
     : [];

export type RoleName<Source extends AnyRole> =
   Source extends Role<infer Name> ? Name : never;

export type RoleNames<Sources extends readonly AnyRole[]> = {
   [key in keyof Sources]: RoleName<Sources[key]>;
};

export type StringifyRoles<Sources extends readonly AnyRole[]> =
   `${StringifyTuple<RoleNames<Sources>>}`;
