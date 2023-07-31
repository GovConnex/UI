import {deepMerge, AnyObject} from "./utils"; // replace 'your-file' with actual file name

describe("deepMerge", () => {
  it("should merge non-conflicting properties", () => {
    const target = {a: 1, b: 2};
    const source = {c: 3, d: 4};
    const result = deepMerge(target, source);

    expect(result).toEqual({a: 1, b: 2, c: 3, d: 4});
  });

  it("should override conflicting properties", () => {
    const target = {a: 1, b: 2};
    const source = {b: 3, c: 4};
    const result = deepMerge(target, source);

    expect(result).toEqual({a: 1, b: 3, c: 4});
  });

  it("should deep merge nested objects", () => {
    const target = {a: {b: 1}, c: 2};
    const source = {a: {d: 3}, e: 4};
    const result = deepMerge(target, source);

    expect(result).toEqual({a: {b: 1, d: 3}, c: 2, e: 4});
  });

  it("should override conflicting properties in nested objects", () => {
    const target = {a: {b: 1, c: 2}};
    const source = {a: {c: 3, d: 4}};
    const result = deepMerge(target, source);

    expect(result).toEqual({a: {b: 1, c: 3, d: 4}});
  });

  it("should return target if no source is provided", () => {
    const target = {a: 1, b: 2};
    const result = deepMerge(target);

    expect(result).toEqual(target);
  });

  it("should return an empty object if no arguments are provided", () => {
    const result = deepMerge(
      undefined as any as AnyObject,
      undefined as any as AnyObject
    );

    expect(result).toEqual(undefined);
  });

  it("should not mutate the original sources", () => {
    const source1 = {a: 1, b: 2};
    const source2 = {b: 3, c: 4};
    const result = deepMerge({}, source1, source2);

    expect(source1).toEqual({a: 1, b: 2});
    expect(source2).toEqual({b: 3, c: 4});
    expect(result).toEqual({a: 1, b: 3, c: 4});
  });

  it("should handle null values", () => {
    const target = {a: null, b: 2};
    const source = {b: null, c: 4};
    const result = deepMerge(target, source);

    expect(result).toEqual({a: null, b: null, c: 4});
  });

  it("should handle undefined values", () => {
    const target = {a: undefined, b: 2};
    const source = {b: undefined, c: 4};
    const result = deepMerge(target, source);

    expect(result).toEqual({a: undefined, b: undefined, c: 4});
  });
});
