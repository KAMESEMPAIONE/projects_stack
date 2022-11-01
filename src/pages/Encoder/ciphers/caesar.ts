export const encryptCaesar = (str: string, key: number): string => {
    const num = Math.abs(Math.trunc(key));

    return  str.split('')
        .map((char) => {
            return String.fromCodePoint((char.codePointAt(0) || 0) + +num);
        })
        .join('');
}

export const decryptCaesar = (str: string, key: number): string => {
    const num = Math.abs(Math.trunc(key));

    return  str.split('')
        .map((char) => {
            return String.fromCodePoint((char.codePointAt(0) || 0) - +num);
        })
        .join('');
}