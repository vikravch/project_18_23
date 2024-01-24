import React from 'react';
import './App.css';
import WeatherPage from "./modules/weather/presentation/pages/WeatherPage";
import {Route, Routes} from "react-router";
import NavigationRow from "./general/components/navigation/NavigationRow";
import NewsletterSubscribe from "./general/components/newsletter_subscribe/NewsletterSubscribe";
import Footer from "./general/components/footer/Footer";
import HomePage from "./modules/home_page/presentation/page/HomePage";
import ProfilePage from "./modules/profilePage/presentation/page/ProfilePage";

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
                    <Route element={<ProfilePage/>} path={'/profile'}/>
                </Routes>
            </main>
            <NewsletterSubscribe/>
            <Footer/>
        </div>

    );
}

export default App;
