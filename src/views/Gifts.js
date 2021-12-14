import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
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
      <h1 className="gifts-header">Gifts</h1>
      <Button
        type="button"
        onClick={() => history.push('/giftform')}
        color="primary"
      >
        New Gift
      </Button>
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
          'No Gifts Available'
        )}
      </div>
    </div>
  );
}
