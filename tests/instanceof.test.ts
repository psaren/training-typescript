import { myInstanceof, customInstanceof } from '../src/instanceof';

describe('instanceof functions', () => {
  describe('myInstanceof', () => {
    it('should return true for valid instanceof cases', () => {
      expect(myInstanceof([], Array)).toBe(true);
      expect(myInstanceof({}, Object)).toBe(true);
      expect(myInstanceof(new Date(), Date)).toBe(true);
    });

    it('should return false for invalid instanceof cases', () => {
      expect(myInstanceof({}, Array)).toBe(false);
      expect(myInstanceof(null, Object)).toBe(false);
      expect(myInstanceof(undefined, Object)).toBe(false);
    });
  });

  describe('customInstanceof', () => {
    it('should return true for valid instanceof cases', () => {
      expect(customInstanceof([], Array)).toBe(true);
      expect(customInstanceof({}, Object)).toBe(true);
      expect(customInstanceof(new Date(), Date)).toBe(true);
    });

    it('should return false for invalid instanceof cases', () => {
      expect(customInstanceof({}, Array)).toBe(false);
      expect(customInstanceof(null, Object)).toBe(false);
      expect(customInstanceof(undefined, Object)).toBe(false);
    });

    it('should throw TypeError for non-function right-hand side', () => {
      expect(() => customInstanceof({}, {})).toThrow(TypeError);
      expect(() => customInstanceof({}, null)).toThrow(TypeError);
    });
  });
});