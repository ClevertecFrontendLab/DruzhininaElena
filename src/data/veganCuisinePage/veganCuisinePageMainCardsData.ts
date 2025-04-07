import tomYam from '~/assets/images/theJuciest/tomYam.webp';
import bulgurMeatballs from '~/assets/images/veganCuisinePage/bulgurMeatballs.webp';
import garlicPotatoes from '~/assets/images/veganCuisinePage/garlicPotatoes.webp';
import lasagna from '~/assets/images/veganCuisinePage/lasagna.webp';
import potato from '~/assets/images/veganCuisinePage/potato.webp';
import potatoRolls from '~/assets/images/veganCuisinePage/potatoRolls.webp';
import puri from '~/assets/images/veganCuisinePage/puri.webp';
import { MainSectionData } from '~/data/homePage/theJuciestCardsData.ts';
import { BookmarkHeart } from '~/icons/counterIcons/BookmarkHeart.tsx';
import { EmojiHeartEyes } from '~/icons/counterIcons/EmojiHeartEyes.tsx';
import { Grils } from '~/icons/navMenu/Grils.tsx';
import { KidsCourses } from '~/icons/navMenu/KidsCourses.tsx';
import { National } from '~/icons/navMenu/National.tsx';
import { SecondCourses } from '~/icons/navMenu/SecondCourses.tsx';

export const veganCuisinePageMainCardsData: MainSectionData[] = [
    {
        id: 1,
        img: potato,
        altImg: 'Картошка, тушенная',
        title: 'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        iconCounters: [
            { icon: BookmarkHeart, count: 85, spacing: '6px', padding: '4px 8px' },
            { icon: EmojiHeartEyes, count: 152, spacing: '6px', padding: '4px 8px' },
        ],
        tagIcon: National,
        tagTitle: 'Национальные',
        bgColorTag: 'lime.50',
    },
    {
        id: 2,
        img: potatoRolls,
        altImg: 'Картофельные рулетики',
        title: 'Картофельные рулетики с грибами',
        text: 'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        iconCounters: [
            { icon: BookmarkHeart, count: 159, spacing: '6px', padding: '4px 8px' },
            { icon: EmojiHeartEyes, count: 257, spacing: '6px', padding: '4px 8px' },
        ],
        tagIcon: KidsCourses,
        tagTitle: 'Детские блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 3,
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
    {
        id: 4,
        img: lasagna,
        altImg: 'Овощная лазанья',
        title: 'Овощная лазанья из лаваша',
        text: 'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        iconCounters: [
            { icon: BookmarkHeart, count: 124, spacing: '6px', padding: '4px 8px' },
            { icon: EmojiHeartEyes, count: 324, spacing: '6px', padding: '4px 8px' },
        ],
        tagIcon: Grils,
        tagTitle: 'Блюда на гриле',
        bgColorTag: 'lime.50',
    },
    {
        id: 5,
        img: bulgurMeatballs,
        altImg: 'Том-ям',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        iconCounters: [
            { icon: BookmarkHeart, count: 85, spacing: '6px', padding: '4px 8px' },
            { icon: EmojiHeartEyes, count: 152, spacing: '6px', padding: '4px 8px' },
        ],
        tagIcon: SecondCourses,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 6,
        img: bulgurMeatballs,
        altImg: 'Том-ям',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        iconCounters: [
            { icon: BookmarkHeart, count: 85, spacing: '6px', padding: '4px 8px' },
            { icon: EmojiHeartEyes, count: 152, spacing: '6px', padding: '4px 8px' },
        ],
        tagIcon: SecondCourses,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 7,
        img: garlicPotatoes,
        altImg: 'Чесночная картошка',
        title: 'Чесночная картошка',
        text: 'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        iconCounters: [
            { icon: BookmarkHeart, count: 124, spacing: '6px', padding: '4px 8px' },
            { icon: EmojiHeartEyes, count: 324, spacing: '6px', padding: '4px 8px' },
        ],
        tagIcon: National,
        tagTitle: 'Национальные',
        bgColorTag: 'lime.50',
    },
    {
        id: 8,
        img: puri,
        altImg: 'Пури',
        title: 'Пури',
        text: 'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        iconCounters: [
            { icon: BookmarkHeart, count: 124, spacing: '6px', padding: '4px 8px' },
            { icon: EmojiHeartEyes, count: 324, spacing: '6px', padding: '4px 8px' },
        ],
        tagIcon: National,
        tagTitle: 'Национальные',
        bgColorTag: 'lime.50',
    },
];
