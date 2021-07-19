import React from "react";
import styled from "styled-components";
import route, { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Recommend from "./Recommend";

const Product = () => {
  const { id } = useParams();

  const [myData, setMyData] = React.useState([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    if (res) {
      setMyData(res.data[id - 1]);
      console.log(myData);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Image src={myData && myData.image} />
      <Wrap>
        <span>{myData && myData.title}</span>
        <des>{myData && myData.description}</des>
        <cat>{myData && myData.category}</cat>
      </Wrap>

      <Recommended>Recommended For You</Recommended>
      <Recommend />
    </Container>
  );
};

export default Product;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Image = styled.img`
  width: 400px;
  height: 270px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;

  span {
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1.8;
  }

  des {
    font-size: 15px;
    font-weight: normal;
    letter-spacing: 1.2;
    margin-top: 5px;
  }

  cat {
    font-size: 9px;
    font-weight: bold;
    color: tomato;
    margin-top: 5px;
  }
`;

const Recommended = styled.div`
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 1.2;
  // margin-bottom: 70px;
  margin-top: 40px;
`;
