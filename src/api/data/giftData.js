import axios from 'axios';
import firebaseConfig from '../apiKeys';

const fbUrl = firebaseConfig.databaseURL;

const getGifts = async () => {
  const gifts = await axios.get(`${fbUrl}/gifts.json`);
  const giftsData = Object.values(gifts.data);
  return giftsData;
};

const getSingleGift = async (fbKey) => {
  const gift = await axios.get(`${fbUrl}/gifts/${fbKey}.json`);
  const giftData = gift.data;
  return giftData;
};

const createGift = (giftObj) => new Promise((resolve, reject) => {
  axios
    .post(`${fbUrl}/gifts.json`, giftObj)
    .then((obj) => {
      const fbKey = { firebaseKey: obj.data.name };
      axios.patch(`${fbUrl}/gifts/${obj.data.name}.json`, fbKey).then(() => {
        getGifts().then(resolve);
      });
    })
    .catch(reject);
});

const deleteGift = (fbKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${fbUrl}/gifts/${fbKey}.json`)
    .then(() => getGifts().then(resolve))
    .catch(reject);
});

export {
  getGifts,
  getSingleGift,
  createGift,
  deleteGift,
};
