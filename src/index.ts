/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const isFunction = function isFunction(check: (arg0: any) => any) {
  return check && {}.toString.call(check) === "[object Function]";
};

const matched = (x: any) => ({
  on: () => matched(x),
  otherwise: () => x,
});

const match = (x:any) => ({
    on: (pred:any, fn:any) =>
    (isFunction(pred) ? pred(x) : pred === x) ? matched(fn(x)) : match(x),
    otherwise: (fn:any) => fn(x)
});

export default match;