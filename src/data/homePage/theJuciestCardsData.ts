import { ComponentWithAs, IconProps } from '@chakra-ui/icons';

import { IconCounterType } from '~/data/homePage/newRecipesCardsData.ts';
import { BookmarkHeart } from '~/icons/counterIcons/BookmarkHeart.tsx';
import { EmojiHeartEyes } from '~/icons/counterIcons/EmojiHeartEyes.tsx';
import { National } from '~/icons/navMenu/National.tsx';
import { SecondCourses } from '~/icons/navMenu/SecondCourses.tsx';

import ham from '../../assets/images/theJuciest/ham.webp';
import noodles from '../../assets/images/theJuciest/noodles.webp';
import quenelles from '../../assets/images/theJuciest/quenelles.webp';
import tomYam from '../../assets/images/theJuciest/tomYam.webp';

export type MainSectionData = {
    id: number;
    img: string;
    altImg: string;
    title: string;
    text: string;
    iconCounters: IconCounterType[];
    tagIcon: ComponentWithAs<'svg', IconProps>;
    tagTitle: string;
    bgColorTag: string;
};

export const theJuciestCardsData: MainSectionData[] = [
    {
        id: 1,
        img: quenelles,
        altImg: 'Кнели со спагетти',
        title: 'Кнели со спагетти',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [
            { icon: BookmarkHeart, count: 85, spacing: '6px', padding: '4px 8px' },
            { icon: EmojiHeartEyes, count: 152, spacing: '6px', padding: '4px 8px' },
        ],
        tagIcon: SecondCourses,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 2,
        img: ham,
        altImg: 'Ветчина',
        title: 'Пряная ветчина по итальянски',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [
            { icon: BookmarkHeart, count: 159, spacing: '6px', padding: '4px 8px' },
            { icon: EmojiHeartEyes, count: 257, spacing: '6px', padding: '4px 8px' },
        ],
        tagIcon: SecondCourses,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 3,
        img: noodles,
        altImg: 'Лапша с курицей',
        title: 'Лапша с курицей и шафраном',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [
            { icon: BookmarkHeart, count: 258, spacing: '6px', padding: '4px 8px' },
            { icon: EmojiHeartEyes, count: 342, spacing: '6px', padding: '4px 8px' },
        ],
        tagIcon: SecondCourses,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 4,
        img: tomYam,
        altImg: 'Том-ям',
        title: 'Том-ям с капустой кимчи',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [
            { icon: BookmarkHeart, count: 124, spacing: '6px', padding: '4px 8px' },
            { icon: EmojiHeartEyes, count: 324, spacing: '6px', padding: '4px 8px' },
        ],
        tagIcon: National,
        tagTitle: 'Национальные',
        bgColorTag: 'lime.50',
    },
];
