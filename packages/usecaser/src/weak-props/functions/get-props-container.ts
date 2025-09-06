import { AnyType } from '../../utils/types/utility.type';
import { PROPS_CONTAINER_STORE } from '../constants/props-container-store.constant';

export function getPropsContainer<Key extends string>(
   key: Key,
): WeakMap<AnyType, AnyType> {
   if (!PROPS_CONTAINER_STORE.has(key)) {
      PROPS_CONTAINER_STORE.set(key, new WeakMap<AnyType, AnyType>());
   }

   return PROPS_CONTAINER_STORE.get(key);
}
