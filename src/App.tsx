import React from 'react';
import './App.css';
import WeatherPage from "./modules/weather/presentation/pages/WeatherPage";
import {Route, Routes} from "react-router";
import NavigationRow from "./general/components/navigation/NavigationRow";
import NewsletterSubscribe from "./general/components/newsletter_subscribe/NewsletterSubscribe";
import Footer from "./general/components/footer/Footer";
import HomePage from "./modules/home_page/presentation/page/HomePage";
import CartPage from "./modules/cart/presentation/page/cart_main/CartPage";
import CompletePage from "./modules/cart/presentation/page/complete/CompletePage";
import CheckoutPage from "./modules/cart/presentation/page/checkout/CheckoutPage";
import AccountPage from "./modules/cart/presentation/page/account/AccountPage";



function App() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        }}>
            <NavigationRow/>
            <main style={{
                flex: 1
            }}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route element={<WeatherPage/>}/>
                    <Route element={<AccountPage/>} path="/account"/>
                    <Route element={<CartPage/>} path="/cart"/>
                    <Route element={<CheckoutPage/>} path={"/cart/checkout"}/>
                    <Route element={<CompletePage/>} path={"/cart/complete"}/>

                </Routes>
            </main>
            <NewsletterSubscribe/>
            <Footer/>
        </div>

    );
}

export default App;
