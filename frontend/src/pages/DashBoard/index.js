import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/SideBar';
import Content from '../../components/Content';

export default function DashBoard() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Content />
        </div>
    )
    
}