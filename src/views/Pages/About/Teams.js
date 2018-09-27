import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class Teams extends Component {

  constructor(props) {
    super(props);
  }


  render() {
     

    return (

      <section className="section overflow-hidden bg-gray teams">

       <div className="container">
          <header className="section-header">
            <h2 className="text-uppercase fw-600">Our team profile</h2>
            <p className="lead">An innovative survey system aim to power the world's research.</p>
          </header>

          <div className="row gap-y gap-2" data-shuffle="list">
           
            <div className="col-6 col-lg-3" data-shuffle="item">
                <a className="portfolio-1" href="#" data-toggle="modal" data-target="#modal-portfolio">
                  <img src="assets/img/avatar/8.jpg" alt="screenshot" className="img-responsive img-teams rounded"/>
                  <div className="portfolio-detail">
                    <h5 className="text-white"><a href="#"><i className="fa fa-linkedin"></i></a></h5>
                  </div>
                </a>
                 <div className="card-body text-center">
                    <h6 className="mb-0 text-uppercase" style={{color:'#179DFE'}}>Alexandre S</h6>
                    <small className="small-5 text-lightest text-uppercase ls-2">CEO of Populix</small>
                  </div>
              </div>

              <div className="col-6 col-lg-3" data-shuffle="item">
                <a className="portfolio-1" href="#" data-toggle="modal" data-target="#modal-portfolio">
                  <img src="assets/img/avatar/5.jpg" alt="screenshot" className="img-responsive img-teams rounded"/>
                  <div className="portfolio-detail">
                    <h5 className="text-white"><a href="#"><i className="fa fa-linkedin"></i></a></h5>
                  </div>
                </a>
                 <div className="card-body text-center">
                    <h6 className="mb-0 text-uppercase" style={{color:'#179DFE'}}>Alexandre S</h6>
                    <small className="small-5 text-lightest text-uppercase ls-2">CEO of Populix</small>
                  </div>
              </div>


              <div className="col-6 col-lg-3" data-shuffle="item">
                <a className="portfolio-1" href="#" data-toggle="modal" data-target="#modal-portfolio">
                  <img src="assets/img/avatar/6.jpg" alt="screenshot" className="img-responsive img-teams rounded"/>
                  <div className="portfolio-detail">
                    <h5 className="text-white"><a href="#"><i className="fa fa-linkedin"></i></a></h5>
                  </div>
                </a>
                 <div className="card-body text-center">
                    <h6 className="mb-0 text-uppercase" style={{color:'#179DFE'}}>Alexandre S</h6>
                    <small className="small-5 text-lightest text-uppercase ls-2">CEO of Populix</small>
                  </div>
              </div>


              <div className="col-6 col-lg-3" data-shuffle="item">
                <a className="portfolio-1" href="#" data-toggle="modal" data-target="#modal-portfolio">
                  <img src="assets/img/avatar/7.jpg" alt="screenshot" className="img-responsive img-teams rounded"/>
                  <div className="portfolio-detail">
                    <h5 className="text-white"><a href="#"><i className="fa fa-linkedin"></i></a></h5>
                  </div>
                </a>
                 <div className="card-body text-center">
                    <h6 className="mb-0 text-uppercase" style={{color:'#179DFE'}}>Alexandre S</h6>
                    <small className="small-5 text-lightest text-uppercase ls-2">CEO of Populix</small>
                  </div>
              </div>

              <div className="col-6 col-lg-3" data-shuffle="item">
                <a className="portfolio-1" href="#" data-toggle="modal" data-target="#modal-portfolio">
                  <img src="assets/img/avatar/8.jpg" alt="screenshot" className="img-responsive img-teams rounded"/>
                  <div className="portfolio-detail">
                    <h5 className="text-white"><a href="#"><i className="fa fa-linkedin"></i></a></h5>
                  </div>
                </a>
                 <div className="card-body text-center">
                    <h6 className="mb-0 text-uppercase" style={{color:'#179DFE'}}>Alexandre S</h6>
                    <small className="small-5 text-lightest text-uppercase ls-2">CEO of Populix</small>
                  </div>
              </div>


              <div className="col-6 col-lg-3" data-shuffle="item">
                <a className="portfolio-1" href="#" data-toggle="modal" data-target="#modal-portfolio">
                  <img src="assets/img/avatar/7.jpg" alt="screenshot" className="img-responsive img-teams rounded"/>
                  <div className="portfolio-detail">
                    <h5 className="text-white"><a href="#"><i className="fa fa-linkedin"></i></a></h5>
                  </div>
                </a>
                 <div className="card-body text-center">
                    <h6 className="mb-0 text-uppercase" style={{color:'#179DFE'}}>Alexandre S</h6>
                    <small className="small-5 text-lightest text-uppercase ls-2">CEO of Populix</small>
                  </div>
              </div>
              <div className="col-6 col-lg-3" data-shuffle="item">
                <a className="portfolio-1" href="#" data-toggle="modal" data-target="#modal-portfolio">
                  <img src="assets/img/avatar/6.jpg" alt="screenshot" className="img-responsive img-teams rounded"/>
                  <div className="portfolio-detail">
                    <h5 className="text-white"><a href="#"><i className="fa fa-linkedin"></i></a></h5>
                  </div>
                </a>
                 <div className="card-body text-center">
                    <h6 className="mb-0 text-uppercase" style={{color:'#179DFE'}}>Alexandre S</h6>
                    <small className="small-5 text-lightest text-uppercase ls-2">CEO of Populix</small>
                  </div>
              </div>

              <div className="col-6 col-lg-3" data-shuffle="item">
                <a className="portfolio-1" href="#" data-toggle="modal" data-target="#modal-portfolio">
                  <img src="assets/img/avatar/5.jpg" alt="screenshot" className="img-responsive img-teams rounded"/>
                  <div className="portfolio-detail">
                    <h5 className="text-white"><a href="#"><i className="fa fa-linkedin"></i></a></h5>
                  </div>
                </a>
                 <div className="card-body text-center">
                    <h6 className="mb-0 text-uppercase" style={{color:'#179DFE'}}>Alexandre S</h6>
                    <small className="small-5 text-lightest text-uppercase ls-2">CEO of Populix</small>
                  </div>
              </div>

              

             




          </div>



        </div>
        
      </section>
    
    );
  }
}

export default Teams;
