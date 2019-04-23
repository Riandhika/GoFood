import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class Counter extends Component {
  state = {
    number: 1,
    harga: 5000,
    biaya: 5000
  };

  //ecma script//
  Nambah = () => {
    this.setState(({ number,harga, biaya }) => ({
      number: number + 1,
      harga: harga+biaya
    }));
  };

  Ngurang = () => {
    var number = this.state.number;
    if (number >1){
    this.setState(({ number,harga, biaya  }) => ({
      number: number - 1,
      harga: harga-biaya
    }));
  }
  };

  render() {
    return (
      <div>
        <Card style={{ width: "50%" }}>
          <CardImg
            top
            width="100%"
            src={this.props.gambar}
            alt="nama"
          />
          <CardBody align="center">
            <CardTitle style={{ fontweight: "bold" }}>
              {this.props.nama}
            </CardTitle>
            <CardSubtitle>
             Pesan Sekarang ?
            </CardSubtitle>

            <p>pesan berapa</p>
            <h1>{this.state.number}</h1>
            <p>Harga: {this.state.harga}</p>
            
            <Button onClick={this.Nambah} className="btn btn-success m-2">
              +
            </Button>
            <Button onClick={this.Ngurang} className="btn btn-danger m-2">
              -
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
