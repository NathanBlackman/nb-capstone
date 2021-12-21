import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
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

  const defaultGiftURL = 'https://www.google.com/search?q=present+clipart&tbm=isch&chips=q:present+clipart,g_1:silhouette:bNOskXofUaA%3D&rlz=1C5CHFA_enUS907US907&hl=en&sa=X&ved=2ahUKEwjl3MWRkuL0AhVILK0KHQ75AisQ4lYoCXoECAEQIw&biw=1440&bih=789#imgrc=eZIX9B_KI0VT6M';

  return (
    <div>
      <Card className="card">
        <CardBody>
          <CardTitle
            tag="h5"
            className="card-title"
          >
            {gift.giftName}
          </CardTitle>
          <CardImg
            className="card-img"
            alt="Gift"
            src={gift.giftImage ? gift.giftImage : defaultGiftURL}
          />
          <CardText
            className="card-desc"
          >
            {gift.giftDescription}
          </CardText>
          <Button
            className="view-btn"
            type="button"
            color="success"
            size="lg"
            onClick={() => history.push(`/gifts/${gift.firebaseKey}`)}
          >
            View
          </Button>
          <Button
            className="edit-btn"
            type="button"
            color="warning"
            size="lg"
            onClick={() => history.push(`/editgift/${gift.firebaseKey}`)}
          >
            Edit
          </Button>
          <Button
            className="delete-btn"
            color="danger"
            size="lg"
            type="button"
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
