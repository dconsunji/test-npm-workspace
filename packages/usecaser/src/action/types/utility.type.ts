import { AnyBoundary } from '../../boundary/types/utility.type';
import { AnyFunction } from '../../utils/types/utility.type';
import { Action } from '../classes/action.class';

export type AnyAction = Action<string, AnyBoundary, AnyFunction>;

export type ActionDescription<Source extends AnyAction> =
   Source extends Action<infer Description, AnyBoundary, AnyFunction>
      ? Description
      : never;

export type ActionBoundary<Source extends AnyAction> =
   Source extends Action<string, infer Boundary, AnyFunction>
      ? Boundary
      : never;
