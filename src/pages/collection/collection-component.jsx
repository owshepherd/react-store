import { getByTitle } from '@testing-library/dom';
import React from 'react';
import { connect } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop-selectors';
import CollectionItem from '../../components/collection-item/collection-item-component';
import './collection.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
