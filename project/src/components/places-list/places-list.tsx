import React, { useEffect, useState } from 'react';
import { Offer } from '../../types/offer';
import { PlaceCard } from '../place-card';

type PlacesListProps = {
  offers: Offer[];
};

function PlacesList(props: PlacesListProps): JSX.Element {
  const { offers } = props;

  const [activeCard, setActiveCard] = useState<Offer | null>(null);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(activeCard);
  }, [activeCard]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map(
        (offer) => <PlaceCard offer={offer} setActiveCard={setActiveCard} key={offer.id} />
      )}
    </div>
  );
}

export default PlacesList;
