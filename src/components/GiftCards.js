import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

export default function GiftCards({ gift }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            {gift.giftName}
          </CardTitle>
          <CardText>
            {gift.giftDescription}
          </CardText>
          <Button
            type="button"
            onClick
          >
            Button
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

GiftCards.propTypes = {
  gift: PropTypes.shape(PropTypes.obj).isRequired,
};
