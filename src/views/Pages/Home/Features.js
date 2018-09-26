import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';





class Features extends Component {


  render() {

    return (
     <section className="section features bg-blue text-white">
        <div className="container">
          <div className="row align-items-center h-100">

            <div className="col-lg-6">
             <h4>KENAPA POPULIX ?</h4>
              <h1>Siapapun kamu & <br/>apapun pekerjaanmu</h1>
              <p className="mt-5 mb-8">Tidak ada kecuali, studi yang kami sediakan bisa dilakukan oleh siapapun.</p>
       
            </div>

            <div className="col-lg-6 ml-auto d-none d-lg-block">
              <img src="assets/img/siapapun.png" className="img-responsive" alt="img" style={{marginTop:'-20%'}}/>
            </div>

          </div>
           <div className="row">
                <div className="col-4">
                  <p className="lead-5"><img src="assets/img/waktu-luang.png" alt="img"/></p>
                  <p className="text-uppercase fw-700 mb-0">Waktu luang bisa  menjadi uang</p>
                  <p>

                  Waktu 10-20 menit tidak akan terasa jika bisa memberi hasil  yang sepadan.

                  </p>
                </div>

                <div className="col-4">
                  <p className="lead-5"><img src="assets/img/waktu-luang2.png" alt="img"/></p>
                  <p className="text-uppercase fw-700 mb-0">Berbagai macam reward menantimu</p>
                  <p>Menunggu 10-20 menit tidak akan terasa jika bisa memberi hasil  yang sepadan.</p>
                </div>
                <div className="col-4">
                  <p className="lead-5"><img src="assets/img/waktu-luang3.png" alt="img"/></p>
                  <p className="text-uppercase fw-700 mb-0">Create result</p>
                  <p> Perusahaan akan semakin mengerti mengenai apa yang masyarakat butuhkan.</p>
                </div>
              </div>
      
        </div>
      </section>
    );
  }
}

export default Features;
