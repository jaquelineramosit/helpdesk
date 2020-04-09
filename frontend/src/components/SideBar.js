// SideBar.js
import React, { Component } from 'react';

export default class SideBar extends Component {
    render(){
        return (
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <div class="sidebar">
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div class="info">
                            <a href="#" class="d-block">Alexander Pierce></a>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}