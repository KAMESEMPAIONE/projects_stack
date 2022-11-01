export const encryptAutoKey = (str: string, key: string):string => {
    const res: string[] = [];
    const keyArr: string[] = key.split('');

    for (let i = 0; i < str.length - key.length; i++) {
        keyArr.push(str[i]);
    }

    for (let i = 0; i < str.length; i++) {
        const stringIndex = str[i].codePointAt(0) || 0;
        const keyIndex = keyArr[i].codePointAt(0) || 0;
        const encodedSymbol = String.fromCodePoint(stringIndex + keyIndex );

        res.push(encodedSymbol);
    }

    return res.join('');
}

export const decryptAutoKey = (str: string, key: string):string => {
    const res: string[] = [];
    const keyArr: string[] = key.split('');

    for(let i = 0; i < str.length; i++) {

        const stringIndex = str[i].codePointAt(0) || 0;
        const keyIndex = keyArr[i].codePointAt(0) || 0;
        const decodedSymbol = String.fromCodePoint(stringIndex - keyIndex );

        res.push(decodedSymbol);
        keyArr.push(decodedSymbol);
    }

    return  res.join('');
}