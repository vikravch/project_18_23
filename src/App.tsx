import React from 'react';
import './App.css';
import WeatherPage from "./modules/weather/presentation/pages/WeatherPage";
import {Route, Routes} from "react-router";
import NavigationRow from "./general/components/navigation/NavigationRow";
import HomePage from "./modules/home_page/presentation/page/HomePage";
import ProfilePage from "./modules/profile_page/presentation/page/ProfilePage";
import ProfileAddressPage from "./modules/profile_address_page/presentation/page/ProfileAddressPage";
import ProfileOrderHistoryPage from "./modules/profile_orders_page/presentation/page/ProfileOrderHistoryPage";
import Product from "./modules/product_page/presentation/components/Product";
import ShopPage from "./modules/category/presentation/page/ShopPage";
import Blog from "./modules/blog/page/Blog";
import CartPage from "./modules/cart/presentation/page/cart_main/CartPage";
import CompletePage from "./modules/cart/presentation/page/complete/CompletePage";
import CartCheckout from "./modules/cart/presentation/page/cart_checkout/cart_checkout";


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
                    <Route path={'/profile'} element={<ProfilePage/>} />
                    <Route path={'/profile/address'} element={<ProfileAddressPage/>} />
                    <Route path={'/profile/orders'} element={<ProfileOrderHistoryPage/>} />
                    <Route path={"/product"} element={<Product/>}/>
                    <Route element={<ShopPage/>} path="/shop"/>
                    <Route element={<Blog/>} path="/blog/"/>
                    <Route element={<CartPage/>} path="/cart"/>
                    <Route element={<CartCheckout/>} path={"/cart/checkout"}/>
                    <Route element={<CompletePage/>} path={"/cart/complete"}/>
                    <Route path="/weather" element={<WeatherPage/>}/>
                </Routes>
            </main>

        </div>

    );
}

export default App;
