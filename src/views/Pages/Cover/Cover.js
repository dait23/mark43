import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
// import { inject, observer} from "mobx-react";
import PropTypes from 'prop-types';
// @inject("appStore")
// @observer
class Cover extends Component {
  render() {
    //const store = this.props.appStore;
    return (
    

        <section className="section cover text-dark bg-gradient">
        <div className="container">
          <header className="section-header">
            <h2 className="fw-600 text-uppercase">{this.props.title}</h2>
            <p>{this.props.subtitle}</p>
          </header>


        </div>
      </section>

    );
  }
}

Cover.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Cover;
