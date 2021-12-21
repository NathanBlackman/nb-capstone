import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { Button } from 'reactstrap';
import { getGifts } from '../api/data/giftData';
import GiftCards from '../components/GiftCards';

export default function Gifts() {
  const [gifts, setGifts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    getGifts().then((giftArray) => {
      if (isMounted) setGifts(giftArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {/* <img
        src="GiftsThing.png"
        alt="giftsPic"
      /> */}
      <button
        className="add-gift-btn"
        type="button"
        onClick={() => history.push('/giftform')}
        color="primary"
      >
        Add Gift
      </button>
      <div className="gift-container">
        {gifts ? (
          <>
            <div className="card-container">
              {gifts.map((gift) => (
                <GiftCards
                  key={gift.firebaseKey}
                  gift={gift}
                  setGifts={setGifts}
                />
              ))}
            </div>
          </>
        ) : (
          <h1>Start Adding Gifts!!!</h1>
        )}
      </div>
    </div>
  );
}
