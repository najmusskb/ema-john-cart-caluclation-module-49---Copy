import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* outlet mane hocch ei jaygay onek kichu change hobe jeita main er under e joto gula childrean thakbe  */}
            <Outlet></Outlet>


        </div>
    );
};

export default Main;