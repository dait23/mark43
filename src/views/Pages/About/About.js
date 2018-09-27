import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer, Provider } from "mobx-react";

import Header from '../Header';
import Footer from '../Footer';
import Cover from '../Cover';
import Services from './Services';
import Teams from './Teams';

import AppStore from '../../../stores/app.store';

const appStore = new AppStore();

class About extends Component {

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
          title="hi, we'are populix"
          subtitle="An innovative survey system aim to power the world's research."
         />
        <main className="main-content">

         <Services />
         <Teams />
        
        </main>

       <Footer />
      </div>
    </Provider>
    );
  }
}

export default About;
