import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { deleteGift } from '../api/data/giftData';

export default function GiftCards({ gift, setGifts }) {
  const history = useHistory();

  const handleDelete = () => {
    deleteGift(gift.firebaseKey).then((gifts) => setGifts(gifts));
  };

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
            color="info"
            onClick={() => history.push(`/gifts/${gift.firebaseKey}`)}
          >
            View
          </Button>
          <Button
            type="button"
            color="warning"
            onClick={() => history.push('/gifts/')}
          >
            Edit
          </Button>
          <Button
            type="button"
            color="danger"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

GiftCards.propTypes = {
  gift: PropTypes.shape(PropTypes.obj).isRequired,
  setGifts: PropTypes.func.isRequired,
};
