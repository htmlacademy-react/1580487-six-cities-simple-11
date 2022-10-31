import { OfferTypeData } from '../const';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  location: Location;
  name: string;
}

export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type OfferType = typeof OfferTypeData[keyof typeof OfferTypeData];

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
}

export type Offers = Offer[];
