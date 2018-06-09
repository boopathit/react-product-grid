import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardHeader,
  CardFooter,
  CardBody,
  Badge,
  Button,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import Rating from 'react-rating';

import "./product.css";

const ProductCard = props => {
  const {
    title,
    type,
    description,
    list_price,
    average_rating,
    images
  } = props.product;
  const { addToCart } = props;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardBody>
            <CardTitle className="text-ellipsis">{title || "Title"}</CardTitle>
            <CardSubtitle>
              {type || "Accessorries"}
              <div className="float-right">
                <Rating
                  initialRating={average_rating}
                  readonly={true}
                  emptySymbol="fa fa-star-o"
                  fullSymbol="fa fa-star"
                  fractions={2}
                />
              </div>
            </CardSubtitle>
          </CardBody>
        </CardHeader>
        <CardImg
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
        </CardBody>
        <CardFooter>
          <Badge style={{ fontSize: "1.5rem" }} color="secondary">{list_price.formatted_price}</Badge>
          <Button className="float-right" color="danger" onClick={addToCart}>Add To Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
