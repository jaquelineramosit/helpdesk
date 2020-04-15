// SideBar.js
import React, { Component } from 'react';

export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <div className="sidebar">
                    <a href="/" className="brand-link">
                        <span className="brand-text font-weight-light">Help4</span>
                    </a>

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="info">
                            <a href="#" className="d-block">Usuário</a>
                        </div>
                    </div>
                </div>

                <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
            
           
            <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
                <i className="nav-icon fas fa-chart-pie"></i>
                <p>
                Ordens de Serviços
                <i className="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul className="nav nav-treeview">
                <li className="nav-item">
                <a href="/cadOS" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Abrir uma  nova OS</p>
                </a>
                </li>
                <li className="nav-item">
                <a href="pages/charts/flot.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Listagem de OS</p>
                </a>
                </li>
                <li className="nav-item">
               
                </li>
            </ul>
            </li>
            
            
          
           
        </ul>
                </nav>
            </aside>
        )
    }
}