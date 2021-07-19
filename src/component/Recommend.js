import React, { useEffect, useState } from "react";
import styled from "styled-components";
import route, { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Recommend = () => {
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
    <CardHolder>
      {fetchData.map(({ id, title, description, image, category }) => (
        <Link
          to="/Product/:id"
          style={{
            textDecoration: "none",
          }}
        >
          <Card key={id}>
            <Image src={image} />
            <span>{title}</span>
            <div>{category</div>
          </Card>
        </Link>
      ))}
    </CardHolder>
  );
};

export default Recommend;

const CardHolder = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  flex-wrap: wrap;
`;

const Image = styled.div``;
const Card = styled.div`
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
