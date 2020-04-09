// Header.js
import React, { Component } from 'react';

export default class Header extends Component {
    render(){
        return (
            <div class="wrapper">                
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="index3.html" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="#" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <form class="form-inline ml-3">
                        <div class="input-group input-group-sm">
                            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                <div class="input-group-append">
                                    <button class="btn btn-navbar" type="submit"></button>
                                </div>
                        </div>
                    </form>                 
            </div>
        )
    }
}