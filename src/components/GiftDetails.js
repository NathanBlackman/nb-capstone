import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Card, Button, ButtonGroup,
} from 'reactstrap';
import { deleteGift, getSingleGift } from '../api/data/giftData';

export default function GiftDetails() {
  const { fbKey } = useParams({});
  const [gift, setGift] = useState({});

  const history = useHistory();

  const handleDelete = () => {
    deleteGift(gift.firebaseKey).then(() => history.push('/'));
  };

  useEffect(() => {
    getSingleGift(fbKey).then((gifts) => setGift(gifts));
  }, []);

  return (
    <div>
      <Card>
        <div className="card-title">{gift.giftName}</div>
        <img
          className="view-img"
          alt={gift.giftName}
          src={gift.giftImage}
        />
        <p>{gift.giftDescription}</p>
        <ButtonGroup>
          <Button
            className="buy-btn"
            color="success"
            size="lg"
            href={gift.giftShoppingLink}
          >
            GO BUY!
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            color="warning"
            size="lg"
            onClick={() => history.push(`/editgift/${gift.firebaseKey}`)}
          >
            Edit
          </Button>
          <Button
            color="danger"
            size="lg"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            type="button"
            size="lg"
            onClick={() => history.push('/')}
            color="primary"
          >
            Cancel
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}
