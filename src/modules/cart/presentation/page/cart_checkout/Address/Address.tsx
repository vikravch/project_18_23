import React from 'react';

const Address = () => {
    return (
        <div>
            <form>
                <label>Shipping Address</label>
                <p>
                    <label>Street Address*</label>
                    <input type={"text"} name={"address"} placeholder={"Street Address"}/>
                </p>
                <p>
                    <label>Country*</label>
                    <input type={"text"} name={"country"} placeholder={"Country"}/>
                </p>
                <p>
                    <label>Town/City</label>
                    <input type={"text"} name={"city"} placeholder={"Town/City"}/>
                </p>
                <p>
                    <label>State</label>
                    <input type={"text"} name={"state"} placeholder={"State"}/>
                </p>
                <p>
                    <label>Zip Code</label>
                    <input type={"number"} name={"zipCode"} placeholder={"Zip Code"}/>
                </p>
                <p>
                    <input type={"checkbox"} name={"isDifferentbillingAddress"}/>
                    <label>Use a different billing address (optional)</label>
                </p>
            </form>
        </div>
    );
};

export default Address;