import { AnyType } from '../../utils/types/utility.type';
import { getPropsContainer } from './get-props-container';

export function getProps<Value, Key extends string>(
   instance: AnyType,
   key: Key,
): Value | undefined {
   const container = getPropsContainer(key);

   if (container.has(instance)) {
      return container.get(instance);
   }
}
