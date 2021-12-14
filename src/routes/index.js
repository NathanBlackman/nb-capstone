import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Authenticated from '../views/Authenticated';
import Gifts from '../views/Gifts';
import GiftsView from '../views/GiftsView';
import GiftForm from '../views/GiftForm';
import EditGiftsForm from '../views/EditGiftsForm';

export default function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/welcome">
          <Authenticated />
        </Route>
        <Route exact path="/">
          <Gifts />
        </Route>
        <Route exact path="/gifts/:fbKey">
          <GiftsView />
        </Route>
        <Route exact path="/giftform">
          <GiftForm user={user} />
        </Route>
        <Route exact path="/editgift/:fbKey">
          <EditGiftsForm />
        </Route>
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = { user: null };
