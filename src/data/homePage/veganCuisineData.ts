import { ReactNode } from 'react';

import { IconCounterType } from '~/data/homePage/newRecipesCardsData.ts';
import { BookmarkHeart } from '~/icons/counterIcons/BookmarkHeart.tsx';
import { EmojiHeartEyes } from '~/icons/counterIcons/EmojiHeartEyes.tsx';
import { SecondCourses } from '~/icons/navMenu/SecondCourses.tsx';

export type FirstCardsData = {
    id: number;
    title: string;
    text: string;
    iconCounters: IconCounterType[];
    tagIcon: ReactNode;
    tagTitle: string;
    bgColorTag: string;
};

export const veganCuisineData: FirstCardsData[] = [
    {
        id: 1,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        text: 'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        iconCounters: [
            { icon: BookmarkHeart, count: 1, spacing: '6px', padding: '4px' },
            { icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCourses,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 2,
        title: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        iconCounters: [
            { icon: BookmarkHeart, count: 2, spacing: '6px', padding: '4px' },
            { icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCourses,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
];
