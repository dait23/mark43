import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { inject, observer} from "mobx-react";

@inject("appStore")
@observer
class Footer extends Component {
  render() {
    const store = this.props.appStore;
    return (
    

        <footer className="footer">
        <div className="container">
          <div className="row gap-y align-items-center">

            <div className="col-md-6 text-center text-md-left">
              <small>&copy; {store.footer}</small>
            </div>

            <div className="col-md-6 text-right text-md-right">
              <div className="nav nav-footer">
               <a className="nav-link" href="faq">FAQ</a>
                <a className="nav-link" href="karir">Karir</a>
                <a className="nav-link" href="#">Aturan Privasi</a>
                <a className="nav-link" href="#">Syarat dan Ketentuan</a>
                <a className="nav-link" href="#">Kontak</a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
