'use strict';

const ACCESSOR_KEY_MAP = new Map();

function getInstanceValueMap(propertyName) {
    if (!ACCESSOR_KEY_MAP.has(propertyName)) {
        ACCESSOR_KEY_MAP.set(propertyName, new WeakMap());
    }
    return ACCESSOR_KEY_MAP.get(propertyName);
}

function get(instance, propertyName) {
    const repo = getInstanceValueMap(propertyName);
    return repo.has(instance) ? repo.get(instance) : undefined;
}

function set(instance, propertyName, value) {
    getInstanceValueMap(propertyName).set(instance, value);
}

exports.get = get;
exports.set = set;
