export interface AnimeInterface{
  attributes: AttributesInterface,
}

interface AttributesInterface{
  posterImage:imageInterface,
  canonicalTitle: string,
  averageRating: string,
}

interface imageInterface{
  original: string,
}
