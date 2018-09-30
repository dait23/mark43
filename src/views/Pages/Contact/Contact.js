import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer, Provider } from "mobx-react";

import Header from '../Header';
import Footer from '../Footer';
import Cover from '../Cover';
// Jobs from './Jobs';
// import Teams from './Teams';

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class Contact extends Component {

  constructor(props) {
    super(props);
  }


  render() {
      const { store } = this.props;

    return (
    <Provider appStore = {appStore}>
      <div>
        <Header />
        <Cover 
          title="HUBUNGI KAMI"
          subtitle="Jika masih ada pertanyaan lebih lanjut bisa menghubungi kami"
        
         />
        <main className="main-content">
        
      
        
        </main>

       <Footer />
      </div>
    </Provider>
    );
  }
}

export default Contact;
