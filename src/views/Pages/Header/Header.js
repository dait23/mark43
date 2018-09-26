import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Header extends Component {
  render() {
    return (
       




    <nav className="navbar navbar-expand-lg ">
      <div className="container">

        <div className="navbar-left">
          <button className="navbar-toggler" type="button">&#9776;</button>
          <a className="navbar-brand" href="#">
            <img className="logo-dark" src="assets/img/image.png" alt="logo" />
           
          </a>
        </div>

        <section className="navbar-mobile">
          <nav className="nav nav-navbar nav-transform-none ml-auto">
            <a className="nav-link" href="#">Researcher</a>
            <a className="nav-link" href="#">Tentang Kami</a>
            <a className="nav-link" href="#">Hubungi Kami</a>
            <a className="nav-link" href="#">Masuk</a>
            <a className="nav-link" href="#">Daftar</a>
          </nav>
        </section>

      </div>
    </nav>


    );
  }
}

export default Header;
