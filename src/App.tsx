import React from 'react';
import './App.css';
import WeatherPage from "./modules/weather/presentation/pages/WeatherPage";
import {Route, Routes} from "react-router";
import NavigationRow from "./general/components/navigation/NavigationRow";
import NewsletterSubscribe from "./general/components/newsletter_subscribe/NewsletterSubscribe";
import Footer from "./general/components/footer/Footer";
import HomePage from "./modules/home_page/presentation/page/HomePage";
import Product from "./modules/product_page/presentation/components/Product";
import ShopPage from "./modules/category/presentation/page/ShopPage";
import Blog from "./modules/blog/page/Blog";
import Article from "./modules/blog/presentation/Article/Article";
import CartPage from "./modules/cart/presentation/page/cart_main/CartPage";
import CompletePage from "./modules/cart/presentation/page/complete/CompletePage";
import Wrapper from "./general/components/login/Wrapper";
// import CheckoutPage from "./modules/cart/presentation/page/checkout/CheckoutPage";

function App() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            maxWidth: "1440px",
            margin: "0px auto",
            width: "100%"
        }}>
            <NavigationRow/>
            <main style={{
                flex: 1
            }}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route element={<WeatherPage/>}/>
                    <Route path={"/product"} element={<Product/>}/>
                    <Route element={<ShopPage/>} path="/shop"/>
                    <Route element={<Blog/>} path="/blog/"/>
                    <Route element={<CartPage/>} path="/cart"/>
                    <Route element={<CompletePage/>} path={"/cart/complete"}/>
                    <Route path="/weather" element={<WeatherPage/>}/>
                    <Route path="/login" element={<Wrapper/>}/>
                </Routes>
            </main>
            <NewsletterSubscribe/>
            <Footer/>
        </div>

    );
}

export default App;
