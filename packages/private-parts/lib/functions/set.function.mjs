import { getInstanceValueMap } from './get-instance-value-map.function.mjs';

function set(instance, propertyName, value) {
    getInstanceValueMap(propertyName).set(instance, value);
}

export { set };
