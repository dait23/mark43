import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';





class Jumbo extends Component {


  render() {

    return (
     <header className="header" style={{backgroundImage: 'url(assets/img/bg.png)', backgroundPosition:'bottom center', backgroundSize:'contain', backgroundRepeat:'no-repeat', height:500, paddingTop:'15%'}}>

      <div className="container text-center">

          <div className="row h-50">
            <div className="col-md-12 col-xl-10 mx-auto align-self-center">
              <h1 className="fw-700 text-uppercase">Isi survey dan raih berbagai reward</h1>
              <p className="lead-2 col-xl-9 mx-auto mt-6 mb-7">Pernah terpikir untuk menghasilkan uang hanya dengan menjawab berdasarkan kebiasaanmu sehari hari ?</p>
              <hr className="w-50px mb-2" />
              <p className="gap-xy">
                <a className="btn btn-lg btn-round btn-warning mw-200" href="#">Daftarkan Saya</a>
                <a className="btn btn-lg btn-round btn-primary mw-200" href="https://www.youtube.com/watch?v=ZSH88zL6CCQ" data-provide="lightbox"><i className="fa fa-play mr-2"></i> Lihat Video</a>
              </p>
            </div>

           
          </div>

        </div>
    </header>
    );
  }
}

export default Jumbo;
