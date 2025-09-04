export interface YuGiOhResult {
  data: YuGiOhCard[];
  meta: Meta;
}

export interface YuGiOhCard {
  id: number;
  name: string;
  humanReadableCardType: string;
  desc: string;
  race: string;
  card_images: CardImage[];
}

export interface CardImage {
  id: number;
  image_url_small: string;
}

export interface Meta {
  pages_remaining: number;
  next_page?: string;
  previous_page?: string;
}
