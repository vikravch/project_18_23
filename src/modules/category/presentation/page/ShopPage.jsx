import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function ShopPage() {
    // const shop = useSelector(App => #);
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch();
    // },[]);

    return (

        <div>
            <div className="shopPageHeader">
                <div className="imageHolder">
                    <div className="textBoxPageHeader">
                        <div className="linkGroup">
                            <div className="buttonHome1">
                                <div className="linkText1">Home</div>
                                <div className="icon-chevron-right">
                                    <icon className="chevron-right"></icon>
                                </div>
                            </div>
                            <div className="buttonHome2">
                                <div className="linkText2">Link</div>
                                <div className="icon-chevron-right">
                                    <icon className="chevron-right"></icon>
                                </div>
                                <div className="buttonHome2">
                                    <div className="linkText2">Link</div>
                                    <div className="icon-chevron-right">
                                        <icon className="chevron-right"></icon>
                                    </div>
                                    <div className="buttonHome3">
                                        <div className="linkText3">Shop</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="textHeader">Shop Page</div>
                        <div className="textHeaderLower">Let’s design the place you always imagined.</div>
                    </div>

                </div>

            </div>

            {/*Далее ---- Products*/}
            <div>
                Category
            </div>

        </div>
    );
}

export default ShopPage;