import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../router';
import { Offer } from '../../types/offer';
import { RatingStars } from '../rating-stars';
import './style.css';

type PlaceCardProps = {
  offer: Offer;
  setActiveCard: (data: Offer | null) => void;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { offer, setActiveCard } = props;

  const offerDetailsLink = generatePath(AppRoute.Room, { id: offer.id.toString() });

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => setActiveCard(offer)}
      onMouseLeave={() => setActiveCard(null)}
    >

      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerDetailsLink}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place inside" />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <RatingStars ratingValue={offer.rating} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={offerDetailsLink}>{offer.title}</Link>
        </h2>

        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
