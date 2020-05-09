import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardImgOverlay,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItems({ dish, onClick }) {
  return (
    <Card className="shadow m-1">
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" height="400" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>
            <span className="bg-success text-light p-2 rounded">
              {dish.name}
            </span>
          </CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-5 m-1 mb-5">
      <RenderMenuItems dish={dish} onClick={props.onClick} />
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb >
          <BreadcrumbItem>
            <Link to="/home">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem  active>
            Menu
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
