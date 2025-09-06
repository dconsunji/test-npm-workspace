import { ACCESSOR_KEY_MAP } from '../constants/accessor-key-map.constant.mjs';

function getInstanceValueMap(propertyName) {
    if (!ACCESSOR_KEY_MAP.has(propertyName)) {
        ACCESSOR_KEY_MAP.set(propertyName, new WeakMap());
    }
    return ACCESSOR_KEY_MAP.get(propertyName);
}

export { getInstanceValueMap };
