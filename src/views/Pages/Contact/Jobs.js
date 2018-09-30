import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class Jobs extends Component {

  constructor(props) {
    super(props);
  }


  render() {
     

    return (

      <section className="section">

        <div className="container">

        <header className="section-header text-left text-uppercase fw-600" style={{maxWidth:'100%'}}>
            <h2 style={{fontSize:20}}>Current Opening</h2>
      
          </header>

           <div className="accordion accordion-connected shadow-5" id="accordion-job">

            <div className="card">
              <h6 className="card-title">
                <a className="d-flex align-items-center collapsed" data-toggle="collapse" href="#collapse-job-1">
                  <strong className="mr-auto" style={{color:'#179DFE'}}>Graphic Designer</strong>
                  <span className="small text-lighter">Jakarta <i className="fa fa-map-marker ml-2"></i></span>
                </a>
              </h6>

              <div id="collapse-job-1" className="collapse show" data-parent="#accordion-job">
                <div className="card-body">
                  <p>Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.</p>

                 
                </div>
              </div>
            </div>

             <div className="card">
              <h6 className="card-title">
                <a className="d-flex align-items-center collapsed" data-toggle="collapse" href="#collapse-job-1">
                  <strong className="mr-auto" style={{color:'#179DFE'}}>Software Developer</strong>
                  <span className="small text-lighter">Jakarta <i className="fa fa-map-marker ml-2"></i></span>
                </a>
              </h6>

              <div id="collapse-job-1" className="collapse" data-parent="#accordion-job">
                <div className="card-body">
                  <p>Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.</p>

                 
                </div>
              </div>
            </div>

             <div className="card">
              <h6 className="card-title">
                <a className="d-flex align-items-center collapsed" data-toggle="collapse" href="#collapse-job-1">
                  <strong className="mr-auto" style={{color:'#179DFE'}}>Account Manager</strong>
                  <span className="small text-lighter">Jakarta <i className="fa fa-map-marker ml-2"></i></span>
                </a>
              </h6>

              <div id="collapse-job-1" className="collapse" data-parent="#accordion-job">
                <div className="card-body">
                  <p>Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, a complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Front-end Engineering.</p>

                 
                </div>
              </div>
            </div>





           </div>

        </div>
       
      </section>
    
    );
  }
}

export default Jobs;
