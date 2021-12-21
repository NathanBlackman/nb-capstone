import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonGroup,
} from 'reactstrap';
import { createGift, getSingleGift, updateGift } from '../api/data/giftData';

const initialState = {
  giftName: '',
  giftDescription: '',
  giftShoppingLink: '',
  giftImage: '',
  firebaseKey: '',
  uid: '',
};

export default function PresentForm({ user }) {
  const [formInput, setFormInput] = useState({});
  const { fbKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (fbKey) {
      getSingleGift(fbKey).then((obj) => {
        setFormInput({
          giftName: obj.giftName,
          giftDescription: obj.giftDescription,
          giftShoppingLink: obj.giftShoppingLink,
          giftImage: obj.giftImage,
          firebaseKey: obj.firebaseKey,
        });
      });
    } else {
      setFormInput(initialState);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fbKey) {
      updateGift(formInput).then(() => {
        resetForm();
        history.push('/');
      });
    } else {
      createGift({ ...formInput, uid: user.uid })
        .then(() => {
          resetForm();
          history.push('/');
        });
    }
  };

  return (
    <div>
      <Card
        className="card-form"
      >
        <Form
          onSubmit={handleSubmit}
          className="form"
        >
          <FormGroup
            className="gift-name"
          >
            <Label for="giftName">
              Gift Name
            </Label>
            <Input
              id="giftName"
              name="giftName"
              value={formInput.giftName || ''}
              onChange={handleChange}
              placeholder="Name a gift here"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup
            className="gift-description"
          >
            <Label for="giftDescription">
              Description
            </Label>
            <Input
              id="giftDescription"
              name="giftDescription"
              value={formInput.giftDescription}
              onChange={handleChange}
              rows="5"
              type="textarea"
            />
          </FormGroup>
          <FormGroup
            className="gift-image"
          >
            <Label for="giftImage">
              Image
            </Label>
            <Input
              id="giftImage"
              name="giftImage"
              value={formInput.giftImage}
              onChange={handleChange}
              placeholder="Enter image address (URL)"
              type="url"
            />
          </FormGroup>
          <FormGroup
            className="gift-link"
          >
            <Label for="giftShoppingLink">
              Shopping Link
            </Label>
            <Input
              id="giftShoppingLink"
              name="giftShoppingLink"
              value={formInput.giftShoppingLink}
              onChange={handleChange}
              placeholder="https://www.amazon.com/gift"
              type="url"
            />
          </FormGroup>
          <ButtonGroup
            className="form-btns"
          >
            <Button
              type="submit"
              color="primary"
              size="lg"
            >
              {fbKey ? 'Update' : 'Submit'}
            </Button>
            <Button
              type="button"
              onClick={() => history.push('/')}
              size="lg"
              color="danger"
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Form>
      </Card>
    </div>
  );
}

PresentForm.propTypes = {
  user: PropTypes.shape({
    giftName: PropTypes.string,
    giftDescription: PropTypes.string,
    giftShoppingLink: PropTypes.string,
    giftImage: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
};

PresentForm.defaultProps = { user: {} };
