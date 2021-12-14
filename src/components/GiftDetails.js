import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Button, ButtonGroup,
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
      <h1>{gift.giftName}</h1>
      <p>{gift.giftDescription}</p>
      <ButtonGroup>
        <Button
          color="success"
          href={gift.giftShoppingLink}
        >
          GO BUY!
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          color="warning"
          onClick
        >
          Edit
        </Button>
        <Button
          color="danger"
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          type="button"
          onClick={() => history.push('/')}
          color="danger"
        >
          Cancel
        </Button>
      </ButtonGroup>
    </div>
  );
}
