import { getInstanceValueMap } from './get-instance-value-map.function.mjs';

function get(instance, propertyName) {
    const repo = getInstanceValueMap(propertyName);
    return repo.has(instance) ? repo.get(instance) : undefined;
}

export { get };
