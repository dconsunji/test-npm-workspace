import { AnyPropertyName } from '../types/utility.type';
import { getInstanceValueMap } from './get-instance-value-map.function';

export function set<
   Value,
   Instance extends object,
   PropertyName extends AnyPropertyName,
>(instance: Instance, propertyName: PropertyName, value: Value): void {
   getInstanceValueMap(propertyName).set(instance, value);
}
