import { ComponentWithAs, IconProps } from '@chakra-ui/icons';
import { JSX } from 'react';

import { BookmarkHeart } from '~/icons/counterIcons/BookmarkHeart.tsx';
import { EmojiHeartEyes } from '~/icons/counterIcons/EmojiHeartEyes.tsx';
import { Desserts } from '~/icons/navMenu/Desserts.tsx';
import { FirstCourses } from '~/icons/navMenu/FirstCourses.tsx';
import { Salads } from '~/icons/navMenu/Salads.tsx';
import { Vegan } from '~/icons/navMenu/Vegan.tsx';

import cutletImg from '../../assets/images/newRecipes/cutlet.webp';
import pancakesImg from '../../assets/images/newRecipes/pancakes.webp';
import saladImg from '../../assets/images/newRecipes/salad.webp';
import solyankaImg from '../../assets/images/newRecipes/solyanka.webp';

export type IconCounterType = {
    icon: () => JSX.Element;
    count: number;
    spacing: string;
    padding: string;
};

type NewRecipesCardData = {
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

export const newRecipesCardsData: NewRecipesCardData[] = [
    {
        id: 1,
        img: solyankaImg,
        altImg: 'Солянка',
        title: 'Солянка с грибами',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [{ icon: BookmarkHeart, count: 1, spacing: '6px', padding: '4px' }],
        tagIcon: FirstCourses,
        tagTitle: 'Первые блюда',
        bgColorTag: 'lime.150',
    },
    {
        id: 2,
        img: cutletImg,
        altImg: 'Котлеты',
        title: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        iconCounters: [
            { icon: BookmarkHeart, count: 2, spacing: '6px', padding: '4px' },
            { icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: Vegan,
        tagTitle: 'Веганские блюда',
        bgColorTag: 'lime.150',
    },
    {
        id: 3,
        img: pancakesImg,
        altImg: 'Оладьи',
        title: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        iconCounters: [{ icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' }],
        tagIcon: Desserts,
        tagTitle: 'Десерты, выпечка',
        bgColorTag: 'lime.150',
    },
    {
        id: 4,
        img: saladImg,
        altImg: 'Салат',
        title: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        iconCounters: [],
        tagIcon: Salads,
        tagTitle: 'Салаты',
        bgColorTag: 'lime.150',
    },
    {
        id: 5,
        img: saladImg,
        altImg: 'Салат',
        title: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        iconCounters: [],
        tagIcon: Salads,
        tagTitle: 'Салаты',
        bgColorTag: 'lime.150',
    },
    {
        id: 6,
        img: cutletImg,
        altImg: 'Котлеты',
        title: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        iconCounters: [
            { icon: BookmarkHeart, count: 2, spacing: '6px', padding: '4px' },
            { icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: Vegan,
        tagTitle: 'Веганские блюда',
        bgColorTag: 'lime.150',
    },
    {
        id: 7,
        img: pancakesImg,
        altImg: 'Оладьи',
        title: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        iconCounters: [{ icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' }],
        tagIcon: Desserts,
        tagTitle: 'Десерты, выпечка',
        bgColorTag: 'lime.150',
    },
    {
        id: 8,
        img: solyankaImg,
        altImg: 'Солянка',
        title: 'Солянка с грибами',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [{ icon: BookmarkHeart, count: 1, spacing: '6px', padding: '4px' }],
        tagIcon: FirstCourses,
        tagTitle: 'Первые блюда',
        bgColorTag: 'lime.150',
    },
];
