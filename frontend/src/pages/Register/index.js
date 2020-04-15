import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import{ FiArrowLeft } from 'react-icons/fi'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';





export default function Register() {
    return (

<div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    
                    
                    </section>
                    <Form>
  <Form.Row>
    <Form.Group  className="col-md-4" as={Col} controlId="formGriNome">
      <Form.Label>Nome</Form.Label>
      <Form.Control type="text" placeholder="Digite seu nome" />
    </Form.Group>

    <Form.Group className="col-md-4" as={Col} controlId="formGridSobrenome">
      <Form.Label>Sobrenome</Form.Label>
      <Form.Control type="password" placeholder="Digite seu Sobrenome" />
    </Form.Group>
    <Form.Group className="col-md-2 "as={Col} controlId="formGridGenero">
      <Form.Label>Gênero</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>Selecione</option>
        <option>Masculino</option>
        <option>Feminino</option>
      </Form.Control>
    </Form.Group>
    <Form.Group className="col-md-2" as={Col} controlId="formGridDataNasc">
      <Form.Label>Data de Nascimento</Form.Label>
      <Form.Control type="date" placeholder="Digite seu Sobrenome" />
    </Form.Group>
    

  </Form.Row>
  <Form.Row>

  <Form.Group  className="col-md-4" controlId="formGridLogradouro">
    <Form.Label>Logradouro</Form.Label>
    <Form.Control placeholder="Informe seu Logradouro" />
  </Form.Group>

  <Form.Group className="col-md-4" controlId="formGridBairro">
    <Form.Label>Bairro</Form.Label>
    <Form.Control placeholder="Informe seu bairro" />
  </Form.Group>

  <Form.Group  className="col-md-2" controlId="formGridNúmero">
    <Form.Label>Número</Form.Label>
    <Form.Control placeholder="Número" />
    
  </Form.Group>
  <Form.Group  className="col-md-2" controlId="formGridComplemento">
    <Form.Label>Complemento</Form.Label>
    <Form.Control placeholder="Compl." />
     </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group  className="col-md-3" controlId="formGridCEP">
    <Form.Label>CEP</Form.Label>
    <Form.Control placeholder="" />
     </Form.Group>
    <Form.Group  className="col-md-3" as={Col} controlId="formGridCity">
      <Form.Label>Cidade</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group  className="col-md-3" as={Col} controlId="formGridState">
      <Form.Label>Estado</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>Selecione</option>
        <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                    <option value="EX">Estrangeiro</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Form.Row>

  <Form.Group  className="col-md-3" controlId="formGridTelefone">
    <Form.Label>Telefone Fixo</Form.Label>
    <Form.Control placeholder="(99)9999-9999" />
  </Form.Group>

  <Form.Group className="col-md-3" controlId="formGridCelular">
    <Form.Label>Celular</Form.Label>
    <Form.Control placeholder="(99)9999-9999" />
  </Form.Group>

  <Form.Group  className="col-md-3" controlId="formGridRG">
    <Form.Label>RG</Form.Label>
    <Form.Control type="number" placeholder="Digite apenas números" />
    
  </Form.Group>
  <Form.Group  className="col-md-3" controlId="formGridCPF">
    <Form.Label>CPF</Form.Label>
    <Form.Control type="number" placeholder="Digite apenas números" />  
  </Form.Group>
  </Form.Row>
  <Form.Row>

  <Form.Group  className="col-md-3" controlId="formGridLogin">
    <Form.Label>Login</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group className="col-md-3" controlId="formGridSenha">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="" />
  </Form.Group>

  <Form.Group  className="col-md-3" controlId="formGridConfirmaSenha">
    <Form.Label>Confirmar senha</Form.Label>
    <Form.Control type="password" placeholder="" />
    
  </Form.Group>
  <Form.Group  className="col-md-3" controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Digite seu Email" />  
  </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group  className="col-md-3" as={Col} controlId="formGridPerfilAcesso">
      <Form.Label>Perfil de Acesso</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>Selecione</option>
        <option value="AC">Analista</option>
         <option value="AL">Administrador</option> 
         <option value="AP">Diretor</option>
         <option value="AP">Gerência</option>
                                    
      </Form.Control>
    </Form.Group>
   
</Form.Row>
<Form.Row>
<Button className="button-register"  type="submit"  variant="primary">Cadastrar</Button>

</Form.Row>
<p class="mb-1">
<Link className="back-link" to="/"><FiArrowLeft size={16} color="#E02041" /> Voltar ao Menu de Login</Link>
</p>
</Form>
                    </div>
                    </div>

    );

    
}