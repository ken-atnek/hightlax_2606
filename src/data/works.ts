export const worksCategories = [
  'architecture',
  'custom-furniture',
  'laser-processing',
] as const;

export type WorksCategory = (typeof worksCategories)[number];

export type WorksItem = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  category: WorksCategory;
};

export const worksCategoryLabels: Record<WorksCategory, string> = {
  architecture: 'ARCHITECTURE',
  'custom-furniture': 'CUSTOM FURNITURE',
  'laser-processing': 'LASER PROCESSING',
};

export const worksItems: WorksItem[] = [
  {
    id: 'works-01',
    imageSrc: '/images/works/01.webp',
    imageAlt: 'CROSS ORANGE の施工写真',
    title: 'CROSS ORANGE',
    category: 'architecture',
  },
  {
    id: 'works-02',
    imageSrc: '/images/works/02.webp',
    imageAlt: 'WORKSHOP ORGANIZER の製品写真',
    title: 'WORKSHOP ORGANIZER',
    category: 'laser-processing',
  },
  {
    id: 'works-03',
    imageSrc: '/images/works/03.webp',
    imageAlt: 'AMEYA の施工写真',
    title: 'AMEYA',
    category: 'architecture',
  },
  {
    id: 'works-04',
    imageSrc: '/images/works/04.webp',
    imageAlt: 'CHAIR の製品写真',
    title: 'CHAIR',
    category: 'laser-processing',
  },
  {
    id: 'works-05',
    imageSrc: '/images/works/05.webp',
    imageAlt: 'THE PARK BURGER の施工写真',
    title: 'THE PARK BURGER',
    category: 'architecture',
  },
  {
    id: 'works-06',
    imageSrc: '/images/works/06.webp',
    imageAlt: 'FLAT-PACK FURNITURE の製品写真',
    title: 'FLAT-PACK FURNITURE',
    category: 'laser-processing',
  },
  {
    id: 'works-07',
    imageSrc: '/images/works/07.webp',
    imageAlt: 'DESKTOP ORGANIZER の製品写真',
    title: 'DESKTOP ORGANIZER',
    category: 'laser-processing',
  },
  {
    id: 'works-08',
    imageSrc: '/images/works/08.webp',
    imageAlt: "CONNY'S BANHMI の施工写真",
    title: "CONNY'S BANHMI",
    category: 'architecture',
  },
  {
    id: 'works-09',
    imageSrc: '/images/works/09.webp',
    imageAlt: 'DIFFUSER BASE の製品写真',
    title: 'DIFFUSER BASE',
    category: 'laser-processing',
  },
  {
    id: 'works-10',
    imageSrc: '/images/works/10.webp',
    imageAlt: "F'S HOUSE の施工写真",
    title: "F'S HOUSE",
    category: 'architecture',
  },
  {
    id: 'works-11',
    imageSrc: '/images/works/11.webp',
    imageAlt: 'POSTER FRAME の製品写真',
    title: 'POSTER FRAME',
    category: 'custom-furniture',
  },
  {
    id: 'works-12',
    imageSrc: '/images/works/12.webp',
    imageAlt: 'GARAGE DOOR の製品写真',
    title: 'GARAGE DOOR',
    category: 'custom-furniture',
  },
  {
    id: 'works-13',
    imageSrc: '/images/works/13.webp',
    imageAlt: 'STORE CHAIRS の製品写真',
    title: 'STORE CHAIRS',
    category: 'custom-furniture',
  },
  {
    id: 'works-14',
    imageSrc: '/images/works/14.webp',
    imageAlt: 'GARAGE HOUSE の施工写真',
    title: 'GARAGE HOUSE',
    category: 'architecture',
  },
  {
    id: 'works-15',
    imageSrc: '/images/works/15.webp',
    imageAlt: 'STORE COUNTER の製品写真',
    title: 'STORE COUNTER',
    category: 'custom-furniture',
  },
];
