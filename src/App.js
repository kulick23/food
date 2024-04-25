import React from 'react';
import './styles/index.css';
import Header from "./components/Header/Header";
import Menu from "./components/MenuPage/Menu";
import Footer from "./components/Footer/Footer";
const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header counter = {props.counter} />
            <div className='app-wrapper-content'>
                <Menu counter = {props.counter} DataStore = {props.DataStore} />
            </div>
            <Footer />
        </div>

    );
}
export default App;
