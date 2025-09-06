import { AnyType } from '../../utils/types/utility.type';
import { getPropsContainer } from './get-props-container';

export function setProps<
   Value,
   Instance extends object = AnyType,
   Key extends string = string,
>(instance: Instance, key: Key, value: Value): void {
   getPropsContainer(key).set(instance, value);
}
