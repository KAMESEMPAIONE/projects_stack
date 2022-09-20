import { FC, useState } from "react";
import './Random.scss';

export const Random: FC = () => {
    const passwordSymbols: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','!','@','#','№','$',';','%','^',':','&','?','*','(',')','-','=','+','{','}','[',']','|'];

    const steamKeySymbols: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];

    
    const random = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const generatePassword = (length: number = 14): string => {
        let result: string = '';

        for (let i = 0; i < length; i++) {
            let index = random(0, passwordSymbols.length - 1);
            result += passwordSymbols[index];
        }

        return result;
    }

    const generateSteamKey = (): string => {
        let result: string = '';

        for (let i = 1; i <= 17; i++) {
            if (i % 6 === 0) {
                result += '-';
                continue;
            }

            let index = random(0, steamKeySymbols.length - 1);
            result += steamKeySymbols[index];
        }

        return result;
    }

    const [minNumber, setMinNumber] = useState<string>('');
    const [maxNumber, setMaxNumber] = useState<string>('');
    const [randomNum, setRandomNum] = useState<number>(0);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    const [passwordSize, setPasswordSize] = useState<string>('14');
    const [isSizeValid, setIsSizeValid] = useState<string>('');
    const [password, setPassword] = useState<string>(generatePassword());

    const [steamKey, setSteamKey] = useState<string>(generateSteamKey());

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.length > 50) return false;
        switch (event.target.name) {
            case 'minNumber' :
                return setMinNumber(event.target.value);
            case 'maxNumber' :
                return setMaxNumber(event.target.value);
            case 'passwordSize' :
                return setPasswordSize(event.target.value)
        }
    }

    const handleGenRandom = () => {
        if(!(minNumber && maxNumber)) {
            setIsEmpty(true);
            return false;
        } 

        setIsEmpty(false);
        return setRandomNum(random(+minNumber, +maxNumber));
    }

    const handleGenPassword = () => {
        if (+passwordSize < 8) {
            setIsSizeValid('short');
            return false;
        } else if (+passwordSize > 128) {
            setIsSizeValid('long');
            return false
        }

        setIsSizeValid('okey')
        return setPassword(generatePassword(+passwordSize || 14));
    }
    
    const handleGenSteamKey = () => {
        return setSteamKey(generateSteamKey());
    }


    return (
        <section className="Random">
            <div className="Random__item">

                <h2 className="Projects__title">Generate random number</h2>

                <div className="Random__body">

                    {isEmpty && 
                        <span className="Random__empty">
                            Enter the Numbers!
                        </span>
                    }

                    <input onChange={handleChange} value={minNumber} type="number" name="minNumber" placeholder="Min:" className="Random__input"/>
                    <input onChange={handleChange} value={maxNumber}  type="number" name="maxNumber" placeholder="Max:" className="Random__input"/>
                    <button onClick={handleGenRandom} className="Random__button">Generete number</button>
                    <div className="Random__result">{randomNum}</div>

                </div>
                

            </div>

            <div className="Random__item">

                <h2 className="Projects__title">Generate password</h2>

                <div className="Random__body">

                    {isSizeValid === 'short' &&
                        <span className="Random__empty">
                            It's too short!
                        </span>
                    }

                    {isSizeValid === 'long' &&
                        <span className="Random__empty">
                            It's too long!
                        </span>
                    }

                    <input onChange={handleChange} value={passwordSize}  type="number" name="passwordSize" placeholder="Size:" className="Random__input"/>
                    <button onClick={handleGenPassword} className="Random__button">Generete password</button>
                    <div className="Random__result">{password}</div>

                </div>
                
            </div>

            <div className="Random__item">

                <h2 className="Projects__title">Generate Steam key</h2>

                <div className="Random__body"> 
                    <button onClick={handleGenSteamKey} className="Random__button">Generete Steam key</button>
                    <div className="Random__result">{steamKey}</div>
                </div>
                
            </div>
        </section>
    )
}