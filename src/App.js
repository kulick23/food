import React from 'react';
import './styles/index.css';
import Header from "./components/Header/Header";
import Menu from "./components/MenuPage/Menu";
import Footer from "./components/Footer/Footer";
const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header getTotalItems = {props.getTotalItems} />
            <div className='app-wrapper-content'>
                <Menu updateTotalItems = {props.updateTotalItems} state = {props.state.MenuPage} />
            </div>
            <Footer />
        </div>

    );
}
export default App;
