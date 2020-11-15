// Explanation of what we pass to Generator:
// - The first arg is just what we generate
// - The second arg is so validators can't return anything
// - The last arg is so you can't pass stuff to iterator.next()
export type Validator<E> = Generator<E, void, void>
