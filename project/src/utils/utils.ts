import { OfferTypeData } from '../const';
import { OfferType } from '../types/offer';

export const getOfferTypeView = (data: OfferType): string => {
  switch (data) {
    case OfferTypeData.Apartment:
      return 'Apartment';
    case OfferTypeData.PrivateRoom:
      return 'Private room';
    case OfferTypeData.House:
      return 'House';
    case OfferTypeData.Hotel:
      return 'Hotel';
  }
};
