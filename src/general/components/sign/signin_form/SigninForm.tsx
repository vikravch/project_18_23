import React, {useState} from 'react';
import style from './signinForm.module.css'
import {useNavigate} from "react-router";

const SigninForm = () => {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleClickShowPassword = ()=>
    {
        setShowPassword(prevState => !prevState)
    }


    return (
        <div className={style.wrapper}>
            <div className={style.form_name}>
                <div>
                    <span className={style.name}>Sign In</span>
                </div>
                <div>
                    <span>Don't have an account? </span>
                    <span className={style.link_to_sign} onClick={()=>navigate('/signup')}> Sign Up</span>
                </div>
            </div>
            <div className={style.form_data}>
                <input className={style.form_data_input} type={"email"} placeholder={'Email address'} name={'email'}/>
            </div>
            <div className={style.show_password}>
                <input className={style.form_data_input} type={showPassword ? "text" : "password"}
                       placeholder={'Password'} name={'password'}/>
                <img className={style.eye_icon} src={"/images/sign/eye.svg"} alt={'Show password'}
                     onClick={handleClickShowPassword}/>
            </div>
            <div>
                <input className={style.check_is_agree} type={"checkbox"} name={'privacyPolicy'} id={'privacyPolicy'}/>
                <label form="{'privacyPolicy'}">
                    <span> Remember me </span>
                    <span className={style.bold_text}>Forgot password? </span>
                </label>


            </div>
            <div>
                <button className={style.submit_btn}>Sing Up</button>
            </div>
        </div>


    );
};

export default SigninForm;