import { describe, expect, it } from 'vitest';
import { getInstanceValueMap } from './get-instance-value-map.function';

describe('getInstanceValueMap(propertyName: PropertyName)', () => {
   it('should accapt string, number or symbol propertyName', () => {
      const result1 = getInstanceValueMap('my-property');
      const result2 = getInstanceValueMap(1);
      const result3 = getInstanceValueMap(Symbol('test-symbol'));

      expect(result1).toBeDefined();
      expect(result2).toBeDefined();
      expect(result3).toBeDefined();
   });

   it('should return a WeakMap instance', () => {
      const result1 = getInstanceValueMap('my-property');

      expect(result1).toBeInstanceOf(WeakMap);
   });
});
