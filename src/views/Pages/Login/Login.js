import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer, Provider } from "mobx-react";

import Header from '../Header';
import Footer from '../Footer';

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class Login extends Component {

  constructor(props) {
    super(props);
  }


  render() {
      const { store } = this.props;

    return (
    <Provider appStore = {appStore}>
      <div className="flex-row align-items-center bg-white">
        <Header />

        <main role="main" className="container">

          

          <Row className="justify-content-center">

           <Col md="11" className="d-flex flex-row mt-5">
        
             <Col md="6" className="d-flex flex-column hero">
               <h1>
                 Selamat datang <br />kembali.
               </h1>
               <p>
               Silahkan masuk ke dalam akun Populix anda
                </p>
              </Col>
              <Col md="6" className="d-flex flex-column hero">
               
               <Form>
                   <FormGroup>
                    <Label className="label">Alamat Email</Label>
                    <Input type="email" className="input-form" name="email" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="label">Kata Sandi</Label><a href="forgot" className="float-right forgot">Lupa Kata sandi ?</a>
                    <Input type="password" className="input-form" name="password"  placeholder="" />
                  </FormGroup>
               </Form>
               <div className="d-flex mt-2 justify-content-between mb-4" style={{width:'100%'}}>
                <button type="button" className="btn button btn-login btn-block">Masuk</button>
               </div>
               <img src="assets/img/line.png" />

               <div className="d-flex mt-4  justify-content-between mb-2" style={{width:'100%'}}>
                
                

                <button type="button" className="btn btn-social fb"><i className="fab fa-facebook-f"></i> Facebook</button>
                <button type="button" className="btn btn-social google"><img src="assets/img/google.png" width = '15'/> Google</button>
                <button type="button" className="btn btn-social linkedin"><i className="fab fa-linkedin"></i> Linkedin</button>
               
               
               </div>
              </Col>

          

          </Col>
          </Row>
        
        </main>

       <Footer />
      </div>
    </Provider>
    );
  }
}

export default Login;
