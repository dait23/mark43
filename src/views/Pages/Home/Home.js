import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer, Provider } from "mobx-react";

import Header from '../Header';
import Footer from '../Footer';
import Jumbo from './Jumbo';
import Partner from './Partner';
import Features from './Features';
import Process from './Process';

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class Home extends Component {

  constructor(props) {
    super(props);
  }


  render() {
      const { store } = this.props;

    return (
    <Provider appStore = {appStore}>
     <div>
     
        <Header />
        <Jumbo />

         <main className="main-content">

          <Partner />
          <Features />
          <Process />

         </main>

         <Footer />

     </div>
       

        
    
    
    </Provider>
    );
  }
}

export default Home;
