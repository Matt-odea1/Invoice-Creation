import { Atom, SetStateAction, getDefaultStore, useAtom } from "jotai";

/**
 * Jotai atom setter
 */
export type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result;

/**
 * Jotai useAtom result
 */
export type UseAtomResult<TValue> = [
  Awaited<TValue>,
  SetAtom<[SetStateAction<TValue>], void>
];

/**
 * Jotai getter controls
 */
export type ExportsGet<TValue, TName extends string> = {
  [key in `get${Capitalize<TName>}Atom`]: () => TValue;
};

/**
 * Jotai useAtom controls
 */
export type ExportsUseAtom<TValue, TName extends string> = {
  [key in `use${Capitalize<TName>}Atom`]: () => UseAtomResult<TValue>;
};

/**
 * Jotai atom state controls
 */
export type AtomStateControls<TValue, TName extends string> = ExportsUseAtom<
  TValue,
  TName
> &
  ExportsGet<TValue, TName>;

/**
 * Utility to create atom state controls
 */
export function atomStateControls<TValue, TName extends string>(
  atom: Atom<TValue>,
  name: TName
): AtomStateControls<TValue, TName> {
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  return {
    [`use${capitalName}Atom`]: () => useAtom(atom),
    [`get${capitalName}Atom`]: () => getDefaultStore().get(atom),
  } as unknown as AtomStateControls<TValue, TName>;
}
