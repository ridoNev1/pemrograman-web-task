export interface ISideBarContent {
  icon: React.ReactNode;
  onClick?: () => void;
}

export interface IContactContent {
  icon: React.ReactNode;
  name?: string;
  detail?: string;
  url?: string;
}

export interface IPortoContent {
  image: string;
  name?: string;
  detail?: string;
  onClick?: () => void;
}
