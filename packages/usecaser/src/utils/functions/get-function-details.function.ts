import { FUNCTION_TO_STRING_PATTERN } from '../constants/function.constant';
import { AnyFunction } from '../types/utility.type';

export function getFunctionDetails<Fn extends AnyFunction>(
   fn: Fn,
): [name: string, parameters: string] {
   return [fn.name, fn.toString().match(FUNCTION_TO_STRING_PATTERN)[2]];
}
