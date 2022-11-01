export const encryptVigenere = (str: string, key: string): string => {
    const res: string[] = [];
    const keyArr: string[] = [];

    for(let i = 0; i < str.length; i++) {
        keyArr.push(key[i % key.length]);
    }

    for(let i = 0; i < str.length; i++) {
        const stringIndex = str[i].codePointAt(0) || 0;
        const keyIndex = keyArr[i].codePointAt(0) || 0;
        const encodedSymbol = String.fromCodePoint(stringIndex + keyIndex );

        res.push(encodedSymbol)
    }

    return res.join('');
}

export const decryptVigenere = (str: string, key: string): string => {
    const res: string[] = [];
    const keyArr: string[] = [];

    for(let i = 0; i < str.length; i++) {
        keyArr.push(key[i % key.length]);
    }

    for(let i = 0; i < str.length; i++) {
        const stringIndex = str[i].codePointAt(0) || 0;
        const keyIndex = keyArr[i].codePointAt(0) || 0;
        const decodedSymbol = String.fromCodePoint(stringIndex - keyIndex );

        res.push(decodedSymbol);
    }

    return res.join('');
}

