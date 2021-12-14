import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { createGift, getSingleGift } from '../api/data/giftData';

const initialState = {
  giftName: '',
  giftDescription: '',
  giftShoppingLink: '',
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
    createGift({ ...formInput, uid: user.uid })
      .then(() => {
        resetForm();
        history.push('/');
      });
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
      >
        <FormGroup>
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
        <FormGroup>
          <Label for="giftDescription">
            Description
          </Label>
          <Input
            id="giftDescription"
            name="giftDescription"
            value={formInput.giftDescription}
            onChange={handleChange}
            type="textarea"
          />
        </FormGroup>
        <FormGroup>
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
        <Button
          type="submit"
          color="primary"
        >
          Submit
        </Button>
        <Button
          type="button"
          onClick={() => history.push('/')}
          color="danger"
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
}

PresentForm.propTypes = {
  user: PropTypes.shape({
    giftName: PropTypes.string,
    giftDescription: PropTypes.string,
    giftShoppingLink: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
};

PresentForm.defaultProps = { user: {} };
