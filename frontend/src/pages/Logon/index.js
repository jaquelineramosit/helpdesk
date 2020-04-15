import React from 'react';
import { Link } from 'react-router-dom';
import{ FiLogIn } from 'react-icons/fi'
import{ FiLock } from 'react-icons/fi'
import logoimg from '../../assets/logo2.png';

export default function Logon() {
    return (  
        <div className="hold-transition login-page">            
            <div className="login-box">
                <div className="login-logo">
                    <p>Help4</p>                    
                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <form>
                            <p className="login-box-msg"> Faça seu Logon</p>
                            <div className="input-group mb-3">
                                <input className="form-control" placeholder="Usuário" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Senha" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <button href="/dashboard"className="btn btn-primary btn-block" type="submit">Logon</button>
                            </div>  
                            <div className="input-group mb-3">
                                <img src={logoimg} alt="logo2" />
                            </div>                          
                        </form>   
                        <p class="mb-1">
                            <Link  className="back-link" to="/register"><FiLogIn size={16} color="#E02041" />Criar Conta</Link>
                        </p>
                        <p class="mb-1">
                            <Link className="back-link" to="/password"><FiLock size={16} color="#E02041" /> Esqueci minha Senha</Link>
                        </p>            
                    </div>                    
                </div>
            </div>             
        </div>
    )
    
}