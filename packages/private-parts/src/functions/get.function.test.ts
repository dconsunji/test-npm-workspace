import { beforeEach, describe, expect, it } from 'vitest';
import { ACCESSOR_KEY_MAP } from '../constants/accessor-key-map.constant';
import { set } from './set.function';
import { get } from './get.function';

describe('get(instance: Instance, propertyName: PropertyName, )', () => {
   interface Sample {
      readonly name: string;
   }

   const propertyName = 'type';
   const propertyValue = 1;

   let Class: new () => Sample;
   let instance: Sample;

   beforeEach(() => {
      // clear all maps
      ACCESSOR_KEY_MAP.clear();

      Class = class {
         readonly name = 'test name';
      };

      instance = new Class();

      set(instance, propertyName, propertyValue);
   });

   it('should get value of instance property', () => {
      const result = get(instance, propertyName);

      expect(result).toBe(propertyValue);
   });
});
