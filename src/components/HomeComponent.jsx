import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card className="shadow h-100">
      <CardImg
        width="100%"
        height="300"
        src={item.image}
        alt={item.name}
      ></CardImg>
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="container mb-5">
      <div className="row align-item-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
