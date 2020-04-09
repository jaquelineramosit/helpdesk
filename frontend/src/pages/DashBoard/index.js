import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/SideBar';

export default function DashBoard() {
    return (
        <div>
            <Header />
            <Sidebar />
            <div class="content-wrapper">
                CONTENT
            </div>
        </div>
    )
    
}