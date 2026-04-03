const isObject = (o: unknown): o is object =>
  typeof o === "object" && o !== null;

export const cloneDeep = <T>(
  obj: T,
  cache = new WeakMap<object, unknown>(),
): T => {
  if (!isObject(obj)) {
    return obj;
  }
  if (cache.has(obj)) {
    return cache.get(obj) as T;
  }
  const c = new (
    obj as { constructor: new () => Record<string | symbol, unknown> }
  ).constructor();
  cache.set(obj, c);
  if (obj instanceof Set) {
    obj.forEach((v) => {
      (c as unknown as Set<unknown>).add(cloneDeep(v, cache));
    });
  }
  if (obj instanceof Map) {
    obj.forEach((v, k) => {
      (c as unknown as Map<unknown, unknown>).set(
        cloneDeep(k, cache),
        cloneDeep(v, cache),
      );
    });
  }
  const keys: (string | symbol)[] = Reflect.ownKeys(obj);
  keys.forEach((k) => {
    c[k] = cloneDeep((obj as Record<string | symbol, unknown>)[k], cache);
  });
  return c as T;
};

const a: Record<string, unknown> = {
  a: "a",
  b: [1, 3],
  c: null,
  d: 9,
};
a.e = a;

console.log(cloneDeep(a));
