import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg
          width="100%"
          height="400"
          className="card-img-top"
          src={dish.image}
          alt={dish.name}
        />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  return null;
}

function RenderComments({ comments }) {
  if (comments != null) {
    const renderComments = comments.map((data) => (
      <li key={data.id} className="list-unstyled">
        <p className="small text-muted">
          {data.comment} <br /> --
          {
            (data.author,
            new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(data.date))))
          }
        </p>
      </li>
    ));
    return (
      <div>
        <h2 className="text-start">Comments</h2>
        {renderComments}
      </div>
    );
  }
  return null;
}

const DishDetails = (props) => {
  // console.log({ ...props });
  return (
    <div className="container mb-5">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>

        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetails;
