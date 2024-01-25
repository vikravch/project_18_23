import React from 'react';
import './App.css';
import WeatherPage from "./modules/weather/presentation/pages/WeatherPage";
import {Route, Routes} from "react-router";
import NavigationRow from "./general/components/navigation/NavigationRow";
import NewsletterSubscribe from "./general/components/newsletter_subscribe/NewsletterSubscribe";
import Footer from "./general/components/footer/Footer";
import HomePage from "./modules/home_page/presentation/page/HomePage";
import ProfilePage from "./modules/profile_page/presentation/page/ProfilePage";
import ProfileAddressPage from "./modules/profile_address_page/presentation/page/ProfileAddressPage";
import ProfileOrderHistoryPage from "./modules/profile_orders_page/presentation/page/ProfileOrderHistoryPage";

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
                    <Route path={'/profile'} element={<ProfilePage/>} />
                    <Route path={'/profile/address'} element={<ProfileAddressPage/>} />
                    <Route path={'/profile/orders'} element={<ProfileOrderHistoryPage/>} />
                </Routes>
            </main>
            <NewsletterSubscribe/>
            <Footer/>
        </div>

    );
}

export default App;
