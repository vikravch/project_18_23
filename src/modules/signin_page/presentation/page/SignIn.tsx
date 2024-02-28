import React from 'react';
import style from "./signIn.module.css";
import SingHeader from "../../../../general/components/sign/sign_header/SingHeader";
import SigninForm from "../../../../general/components/sign/signin_form/SigninForm";

const SignIn = () => {
    return (
        <div className={style.sign_page_wrapper}>
            <SingHeader/>
            <SigninForm/>
        </div>
    );
};

export default SignIn;