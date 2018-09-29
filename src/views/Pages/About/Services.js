import React, { Component } from 'react';
import { Button, Jumbotron, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class Services extends Component {

  constructor(props) {
    super(props);
  }


  render() {
     

    return (

      <section className="section services">
        <div className="container">
         <div className="row">
            <div className="col-md-8 mx-auto">

              <div className="video-wrapper ratio-16x9">
                <iframe width="500" height="300" src="https://www.youtube.com/embed/ZSH88zL6CCQ?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>

            </div>
          </div>
        <header className="section-header mt-7">

            <p>
    
         Populix adalah platform wawasan konsumer untuk membangun database dari responden yang berasal dari seluruh Indonesia untuk membantu bisnis, institusi akademi, pemerintah, dan juga NGO agar mereka dapat mendapatkan akses kepada data uang akurat, terpercaya dan berbasis real-time.


            </p>
          </header>
          <div className="row gap-y">

            <div className="col-lg-4">
            <div className="card shadow-4">
              <div className="card-body border text-center">
                <p className="my-5"><img src="assets/img/about1.png" alt="about1"/></p>
                <h5>Kredibilitas</h5>
                <p>Kredibilitas - partisipan kami merupakan orang-orang yang sudah disaring secara individu.</p>
            
              </div>
             </div>
            </div>


            <div className="col-lg-4">
            <div className="card shadow-4">
              <div className="card-body border text-center">
                <p className="my-5"><img src="assets/img/about2.png" alt="about1"/></p>
                <h5>Kecepatan</h5>
                <p>Kami menjamin kecepatan dan ketepatan dalam setiap riset studi yang dijalankan.</p>
            
              </div>
             </div>
            </div>

          <div className="col-lg-4">
            <div className="card shadow-4">
              <div className="card-body border text-center">
                <p className="my-5"><img src="assets/img/about3.png" alt="about1"/></p>
                <h5>Penuh Wawasan</h5>
                <p>Hasil studi yang berkualitas tinggi untuk membantu mengeksplorasi setiap pertanyaan mengenai riset yang ada</p>
            
              </div>
             </div>
            </div>
            


           

          </div>
        </div>
      </section>
    
    );
  }
}

export default Services;
