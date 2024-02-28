import React, {useState} from 'react';
import style from './signupForm.module.css'
import {useNavigate} from "react-router";

const SignupForm = () => {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleClickShowPassword = ()=>
    {
        setShowPassword(prevState => !prevState)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.form_name}>
                <div >
                    <span className={style.name}>Sign Up</span>
                </div>
                <div>
                    <span>Already have an account? </span>
                    <span className={style.link_to_sign} onClick={()=>navigate('/signin')}> Sign in</span>
                </div>
            </div>
            <div className={style.form_data}>
                <div>
                    <input className={style.form_data_input} type={"text"} placeholder={'Your name'} name={'name'}/>
                </div>
                <div>
                    <input className={style.form_data_input} type={"text"} placeholder={'User name'} name={'userName'}/>
                </div>
                <div>
                    <input className={style.form_data_input} type={"email"} placeholder={'Email address'} name={'email'}/>
                </div>
                <div className={style.show_password}>
                    <input className={style.form_data_input} type={showPassword?"text":"password"} placeholder={'Password'} name={'password'}/>
                    <img className={style.eye_icon} src={"/images/sign/eye.svg"} alt={'Show password'} onClick={handleClickShowPassword}/>
                </div>
                <div>
                    <input className={style.check_is_agree} type={"checkbox"} name={'privacyPolicy'} id={'privacyPolicy'}/>
                    <label form="{'privacyPolicy'}">
                        <span> I agree with </span>
                        <span className={style.bold_text}>Privacy Policy </span>
                        <span>and </span>
                        <span className={style.bold_text}>Terms of Use</span>
                    </label>


                </div>
                <div>
                    <button className={style.submit_btn}>Sing Up</button>
                </div>
            </div>
            
        </div>
    );
};

export default SignupForm;