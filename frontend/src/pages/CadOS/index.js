import React from 'react';
import './styles.css'

import Header from '../../components/Header';
import Sidebar from '../../components/SideBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


export default function DashBoard() {
    return (
        <div>
            <Header />
            <Sidebar />
            <div class="content-wrapper">
            
            <div className="content">
                <section>
                    <h2>Abertura de Ticket</h2>
                    
                    
                    </section>
                    <div className="ticket-container">  
                    <h4>Informações</h4>
                    <Form>
                        
  <Form.Row>
    <Form.Group  className="col-md-4" as={Col} controlId="formGriCliente">
      <Form.Label>Cliente</Form.Label>
      <Form.Control type="text" placeholder="Digite o Nome do Cliente" />
    </Form.Group>

    
    <Form.Group  className="col-md-4" as={Col} controlId="formGriLocal">
      <Form.Label>Local</Form.Label>
      <Form.Control type="text" placeholder="Digite o local" />
    </Form.Group>

    
    

  </Form.Row>
  <Form.Row>

  <Form.Group  className="col-md-2" as={Col} controlId="formGridPrioridade">
      <Form.Label>Prioridade</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>Selecione</option>
         <option value="AL">Alta</option>
          <option value="AP">Média</option>
          <option value="AP">Baixa</option>
                                    
      </Form.Control>
    </Form.Group>

  <Form.Group className="col-md-2" controlId="formGridDatadoChamado">
    <Form.Label>Data do Chamado</Form.Label>
    <Form.Control  type="date"/>
  </Form.Group>

  <Form.Group className="col-md-2" controlId="formGridDataValidade">
    <Form.Label>Data Validade do Chamado</Form.Label>
    <Form.Control  type="date" disabled/>
  </Form.Group>
  
  </Form.Row>

  <Form.Row>
  <Form.Group  className="col-md-4" controlId="formGridusuario">
    <Form.Label>Nome do usuário</Form.Label>
    <Form.Control placeholder="Digite o Nome do Usuário" />
     </Form.Group>
     <Form.Group  className="col-md-2" as={Col} controlId="formGridTipo">
      <Form.Label>Tipo de Ticket</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>Selecione</option>
         <option value="AL">Incidente</option>
          <option value="AP">Solicitação</option>
          <option value="AP">Question</option>                                   
      </Form.Control>
    </Form.Group>
    
  </Form.Row>

  
  <Form.Row>

  <Form.Group  className="col-md-5" controlId="formGridLogin">
    <Form.Label>Assunto</Form.Label>
    <Form.Control placeholder="Digite o Assunto do Ticket" />
  </Form.Group>

  
  </Form.Row>

  <Form.Row>
  <Form.Group className="col-md-5" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Descrição</Form.Label>
    <Form.Control as="textarea" rows="5" placeholder="Digite detalhadamente seu ticket" />
  </Form.Group> 
</Form.Row>
<Form.Row>
</Form.Row>
</Form>

<div class="card-footer col-md-12">
                        <div class="col-md-10 text-center">
<Button className="buttoncad"  type="submit"  variant="primary">Cadastrar</Button>
<Button className="button-can"  type="submit"  variant="danger">Cancelar</Button>
</div>
</div>


                    </div>
                    </div>
            
        </div>
        </div>
    )
    
}