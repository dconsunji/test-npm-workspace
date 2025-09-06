import { AnyList } from '../../utils/types/utility.type';
import { Actor } from '../classes/actor.class';
import { AnyRole } from './role.type';

export type ActorConstructor<
   Name extends string,
   Roles extends readonly AnyRole[],
> = (...args: AnyList) => Actor<Name, Roles>;

export type AnyActor = Actor<string, readonly AnyRole[]>;
