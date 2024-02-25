import React from 'react';
import style from "./singUp.module.css";
import SingHeader from "../../../../general/components/sign/sign_header/SingHeader";
import SignupForm from "../../../../general/components/sign/signup_form/SignupForm";

const SignUp = () => {
    return (
        <div className={style.signup_page_wrapper}>
            <SingHeader/>
            <SignupForm/>
        </div>
    );
};

export default SignUp;