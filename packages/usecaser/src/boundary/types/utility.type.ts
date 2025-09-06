import { Stringify } from '../../utils/types/utility.type';
import { Boundary } from '../classes/boundary.class';

export type AnyBoundary = Boundary<string, string>;

export type StringifyBoundary<Source extends AnyBoundary> =
   Source extends Boundary<infer Type, infer Title>
      ? `${Stringify<Type, 'Boundary'>}:${Stringify<Title, 'Unknown'>}`
      : 'Boundary:Unknown';
