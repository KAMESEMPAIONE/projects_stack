import React, {FC, useState, useRef} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { handleInputChange, handleButtonChange, setRegistered } from '../../app/Reducer/AuthFormSlice';
import { Navigate } from 'react-router-dom';
import './FormPage.scss';



export const FormPage: FC = () => {
    const dispatch = useAppDispatch();

    const [navigate, setNavigate] = useState<boolean>(false);
    const [showPass, setShowPass] = useState<boolean>(false);

    const username = useAppSelector(state => state.AuthForm.username);
    const email = useAppSelector(state => state.AuthForm.email);
    const password = useAppSelector(state => state.AuthForm.password);
    const repeatPass = useAppSelector(state => state.AuthForm.repeatPass)
    const notification = useAppSelector(state => state.AuthForm.notification);
    const termsConsent = useAppSelector(state => state.AuthForm.termsConsent);
    const isRegistered = useAppSelector(state => state.AuthForm.isRegistered)

    const usernameElem = useRef(null);
    const emailElem = useRef(null);
    const passwordElem = useRef(null);
    const repeatPassElem = useRef(null);
    const termsConsentElem = useRef(null);

    const isEmail = (email: string): boolean => {
        const regExp: RegExp = /(^[a-zA-Z0-9._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

        return regExp.test(email);
    }

    const checkValues = ():boolean => {
        let error = false;

        if (username === '') {
            usernameElem.current.previousElementSibling.textContent = 'Cannot be blank!';
            error = true;
        } else {
            usernameElem.current.previousElementSibling.textContent = '';
        }

        if (email === '') {
            emailElem.current.previousElementSibling.textContent = 'Cannot be blank!';
            error = true;
        } else if (!isEmail(email)) {
            emailElem.current.previousElementSibling.textContent = 'Not valid!';
        } else {
            emailElem.current.previousElementSibling.textContent = '';
        }

        if (password === '') {
            passwordElem.current.previousElementSibling.textContent = 'Cannot be blank!';
            error = true;
        } else if (password.length < 12) {
            passwordElem.current.previousElementSibling.textContent = `It's to short!`;
            error = true;
        } else {
            passwordElem.current.previousElementSibling.textContent = ``;
        }

        if (repeatPass === '') {
            repeatPassElem.current.previousElementSibling.textContent = 'Cannot be blank!';
            error = true;
        } else if (repeatPass !== password) {
            repeatPassElem.current.previousElementSibling.textContent = 'Does not match!';
            error = true;
        } else {
            repeatPassElem.current.previousElementSibling.textContent = '';
        }

        if (!termsConsent) {
            termsConsentElem.current.previousElementSibling.textContent = 'Required!';
            error = true;
        } else {
            termsConsentElem.current.previousElementSibling.textContent = '';
        }

        return error;
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

        const test = checkValues();

        if(!test) {
            dispatch(setRegistered(true));

            localStorage.setItem('isRegistered', JSON.stringify(isRegistered));

            setNavigate(isRegistered);
        }
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

                    <span className={'FormPage__error'}>
                        <span className={'FormPage__error-body'}></span>
                        <input value={username} onChange={hadleChange} ref={usernameElem} type="text"  name="username" placeholder="username:" className='FormPage__input' maxLength={32}/>
                    </span>

                    <span className={'FormPage__error'}>
                        <span className={'FormPage__error-body'}></span>
                         <input value={email} onChange={hadleChange} ref={emailElem} type="email"  name="email"  placeholder="email:" className='FormPage__input' maxLength={32}/>
                    </span>

                    <span className={'FormPage__error'}>
                        <span className={'FormPage__error-body'}></span>
                        <input value={password} onChange={hadleChange} ref={passwordElem} type={`${showPass ? 'text' : 'password'}`}  name="password" placeholder="password" className='FormPage__input' autoComplete='on' maxLength={32}/>
                    </span>

                    <span className={'FormPage__error'}>
                        <span className={'FormPage__error-body'}></span>
                        <input value={repeatPass} onChange={hadleChange} ref={repeatPassElem} type={`${showPass ? 'text' : 'password'}`}  name="repeatPass" placeholder="repeat password:" className='FormPage__input' autoComplete='on' maxLength={32}/>
                    </span>

                    <div className='FormPage__checkbox-body'>
                        <label className={`FormPage__label FormPage__check ${showPass ? 'active' : ''}`}><input checked={showPass} onChange={() => {setShowPass(!showPass)}} type="checkbox" name='showPassword' className={`FormPage__checkbox`}/>Show password</label>
                       
                        <label className={`FormPage__label FormPage__check ${notification ? 'active' : ''}`}><input checked={notification} onChange={handleClick} type="checkbox"  name='notification' className='FormPage__checkbox'/>Send me notification.</label>

                        <span className={'FormPage__error'}>
                            <span className={'FormPage__error-body'}></span>
                            <label ref={termsConsentElem} className={`FormPage__label FormPage__check ${termsConsent ? 'active' : ''}`}><input checked={termsConsent} onChange={handleClick} type="checkbox"  name='termsConsent' className='FormPage__checkbox'/>I have agree to the terms!</label>
                        </span>
                    </div>
                    
                    <button type='submit' className='FormPage__button'>Sign in!</button>
                </form>
            </div>
        </section>
        </>
    )
}