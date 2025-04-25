import { IconCounterType } from '~/data/homePage/newRecipesCardsData.ts';
import { Category } from '~/data/recipes/recipesData.ts';
import { BookmarkHeart } from '~/icons/counterIcons/BookmarkHeart.tsx';
import { EmojiHeartEyes } from '~/icons/counterIcons/EmojiHeartEyes.tsx';

export type FirstCardsData = {
    id: number;
    title: string;
    description: string;
    iconCounters: IconCounterType[];
    category: Category;
    bgColorTag: string;
};

export const veganCuisineData: FirstCardsData[] = [
    {
        id: 1,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        iconCounters: [
            { icon: BookmarkHeart, count: 1, spacing: '6px', padding: '4px' },
            { icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' },
        ],
        category: 'second-dish',
        bgColorTag: 'lime.50',
    },
    {
        id: 2,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        iconCounters: [
            { icon: BookmarkHeart, count: 2, spacing: '6px', padding: '4px' },
            { icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' },
        ],
        category: 'second-dish',
        bgColorTag: 'lime.50',
    },
];
