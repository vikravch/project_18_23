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
                    <Route element={<CartPage/>} path="/cart"/>
                    <Route element={<CompletePage/>} path={"/cart/complete"}/>
                    <Route path="/weather" element={<WeatherPage/>}/>
                </Routes>
            </main>
            <NewsletterSubscribe/>
            <Footer/>
        </div>

    );
}

export default App;
