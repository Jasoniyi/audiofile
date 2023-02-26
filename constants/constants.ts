export interface NavbarShape {
  title: string;
  path: string;
}

export const NavbarLinks: NavbarShape[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "headphones",
    path: "/headphones",
  },
  {
    title: "speakers",
    path: "/speakers",
  },
  {
    title: "earphones",
    path: "/earphones",
  },
];

export interface BoxShape {
  id: string;
  desc: string;
}

export const headphoneBox: BoxShape[] = [
  {
    id: "1x",
    desc: "Headphone Unit",
  },
  {
    id: "2x",
    desc: "Replacement Earcups",
  },
  {
    id: "1x",
    desc: "User Manual",
  },
  {
    id: "1x",
    desc: "3.5mm 5m Audio Cable",
  },
  {
    id: "1x",
    desc: "Travel Bag",
  },
];

export const markI: BoxShape[] = [
  {
    id: "1x",
    desc: "Headphone Unit",
  },
  {
    id: "2x",
    desc: "Replacement Earcups",
  },
  {
    id: "1x",
    desc: "User Manual",
  },
  {
    id: "1x",
    desc: "3.5mm 5m Audio Cable",
  },
];

export interface ProductsImageShape {
  image: string;
}

export const earphoneShape: ProductsImageShape[] = [
  {
    image:
      "https://res.cloudinary.com/dt8whfj0k/image/upload/v1677322159/audiofile/earPhoneProductMan_plhwem.svg",
  },
  {
    image:
      "https://res.cloudinary.com/dt8whfj0k/image/upload/v1677322103/audiofile/swagg_jeqtvy.svg",
  },
  {
    image:
      "https://res.cloudinary.com/dt8whfj0k/image/upload/v1677322100/audiofile/ProductEarphone_mjkked.svg",
  },
];
