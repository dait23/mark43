import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';





class Download extends Component {


  render() {

    return (
     <section className="section">
        <div className="container">
          <header className="section-header" style={{marginBottom:'20px'}}>
            <h2 className="lead-5 fw-700 text-uppercase"><strong>Yuk mulai cari penghasilan lewat Populix!</strong></h2>
          </header>

          <p className="text-center">
            <a className="btn btn-lg btn-warning w-250 mb-3" href="#">Gabung Sekarang</a><br />
            <small className="text-lighter">Masih bingung? Yuk cari tau lebih banyak tentang Populix <a href="#">disini. </a>  </small>
          </p>
        </div>
      </section>
    );
  }
}

export default Download;
