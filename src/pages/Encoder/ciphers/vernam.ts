export const encryptVernam = (str: string, key: string): string => {
    const res: string[] = [];
    const keyArr: string[] = key.split('');

    for(let i = 0; i < str.length - key.length; i++) {
        keyArr.push(key[i % key.length]);
    }

    for(let i = 0; i < str.length; i++) {
        const stringIndex = str[i].codePointAt(0) || 0;
        const keyIndex = keyArr[i].codePointAt(0) || 0;

        res.push(`${stringIndex ^ keyIndex}`);
    }

    return res.join(' ');
}

export const decryptVernam = (str: string, key: string): string => {
    const res: string[] = [];
    const keyArr: string[] = key.split('');
    const strArr: string[] = str.split(' ');

    for(let i = 0; i < str.length - key.length; i++) {
        keyArr.push(key[i % key.length]);
    }

    for(let i = 0; i < strArr.length; i++) {
        const stringIndex = +strArr[i]
        const keyIndex = keyArr[i].codePointAt(0)
        const decodedSymbol = String.fromCodePoint(stringIndex ^ keyIndex );

        res.push(decodedSymbol);
    }

    return res.join('');
}


