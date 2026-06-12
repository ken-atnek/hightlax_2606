import {
  worksCategoryLabels,
  worksItems,
  type WorksCategory,
  type WorksItem,
} from '@/data/works';

type ServiceSectionBase = {
  id: string;
  number: string;
  category: WorksCategory;
  titleJa: string;
  descriptionLinesPc: string[];
  descriptionLinesSp: string[];
};

export type ServiceSection = ServiceSectionBase & {
  title: string;
  works: WorksItem[];
};

const serviceSectionBases: ServiceSectionBase[] = [
  {
    id: 'service-01',
    number: 'S/01',
    category: 'architecture',
    titleJa: '建築デザイン',
    descriptionLinesPc: [
      '現代の主流である過剰な性能と過度な設備の先に真の豊かさはあるのか。',
      '本当に必要なものなのか。人生に於ける彩とは何か。',
      'お客様にとっての幸せとは何かを共に考えサポートさせていただきます。',
    ],
    descriptionLinesSp: [
      '現代の主流である過剰な性能と過度な',
      '設備の先に真の豊かさはあるのか。',
      '本当に必要なものなのか。',
      '人生に於ける彩とは何か。',
      'お客様にとっての幸せとは何かを共に',
      '考えサポートさせていただきます。',
    ],
  },
  {
    id: 'service-02',
    number: 'S/02',
    category: 'custom-furniture',
    titleJa: 'オーダー家具・什器',
    descriptionLinesPc: [
      '日々の幸福は身近なモノから。',
      '手に触れるものこそ拘りたい。',
      '小さな喜びに気がつける人生をあなたにも。',
    ],
    descriptionLinesSp: [
      '日々の幸福は身近なモノから。',
      '手に触れるものこそ拘りたい。',
      '小さな喜びに気がつける人生を',
      'あなたにも。',
    ],
  },
  {
    id: 'service-03',
    number: 'S/03',
    category: 'laser-processing',
    titleJa: 'レーザー加工',
    descriptionLinesPc: [
      '技術の進歩は目紛しく昨日不可能だと思われていた事が、',
      '今日は可能になるかもしれない。',
      'レーザーもそのひとつ。',
      '幅0.1mmの光が未だ見ぬ可能性を現実にします。',
    ],
    descriptionLinesSp: [
      '技術の進歩は目紛しく昨日不可能',
      'だと思われていた事が、',
      '今日は可能になるかもしれない。',
      'レーザーもそのひとつ。',
      '幅0.1mmの光が未だ見ぬ可能性を',
      '現実にします。',
    ],
  },
];

export const serviceSections: ServiceSection[] = serviceSectionBases.map(
  (section) => ({
    ...section,
    title: worksCategoryLabels[section.category],
    works: worksItems.filter((item) => item.category === section.category),
  })
);
