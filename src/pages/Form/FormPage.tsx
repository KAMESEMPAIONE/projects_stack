import React, {FC, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { handleInputChange, handleButtonChange, setRegistered } from '../../app/Reducer/AuthFormSlice';
import { Navigate } from 'react-router-dom';
import './FormPage.scss';



export const FormPage: FC = () => {
    const dispatch = useAppDispatch();

    const [navigate, setNavigate] = useState<boolean>(false);

    const username = useAppSelector(state => state.AuthForm.username);
    const email = useAppSelector(state => state.AuthForm.email);
    const password = useAppSelector(state => state.AuthForm.password);
    const repeatPass = useAppSelector(state => state.AuthForm.repeatPass)
    const notification = useAppSelector(state => state.AuthForm.notification);
    const termsConsent = useAppSelector(state => state.AuthForm.termsConsent);
    const isRegistered = useAppSelector(state => state.AuthForm.isRegistered)

    const [showPass, setShowPass] = useState<boolean>(false);
    const [isNameValid, setIsNameValid] = useState<string>('');
    const [isEmailValid, setIsEmailValid] = useState<string>('');
    const [isPassValid, setIsPassValid] = useState<string>('');
    const [isRepeatPassValid, setIsRepeatPassValid] = useState<string>('');
    const [isTerms, setIsTerms] = useState<string>('');

    const isEmail = (email: string): boolean => {
        const regExp: RegExp = /(^[a-zA-Z0-9._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

        return regExp.test(email);
    }

    const checkName = (): boolean => {
        if (username === '') {
            setIsNameValid('empty')
            return false;
        } else {
            setIsNameValid('ok')
            return true;
        }
    }

    const checkEmail = (): boolean => {
        if (email === '') {
            setIsEmailValid('empty')
            return false;
        } else if (!isEmail(email)) {
            setIsEmailValid('invalid')
            return false;
        } else {
            setIsEmailValid('ok')
            return true;
        }
    }

    const checkPassword = ():boolean => {
        if (password === '') {
            setIsPassValid('empty')
            return false;
        } else if (password.length < 12) {
            setIsPassValid('short')
            return false;
        } else {
            setIsPassValid('ok')
            return true;
        }
    }

    const checkRepeatPassord = ():boolean => {
        if (repeatPass === '') {
            setIsRepeatPassValid('empty')
            return false;
        } else if (repeatPass !== password) {
            setIsRepeatPassValid('different')
            return false;
        } else {
            setIsRepeatPassValid('ok')
            return true;
        }
    }

    const checkTerms = (): boolean => {
        if (!termsConsent) {
            setIsTerms('no');
            return false;
        } else {
            setIsTerms('ok')
            return true;
        }
    }

    const checkInputsValue = () => {
        const name = checkName();
        const email = checkEmail();
        const pass = checkPassword();
        const repeatPass = checkRepeatPassord();
        const terms = checkTerms();
       
        return (name && email && pass && repeatPass && terms);
    }

    const hadleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        return dispatch(
                handleInputChange({
                    name : event.target.name, 
                    value : event.target.value
                })
            )   
    }

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        return dispatch(
                handleButtonChange({
                    name: event.target.name,
                    checked: event.target.checked
                })
            )
    }
   
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!checkInputsValue()) {
            return false;
        }

        dispatch(setRegistered(true));

        localStorage.setItem('isRegistered', JSON.stringify(isRegistered));

        setNavigate(isRegistered);
    }

    return (
        <>
        {navigate &&
            <Navigate to={'/private-page'}/>
        }

        <section className='FormPage'>
            <h2 className='Projects__title'>Form</h2>

            <div className='FormPage__body' >
                <form action="#" method='POST' onSubmit={handleSubmit} noValidate autoCorrect='off' className='FormPage__form'>

                    {isNameValid === 'empty' && 
                        <div className='FormPage__error'>
                            <div className='FormPage__error-body'>
                                Cannot be blank!
                            </div>
                        </div>
                    }
                    <input value={username} onChange={hadleChange} type="text"  name="username" placeholder="username:" className='FormPage__input' maxLength={32}/>

                    {isEmailValid === 'empty' && 
                        <div className='FormPage__error'>
                            <div className='FormPage__error-body'>
                                Cannot be blank!
                            </div>
                        </div>
                    }

                    {isEmailValid === 'invalid' && 
                        <div className='FormPage__error'>
                            <div className='FormPage__error-body'>
                                Not valid!
                            </div>
                        </div>
                    }
                    <input value={email} onChange={hadleChange} type="email"  name="email"  placeholder="email:" className='FormPage__input' maxLength={32}/>

                    {isPassValid === 'empty' && 
                        <div className='FormPage__error'>
                            <div className='FormPage__error-body'>
                                Cannot be blank!
                            </div>
                        </div>
                    }

                    {isPassValid === 'short' && 
                        <div className='FormPage__error'>
                            <div className='FormPage__error-body'>
                                Must be at least 12 characters!
                            </div>
                        </div>
                    }
                    <input value={password} onChange={hadleChange} type={`${showPass ? 'text' : 'password'}`}  name="password" placeholder="password" className='FormPage__input' autoComplete='on' maxLength={32}/>

                    {isRepeatPassValid === 'empty' && 
                        <div className='FormPage__error'>
                            <div className='FormPage__error-body'>
                                Cannot be blank!
                            </div>
                        </div>
                    }

                    {isRepeatPassValid === 'different' && 
                        <div className='FormPage__error'>
                            <div className='FormPage__error-body'>
                                Does not match!
                            </div>
                        </div>
                    }

                    <input value={repeatPass} onChange={hadleChange} type={`${showPass ? 'text' : 'password'}`}  name="repeatPass" placeholder="repeat password:" className='FormPage__input' autoComplete='on' maxLength={32}/>

                    <div className='FormPage__checkbox-body'>
                        <label className={`FormPage__label FormPage__check ${showPass ? 'active' : ''}`}><input checked={showPass} onChange={() => {setShowPass(!showPass)}} type="checkbox" name='showPassword' className={`FormPage__checkbox`}/>Show password</label>
                       
                        <label className={`FormPage__label FormPage__check ${notification ? 'active' : ''}`}><input checked={notification} onChange={handleClick} type="checkbox"  name='notification' className='FormPage__checkbox'/>Send me notification.</label>

                        {isTerms === 'no' &&
                            <div className='FormPage__error'>
                                <div className='FormPage__error-body'>
                                    Required!
                                </div>
                            </div>
                        }
                        <label className={`FormPage__label FormPage__check ${termsConsent ? 'active' : ''}`}><input checked={termsConsent} onChange={handleClick} type="checkbox"  name='termsConsent' className='FormPage__checkbox'/>I have agree to the terms!</label> 
                    </div>
                    
                    <button type='submit' className='FormPage__button'>Sign in!</button>
                </form>
            </div>
        </section>
        </>
    )
}