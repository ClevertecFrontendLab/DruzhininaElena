import { FirstCardsData } from '~/data/homePage/veganCuisineData.ts';
import { BookmarkHeart } from '~/icons/counterIcons/BookmarkHeart.tsx';
import { EmojiHeartEyes } from '~/icons/counterIcons/EmojiHeartEyes.tsx';
import { KidsCourses } from '~/icons/navMenu/KidsCourses.tsx';

export const dessertsData: FirstCardsData[] = [
    {
        id: 1,
        title: 'Бананово-молочное желе',
        text: 'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
        iconCounters: [
            { icon: BookmarkHeart, count: 1, spacing: '6px', padding: '4px' },
            { icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: KidsCourses,
        tagTitle: 'Детские блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 2,
        title: 'Нежный сливочно-сырный крем для кексов',
        text: 'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        iconCounters: [
            { icon: BookmarkHeart, count: 2, spacing: '6px', padding: '4px' },
            { icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: KidsCourses,
        tagTitle: 'Детские блюда',
        bgColorTag: 'lime.50',
    },
];
