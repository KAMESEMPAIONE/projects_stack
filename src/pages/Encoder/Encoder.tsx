import React, {FC, useState, useRef} from 'react';

import './Encoder.scss';

import {encryptCaesar, decryptCaesar} from "./ciphers/caesar";
import {encryptVigenere, decryptVigenere} from  './ciphers/vigenere'
import {encryptAutoKey, decryptAutoKey} from "./ciphers/autoKey";
import {encryptVernam, decryptVernam} from "./ciphers/vernam";

export const Encoder:FC = () => {
    const [cipherType, setCipherType] = useState<string>(localStorage.getItem('encoder_cipherType') || 'caesar');
    const [firstKey, setFirstKey] = useState<string>(localStorage.getItem('encoder_firstKey') || '');
    // const [secondKey, setSecondKey] = useState<string>(localStorage.getItem('encoder_secondKey') || '');
    const [inputValue, setInputValue] = useState<string>(localStorage.getItem('encoder_inputValue') || '');
    const [outputValue, setOutputValue] = useState<string>(localStorage.getItem('encoder_outputValue') || '');

    const firstKeyElem = useRef(null);
    // const secondKeyElem = useRef(null);
    const inputValueElem = useRef(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case 'firstKey':
                setFirstKey(event.target.value)
                break;
            // case 'secondKey':
            //     setSecondKey(event.target.value);
            //     break;
        }
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        return setCipherType(event.target.value);
    }

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        return setInputValue(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }


    const checkValues = () => {
        let error = false;

        if(firstKey === '') {
            firstKeyElem.current.classList.add('Encoder__error');
            firstKeyElem.current.previousElementSibling.textContent = 'Cannot be blank!'
            error = true;

        } else if((cipherType === 'caesar') && !(+firstKey)) {
            firstKeyElem.current.classList.add('Encoder__error');
            firstKeyElem.current.previousElementSibling.textContent = 'Must be a number!'
            error = true;

        } else {
            firstKeyElem.current.classList.remove('Encoder__error');
            firstKeyElem.current.previousElementSibling.textContent = ''
        }

        if(inputValue === '') {
            inputValueElem.current.classList.add('Encoder__error');
            inputValueElem.current.previousElementSibling.textContent = 'Cannot be blank!'
            error = true;

        } else {
            inputValueElem.current.classList.remove('Encoder__error');
            inputValueElem.current.previousElementSibling.textContent = ''
        }

        return error;
    }


    const encrypt = (type: string): string => {
        switch (type) {
            case 'caesar':
                return encryptCaesar(inputValue, +firstKey);
            case 'vigenere':
                return encryptVigenere(inputValue, firstKey);
            case 'autoKey':
                return encryptAutoKey(inputValue, firstKey);
            case 'vernam':
                return encryptVernam(inputValue, firstKey);
        }
    }

    const decrypt = (type: string): string => {
        switch (type) {
            case 'caesar':
                return decryptCaesar(inputValue, +firstKey);
            case 'vigenere':
                return decryptVigenere(inputValue, firstKey);
            case 'autoKey':
                return decryptAutoKey(inputValue, firstKey);
            case 'vernam':
                return decryptVernam(inputValue, firstKey);
        }
    }


    const  handleEncrypt =  () => {
        const test =  checkValues();

        setOutputValue('');

        if(!test) {
            const value = encrypt(cipherType);
            setOutputValue(value);
        }

        saveValues()
    }

    const handleDecrypt = () => {
        const test =  checkValues();

        setOutputValue('');

        if(!test) {
            const value = decrypt(cipherType);
            setOutputValue(value);
        }

        saveValues()
    }

    const saveValues = () => {
        localStorage.setItem('encoder_cipherType', cipherType);
        localStorage.setItem('encoder_firstKey', firstKey);
        // localStorage.setItem('encoder_secondKey', secondKey);
        localStorage.setItem('encoder_inputValue', inputValue);
        localStorage.setItem('encoder_outputValue', outputValue);
    }

    window.addEventListener('beforeunload', saveValues);


    return (
        <section className={'Encoder'}>
            <h2 className={'Projects__title'}>Encoder</h2>
            <p className={'Encoder__desc'}>This project implements functionality for encrypting and decrypting data.</p>

            <div className="Encoder__content">
                <form action="#" className={"Encoder__form"} onSubmit={handleSubmit} noValidate autoCorrect='off' autoComplete={'off'} >
                    <div className={'Encoder__params'}>

                        <span className={'Encoder__error-container'}>
                            <span className={'Encoder__error-message'}></span>
                            <select name="cipherType" className={'Encoder__cipher-type'} value={cipherType} onChange={handleSelectChange}>
                                <option value="caesar">Caesar cipher</option>
                                <option value="vigenere">Vigenere cipher</option>
                                <option value="autoKey">Auto Key cipher</option>
                                <option value="vernam">Vernam (XOR)</option>
                            </select>
                        </span>

                        <span className={'Encoder__error-container'}>
                            <span className={'Encoder__error-message'}></span>
                            <input value={firstKey} onChange={handleInputChange} ref={firstKeyElem} type="text" name={'firstKey'} maxLength={64} placeholder={'Enter the first key!'} className={`Encoder__cipher-key`}/>
                        </span>

                        {/*<span className={'Encoder__error-container'}>*/}
                        {/*    <span className={'Encoder__error-message'}></span>*/}
                        {/*    <input value={secondKey} onChange={handleInputChange} ref={secondKeyElem} type="text" name={'secondKey'} maxLength={64} placeholder={'Enter the second key!'} className={`Encoder__cipher-key secondKey`} disabled />*/}
                        {/*</span>*/}


                        <button className={'Encoder__button'} onClick={handleEncrypt}>Encode!</button>
                        <button className={'Encoder__button'} onClick={handleDecrypt}>Decode!</button>

                    </div>

                    <div className={'Encoder__areas'}>

                        <span className={'Encoder__error-container'}>
                             <span className={'Encoder__error-message'}></span>
                                <textarea onChange={handleTextAreaChange} value={inputValue} ref={inputValueElem} name="inputText"  placeholder={'Enter the value:'} className={`Encoder__textarea `} ></textarea>
                        </span>

                        <textarea value={outputValue}name="outputText" placeholder={'Result:'} className={'Encoder__textarea'} readOnly ></textarea>

                    </div>

                </form>
            </div>
        </section>
    )
}