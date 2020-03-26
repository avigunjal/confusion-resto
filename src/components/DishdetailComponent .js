import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  return null;
}

function RenderComments({ dish }) {
  if (dish != null && dish.comments != null) {
    const renderComments = dish.comments.map(data => (
      <li key={data.id} className="list-unstyled">
        <p>
          {data.comment} <br /> --
          {
            (data.author,
            new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(data.date))))
          }
        </p>
      </li>
    ));
    return (
      <div>
        <h4>Comments</h4>
        {renderComments}
      </div>
    );
  }
  return null;
}

const DishDetails = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>

        <div className="col-12 col-md-5 m-1">
          <RenderComments dish={props.dish} />
        </div>
      </div>
    </div>
  );
};

export default DishDetails;
