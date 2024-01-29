import React from 'react';

const ContactInformation = () => {
    return (
        <div>
            <form className={"cartForm"}>
                <label className={"CartFormTitle"}>Contact Information</label>
                <p className={"CartFormItemName"}>
                    <label>First Name</label>
                    <input type={"text"} name={"firstName"} placeholder={'First Name'}/>
                </p>
                <p className={"CartFormItemName"}>
                    <label>Last Name</label>
                    <input type={"text"} name={"lastName"} placeholder={'Last Name'}/>
                </p>
                <p className={"CartFormItemAddress"}>
                    <label>Phone Number</label>
                    <input type={"text"} name={"PhoneNumber"} placeholder={'Phone number'}/>
                </p>
                <p className={"CartFormItemAddress"}>
                    <label>Email address</label>
                    <input type={"text"} name={"firstName"} placeholder={'Your Email'}/>
                </p>
            </form>
        </div>
    );
};

export default ContactInformation;