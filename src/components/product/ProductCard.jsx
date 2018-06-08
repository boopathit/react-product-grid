import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import "./product.css";

const ProductCard = props => {
  const {
    title,
    type,
    url,
    description,
    average_rating,
    images
  } = props.product;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="text-ellipsis">{title || "Title"}</CardTitle>
          <CardSubtitle>{type || "Accessorries"}</CardSubtitle>
        </CardBody>
        <img
          width="100%"
          src={
            images[0]
              ? `${images[0].base_url}${images[0].primary}`
              : "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          }
          alt="Card cap"
        />
        <CardBody>
          <CardText className="text-ellipsis">
            {description || "This a accessory for mutipurpose functionality"}
          </CardText>
          <CardLink href="#">Add To Cart</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
