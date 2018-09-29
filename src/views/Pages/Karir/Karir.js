import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer, Provider } from "mobx-react";

import Header from '../Header';
import Footer from '../Footer';
import Cover from '../Cover';
import Jobs from './Jobs';
// import Teams from './Teams';

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class Karir extends Component {

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
          title="Ingin bergabung dengan tim kami?"
        
         />
        <main className="main-content">
         <Jobs />
      
        
        </main>

       <Footer />
      </div>
    </Provider>
    );
  }
}

export default Karir;
