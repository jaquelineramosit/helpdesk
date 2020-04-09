import React from 'react';
import { Link } from 'react-router-dom';
import{ FiLogIn } from 'react-icons/fi'
import{ FiLock } from 'react-icons/fi'
import logoimg from '../../assets/logo2.png';

import Header from '../../components/Header';

export default function Logon() {
    return (   
        <div>
            <div>
                <Header />
            </div>
            <div className="content-wrapper">
                <section className="form">

                <form>
                    <h3> Faça seu Logon</h3>
                    <input placeholder="Usuário" />
                    <input type="password" placeholder="Senha" />
                    <button className="button" type="submit">Logon</button>
                    <Link  className="back-link" to="/dashboard"><FiLogIn size={16} color="#E02041" />Criar Conta</Link>
                    <Link className="back-link" to="/password"><FiLock size={16} color="#E02041" /> Esqueci minha Senha</Link>
                    


                </form>
                </section>
                <img src={logoimg} alt="logo2" />
            </div>
        </div>  
    )
    
}