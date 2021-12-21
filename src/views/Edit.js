import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleGift } from '../api/data/giftData';
import PresentForm from '../components/PresentForm';

export default function Edit() {
  const { fbKey } = useParams;
  const [editGift, setEditGift] = useState({});

  useEffect(() => {
    getSingleGift(fbKey).then(setEditGift);
  }, []);

  return (
    <>
      <div className="form-container">
        <PresentForm user={editGift} />
      </div>
    </>
  );
}
