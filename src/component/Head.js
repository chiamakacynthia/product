import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const App = () => {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    if (res) {
      setFetchData(res.data);
      console.log("this is the data:", fetchData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {fetchData.map(({ id, title, description, image, category }) => (
        <Link
          to="/Product/:id"
          style={{
            textDecoration: "none",
          }}
        >
          <Wrap key={id}>
            <Image src={image} />
            <span>{title}</span>
            <div>{category}</div>
          </Wrap>
        </Link>
      ))}
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 5px;
  object-fit: cover;
`;

const Wrap = styled.div`
  width: 170px;
  height: 250px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  background-color: tomato;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  margin: 40px;

  span {
    font-size: 12px;
    font-weight: bold;
    margin-top: 10px;
    text-decoration: none;
    color: white;
  }

  div {
    font-size: 8px;
    font-weight: bold;
    color: blue;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
`;
