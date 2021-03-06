import React, { Component } from 'react'
import { Jumbotron, Button} from 'reactstrap';
import {Link} from "react-router-dom";
import Counter from './counter'
import { Container ,Row, Col } from "reactstrap";




export default class Pembayaran extends Component {
  state={
    daftar:[
        {
          id: 1,
          number: 0,
          price: 15000,
          nama:"Sate Kelabang",
          gambar:"https://lambangmh.files.wordpress.com/2009/03/sate-kelabang.jpg?w=640&h=187"
          },
          {
          id: 2,
          number: 0,
          nama:"Sate Ulat Sagu",
          price: 10000,
          gambar:"https://ksmtour.com/media/images/articles12/sate-ulat-sagu-khas-papua.jpg"
          },
          {
          id: 3,
          number: 0,
          price: 20000,
          nama:"Sate Kalajengking",
          gambar:"https://steemitimages.com/p/o1AJ9qDyyJNSpZWhUgGYc3MngFqoAMwMH2EeFSWJ1dwCPG5Mx?format=match&mode=fit&width=640"
          },
          {
          id: 4,
          number: 0,
          price: 15000,
          nama:"Sate Kecoa",
          gambar:"http://3.bp.blogspot.com/-u3WG7ZAHg8Q/Vdguxft9DPI/AAAAAAAAAdA/OGwpDMA4hIQ/s1600/Cemilan.png"
          },
          {
          id: 5,
          number: 0,
          price: 10000,
          nama:"Daging Hiu",
          gambar:"https://img-global.cpcdn.com/003_recipes/4650f3c12fa3d11c/1200x630cq70/photo.jpg"
          },
          {
          id: 6,
          number: 0,
          price: 10000,
          nama:"Buaya bakar",
          gambar:"https://awsimages.detik.net.id/community/media/visual/2018/09/13/3b2423d1-e04c-4e3d-a42b-b1b8c04e6ca7.png?a=1"
          }
    ],
    total:0
};

tambahTotalHarga = harga =>{
  this.setState({
    total: this.state.total + harga
  });
  sessionStorage.total = this.state.total + harga;
};
kurangTotalHarga = harga =>{
  this.setState({
    total: this.state.total - harga
  });
  sessionStorage.total = this.state.total - harga;
}

pembayaran = () => {
  if (sessionStorage.total > 0) {
      onclick= alert("Pembayaran sukses! Terima kasih telah berbelanja!" )
      sessionStorage.total = 0;
    }
  else {
      onclick=alert("Pembayaran gagal,silahkan pilih barang terlebih dahulu!" )
      
    }
  };

  render() {
    return (
    
    <div>
      
      <Jumbotron fluid align="center" position="absolute">
        <p> Total Harga </p>
        <h2 align="center">{this.state.qty}</h2>
        <p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz8lzPKDvLHC_xlou9dXw2S9e0x05ZgER8FDEK9IeUjx05QQm" width="2.5%"/>
            Rp.{this.state.total}
        </p>
        <Button onClick={this.pembayaran} outline color="success" href="/">Bayar</Button>
        
      </Jumbotron>
      
        <Row>
      {this.state.daftar.map(item=>(
          
        <Col xs="12" md="6" lg="4"> 
          <Counter  
          daftar={item.nama} 
          gambar={item.gambar}
          tambahTotalHarga={this.tambahTotalHarga}
          kurangTotalHarga={this.kurangTotalHarga}
          ukuran={{ width: "85%" }} 
          harga={item.price}/>
        </Col>
      ))}
      </Row>
    </div>
    )
  }
}
