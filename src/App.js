import React from 'react';
import './styles/index.css';
import Header from "./components/Header/Header";
import Menu from "./components/MenuPage/Menu";
import Footer from "./components/Footer/Footer";
const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <div className='app-wrapper-content'>
                <Menu state = {props.state.MenuPage} />
            </div>
            <Footer />
        </div>

    );
}
export default App;
