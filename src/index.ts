// Explanation of what we pass to Generator:
// - The first arg is just what we generate
// - The second arg is so validators can't return anything
// - The last arg is so you can't pass stuff to iterator.next()
export type Validator<E> = Generator<E, void, void>

export function* tooShort(
    min: number,
    value: string,
    message = `Expected string to have ${min} characters but it instead has ${value.length} characters.`
): Validator<string> {
    if (value.length < min) yield message
}

export function* tooLong(
    max: number,
    value: string,
    message = `Expected string to have ${max} characters but it instead has ${value.length} characters.`
): Validator<string> {
    if (value.length > max) yield message
}
