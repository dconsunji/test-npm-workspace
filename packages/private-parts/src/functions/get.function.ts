import { AnyPropertyName } from '../types/utility.type';
import { getInstanceValueMap } from './get-instance-value-map.function';

export function get<
   Instance extends object,
   PropertyName extends AnyPropertyName,
>(instance: Instance, propertyName: PropertyName) {
   const repo = getInstanceValueMap(propertyName);

   return repo.has(instance) ? repo.get(instance) : undefined;
}
