import React, { Component } from "react";

import Product from "../components/Product";

//css
import styled from "styled-components";

//importing consumer
import { DataConsumer } from "../contex/DataContex";

export default class Main extends Component {

  
  render() {

    return (
      <div className="container">
      <Title className="p-3">
Welcome to our store

      </Title>
       <div className="row">
    
          <DataConsumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product._id} product={product} addToCart={value.addToCart}/>;
              });
            }}
          </DataConsumer>
           </div>
      </div>
    );
  }
}



const Title = styled.h1`
text-align:center
`;