


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Counter from './components/counter'
import { Container ,Row, Col } from "reactstrap";


class App extends Component {

state={
  makanan:[
    {
    nama:'Sate Kelabang',
    gambar:"https://lambangmh.files.wordpress.com/2009/03/sate-kelabang.jpg?w=640&h=187"
    },
    {
      nama:'Sate Kelabang',
      gambar:"https://lambangmh.files.wordpress.com/2009/03/sate-kelabang.jpg?w=640&h=187"
      },
    {
      nama:'Sate Belalang',
      gambar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-oa3HM2zF2JK0MqPXSQ9ocXMLQ9xnoPcydoFPMpthoKhXB0-"
      }
  ]
};

  render() {
    return (
      <div align ="center">
        
        <Header NamaHeader="Header"/>
        <br></br>

        <Row>
        {this.state.makanan.map(item=>(
          
          <Col xs="6"><Counter  nama={item.nama} gambar={item.gambar} ukuran={{ width: "100%" }}/></Col>
        ))}
      </Row>
        {/* <Row>
        <Col xs="6"><Counter menu="Mie Rebus" gambar="http://cdn2.tstatic.net/manado/foto/bank/images/mi-instan_20180508_073137.jpg" ukuran={{ width: "100%" }}/></Col>
        <Col xs="6"><Counter menu="Mie Goreng" gambar="http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-saus-tiram.jpg" ukuran={{ width: "85%" }}/></Col>
       </Row> */}

       <br></br>
       <hr></hr>
     
      </div> 
    );
  }
}

export default App;




