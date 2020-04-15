import React from 'react';
import './styles.css'
import{FiArrowLeft} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';





export default function Password() {
    return (

<div className="password-container">
            <div className="content">
                <section>
                    <h2>Recuperação de Senha</h2>
                   <p>Esqueceu sua senha? Tudo bem! Nós enviaremos outra para você.</p>

                    
                    
                    </section>
                    <Form>
  <Form.Row>
    <Form.Group className="col-md-11"  as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Digite seu email" />
    </Form.Group>
    </Form.Row>
    </Form>
    <Button className="button-password"  type="submit"  variant="primary">Enviar</Button>
    <p class="mb-1">
    <Link className="back-linkp" to="/"><FiArrowLeft size={16} color="#E02041" /> Voltar ao Menu de Login</Link>
</p>


                    </div>
                    </div>

    );

    
}