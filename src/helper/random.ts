/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * 
 * @remarks
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 * 
 * @param min : input number
 * 
 * @param max : input number
 * 
 * @returns random int generator
 * 
 * @example
 * ```ts
 *  randomIntGenerator(1, 10).next().value
 * ```
 * returns random integer between 1 and 10
 *
 */
export function* randomIntGenerator(min: number, max: number): Generator<number> {
    min = Math.ceil(min);
    max = Math.floor(max);

    while(true) {
        yield Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

/**
 * Random string generator
 *
 * @param length : input length number
 * 
 * @returns random string generator
 * 
 * @example
 * ```ts
*  randomStringGenerator(12).next().value
 * ```
 * returns random string with length 12
 */
export function* randomStringGenerator(length: number): Generator<string> {
    while(true) {
        yield randomString(length)
    }
}


/**
 * Random string
 *
 * @param length : input length number
 * 
 * @returns random string with input length
 *
 */
export function randomString(length: number): string {
    const CHARS: string = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let id: string = ''
    let randomNumber: number = 0

    for (let i = 0; i < length; i++) {
        randomNumber = Math.ceil(Math.random() * CHARS.length)
        id += CHARS[randomNumber]
    }

    return id
}