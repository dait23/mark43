import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';





class Process extends Component {


  render() {

    return (
     <section className="section process">
        <div className="container">
          <header className="section-header">
            <h2>BEGINI PROSESNYA</h2>
  
            
          </header>

          <div className="row gap-y align-items-center py-7">
            <div className="col-md-5 mr-auto text-center text-md-left">
              <p className="lead-9 fw-900 lh-1 opacity-10">01</p>
              <h3 className="fw-600 lh-1">Daftar dan jawablah</h3>
              <p>Daftar dan jawablah setiap pertanyaan pre screening.</p>
            </div>

            <div className="col-md-6 text-center order-first order-md-last">
              <img src="assets/img/daftar.png" alt="daftar" />
            </div>
          </div>


          <div className="row gap-y align-items-center py-7">
            <div className="col-md-6 text-center">
              <img src="/assets/img/finish.png" alt="finish" />
            </div>

            <div className="col-md-5 ml-auto text-center text-md-left">
              <p className="lead-9 fw-900 lh-1 opacity-10">02</p>
              <h3 className="fw-600 lh-1">Selesaikan studi</h3>
              <p>Selesaikan studi yang kamu bisa ambil.</p>
            </div>
          </div>


          <div className="row gap-y align-items-center py-7">
            <div className="col-md-5 text-center text-md-left">
              <p className="lead-9 fw-900 lh-1 opacity-10">03</p>
              <h3 className="fw-600 lh-1">Reward</h3>
              <p>Terima reward dan tarik ke rekeningmu.</p>
            </div>

            <div className="col-md-6 ml-auto text-center order-first order-md-last">
              <img src="assets/img/reward.png" alt="rewaed" />
            </div>
          </div>


        </div>
      </section>
    );
  }
}

export default Process;
