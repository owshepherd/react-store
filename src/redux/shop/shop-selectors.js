import { createSelector } from 'reselect';
import _ from 'lodash';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectShopCollection = _.memoize((collectionUrlParam) => {
  return createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
});
