import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import step1 from '../assets/images/cookingSteps/chickenAndSaffronNoodles/1.webp';
import step2 from '../assets/images/cookingSteps/chickenAndSaffronNoodles/2.webp';
import step3 from '../assets/images/cookingSteps/chickenAndSaffronNoodles/3.webp';
import step4 from '../assets/images/cookingSteps/chickenAndSaffronNoodles/4.webp';
import step6 from '../assets/images/cookingSteps/chickenAndSaffronNoodles/6.webp';
import step8 from '../assets/images/cookingSteps/chickenAndSaffronNoodles/8.webp';
import cutlet from '../assets/images/newRecipes/cutlet.webp';
import pancakes from '../assets/images/newRecipes/pancakes.webp';
import salad from '../assets/images/newRecipes/salad.webp';
import solyanka from '../assets/images/newRecipes/solyanka.webp';
import chickenSoup from '../assets/images/recipes/chickenSoup.webp';
import chocolateMousse from '../assets/images/recipes/chocolateMousse.webp';
import greekSalad from '../assets/images/recipes/greekSalad.webp';
import grilledSalmon from '../assets/images/recipes/grilledSalmon.webp';
import saladGrill from '../assets/images/recipes/saladGrill.webp';
import vegetableStew from '../assets/images/recipes/vegetableStew.webp';
import noodles from '../assets/images/theJuciest/noodles.webp';
import bulgurMeatballs from '../assets/images/veganCuisinePage/bulgurMeatballs.webp';
import garlicPotatoes from '../assets/images/veganCuisinePage/garlicPotatoes.webp';
import lasagna from '../assets/images/veganCuisinePage/lasagna.webp';
import potato from '../assets/images/veganCuisinePage/potato.webp';
import potatoRolls from '../assets/images/veganCuisinePage/potatoRolls.webp';
import { Recipe } from '../common/types/types.ts';

const initialState: Recipe[] = [
    {
        id: '0',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        category: ['vegan', 'second-dish'],
        subcategory: ['snacks', 'vegetables'],
        image: potato,
        bookmarks: 85,
        likes: 152,
        date: '2025-02-28T00:00:00Z',
        time: '40 минут',
        portions: 2,
        nutritionValue: { calories: 250, proteins: 5, fats: 8, carbohydrates: 40 },
        ingredients: [
            { title: 'картошка', count: '4', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '2', measureUnit: 'шт.' },
            { title: 'фасоль', count: '200', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать картошку и перец.',
                image: step1,
            },
            {
                stepNumber: 2,
                description: 'Обжарить лук до золотистого цвета.',
                image: step2,
            },
            {
                stepNumber: 3,
                description: 'Добавить картошку, перец и фасоль, залить соусом.',
                image: step3,
            },
            {
                stepNumber: 4,
                description: 'Тушить на медленном огне 30 минут.',
                image: step4,
            },
        ],
        side: 'potatoes',
    },
    {
        id: '1',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        category: ['vegan', 'snacks'],
        subcategory: ['snacks', 'warm-snacks'],
        image: potatoRolls,
        bookmarks: 85,
        likes: 1152,
        date: '2024-02-20T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить картошку и сделать пюре.',
                image: step3,
            },
            {
                stepNumber: 2,
                description: 'Обжарить грибы до готовности.',
                image: step6,
            },
            {
                stepNumber: 3,
                description: 'Сформировать рулетики и обжарить.',
                image: step8,
            },
        ],
        side: 'potatoes',
    },
    {
        id: '2',
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья готовится с овощным соусом и соусом бешамель, а вместо листов для лазаньи используется тонкий лаваш.',
        category: ['vegan', 'second-dish', 'national'],
        subcategory: ['second-dish', 'vegetables', 'italian', 'snacks'],
        image: lasagna,
        bookmarks: 85,
        likes: 152,
        date: '2023-01-25T00:00:00Z',
        time: '1 час',
        portions: 1,
        nutritionValue: { calories: 300, proteins: 12, fats: 8, carbohydrates: 45 },
        ingredients: [
            { title: 'лаваш', count: '3', measureUnit: 'листов' },
            { title: 'овощной соус', count: '300', measureUnit: 'мл' },
            { title: 'соус бешамель', count: '200', measureUnit: 'мл' },
            { title: 'сыр', count: '100', measureUnit: 'г' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Приготовить соусы.',
                image: step3,
            },
            {
                stepNumber: 2,
                description: 'Сложить слои лазаньи.',
                image: step2,
            },
            {
                stepNumber: 3,
                description: 'Запекать 30 минут.',
                image: step8,
            },
        ],
        side: 'otherVegetables',
    },
    {
        id: '3',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: ['vegan', 'second-dish'],
        subcategory: ['second-dish', 'poultry-dish'],
        image: bulgurMeatballs,
        bookmarks: 85,
        likes: 152,
        date: '2023-02-15T00:00:00Z',
        time: '50 минут',
        portions: 4,
        nutritionValue: { calories: 200, proteins: 10, fats: 5, carbohydrates: 30 },
        ingredients: [
            { title: 'булгур', count: '150', measureUnit: 'г' },
            { title: 'чечевица', count: '100', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Смешать булгур и чечевицу.',
                image: step6,
            },
            {
                stepNumber: 2,
                description: 'Сформировать тефтели и запечь.',
                image: step1,
            },
            {
                stepNumber: 3,
                description: 'Подавать с соусом.',
                image: step2,
            },
        ],
        side: 'beans',
    },
    {
        id: '4',
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'second-dish', 'vegetables'],
        image: garlicPotatoes,
        bookmarks: 124,
        likes: 342,
        date: '2024-03-01T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 220, proteins: 4, fats: 7, carbohydrates: 35 },
        ingredients: [
            { title: 'картошка', count: '6', measureUnit: 'шт.' },
            { title: 'чеснок', count: '5', measureUnit: 'зубчиков' },
            { title: 'масло', count: '50', measureUnit: 'мл' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Очистить и нарезать картошку.',
                image: step3,
            },
            {
                stepNumber: 2,
                description: 'Обжарить с чесноком.',
                image: step4,
            },
            {
                stepNumber: 3,
                description: 'Подавать горячей.',
                image: step6,
            },
        ],
        side: 'potatoes',
    },
    {
        id: '5',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        category: ['vegan'],
        subcategory: ['second-dish', 'snacks'],
        image: cutlet,
        bookmarks: 2,
        likes: 1,
        date: '2024-02-05T00:00:00Z',
        time: '35 минут',
        portions: 4,
        nutritionValue: { calories: 150, proteins: 5, fats: 4, carbohydrates: 20 },
        ingredients: [
            { title: 'капуста', count: '300', measureUnit: 'г' },
            { title: 'мука', count: '50', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать капусту и отварить.',
                image: step4,
            },
            {
                stepNumber: 2,
                description: 'Смешать с мукой и сформировать котлеты.',
                image: step6,
            },
            {
                stepNumber: 3,
                description: 'Обжарить до золотистой корочки.',
                image: step2,
            },
        ],
        side: 'cabbage',
    },
    {
        id: '6',
        title: 'Овощное рагу',
        description: 'Сытное рагу из сезонных овощей, приправленное травами.',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'vegetables', 'snacks'],
        image: vegetableStew,
        bookmarks: 8,
        likes: 60,
        date: '2023-03-12T00:00:00Z',
        time: '1 час',
        portions: 2,
        nutritionValue: { calories: 200, proteins: 5, fats: 8, carbohydrates: 30 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'морковь', count: '1', measureUnit: 'шт.' },
            { title: 'картошка', count: '2', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать все овощи.',
                image: step1,
            },
            {
                stepNumber: 2,
                description: 'Обжарить на сковороде.',
                image: step8,
            },
            {
                stepNumber: 3,
                description: 'Добавить специи и тушить до готовности.',
                image: step4,
            },
        ],
        side: 'otherVegetables',
    },
    {
        id: '7',
        title: 'Лапша с курицей и шафраном',
        description: 'Ароматная лапша с курицей и шафраном, идеальное сочетание для сытного обеда.',
        category: ['second-dish'],
        subcategory: ['poultry-dish'],
        image: noodles,
        bookmarks: 258,
        likes: 1342,
        date: '2024-03-08T00:00:00Z',
        time: '40 минут',
        portions: 4,
        nutritionValue: { calories: 400, proteins: 30, fats: 15, carbohydrates: 50 },
        ingredients: [
            { title: 'лапша', count: '200', measureUnit: 'г' },
            { title: 'курица', count: '300', measureUnit: 'г' },
            { title: 'шафран', count: '1', measureUnit: 'ч. л.' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить лапшу.',
                image: step3,
            },
            {
                stepNumber: 2,
                description: 'Обжарить курицу с луком и шафраном.',
                image: step8,
            },
            {
                stepNumber: 3,
                description: 'Смешать лапшу с курицей и подавать.',
                image: step2,
            },
        ],
        side: 'pasta',
        meat: 'chicken',
    },
    {
        id: '8',
        title: 'Гриль-салат с овощами',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        image: saladGrill,
        bookmarks: 10,
        likes: 80,
        date: '2023-03-20T00:00:00Z',
        time: '25 минут',
        portions: 2,
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: step1,
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: step8,
            },
        ],
        side: 'otherVegetables',
    },
    {
        id: '9',
        title: 'Греческий салат с фетаксой',
        description:
            'Классический греческий салат с свежими овощами, оливками и сыром фета. Идеальное блюдо для легкого ужина или закуски.',
        category: ['salads'],
        subcategory: ['vegetable-salads'],
        image: greekSalad,
        bookmarks: 120,
        likes: 245,
        date: '2020-03-15T00:00:00Z',
        time: '15 минут',
        portions: 2,
        nutritionValue: { calories: 180, proteins: 6, fats: 12, carbohydrates: 10 },
        ingredients: [
            { title: 'помидоры', count: '3', measureUnit: 'шт.' },
            { title: 'огурцы', count: '2', measureUnit: 'шт.' },
            { title: 'красный лук', count: '1', measureUnit: 'шт.' },
            { title: 'оливки', count: '100', measureUnit: 'г' },
            { title: 'сыр фета', count: '150', measureUnit: 'г' },
            { title: 'оливковое масло', count: '30', measureUnit: 'мл' },
            { title: 'соль, перец', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать помидоры, огурцы и лук крупными кусками.',
                image: step1,
            },
            {
                stepNumber: 2,
                description: 'Добавить оливки и нарезанный кубиками сыр фета.',
                image: step2,
            },
            {
                stepNumber: 3,
                description: 'Заправить оливковым маслом, посолить и поперчить по вкусу.',
                image: step3,
            },
        ],
        side: 'otherVegetables',
    },
    {
        id: '10',
        title: 'Куриный суп с лапшой',
        description:
            'Ароматный куриный суп с домашней лапшой — идеальное блюдо для холодного дня. Простой рецепт, который понравится всей семье.',
        category: ['first-dish'],
        subcategory: ['meat-soups'],
        image: chickenSoup,
        bookmarks: 95,
        likes: 210,
        date: '2022-01-10T00:00:00Z',
        time: '1 час',
        portions: 6,
        nutritionValue: { calories: 220, proteins: 15, fats: 8, carbohydrates: 25 },
        ingredients: [
            { title: 'курица', count: '1', measureUnit: 'шт.' },
            { title: 'морковь', count: '2', measureUnit: 'шт.' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
            { title: 'лапша', count: '200', measureUnit: 'г' },
            { title: 'зелень', count: '0', measureUnit: 'по вкусу' },
            { title: 'соль, перец', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Сварить куриный бульон, добавив лук и морковь.',
                image: step1,
            },
            {
                stepNumber: 2,
                description: 'Достать курицу, отделить мясо от костей и вернуть в бульон.',
                image: step2,
            },
            { stepNumber: 3, description: 'Добавить лапшу и варить до готовности.', image: step3 },
            { stepNumber: 4, description: 'Подавать с зеленью.', image: step4 },
        ],
        meat: 'chicken',
    },
    {
        id: '11',
        title: 'Шоколадный мусс',
        description:
            'Нежный шоколадный мусс с воздушной текстурой — идеальный десерт для любого случая. Готовится быстро и просто.',
        category: ['desserts'],
        subcategory: ['creams'],
        image: chocolateMousse,
        bookmarks: 150,
        likes: 300,
        date: '2020-04-05T00:00:00Z',
        time: '20 минут',
        portions: 4,
        nutritionValue: { calories: 320, proteins: 5, fats: 20, carbohydrates: 30 },
        ingredients: [
            { title: 'темный шоколад', count: '200', measureUnit: 'г' },
            { title: 'сливки', count: '200', measureUnit: 'мл' },
            { title: 'яйцо', count: '3', measureUnit: 'шт.' },
            { title: 'сахар', count: '50', measureUnit: 'г' },
        ],
        steps: [
            { stepNumber: 1, description: 'Растопить шоколад на водяной бане.', image: step1 },
            { stepNumber: 2, description: 'Взбить сливки до густой пены.', image: step2 },
            { stepNumber: 3, description: 'Отдельно взбить яичные белки с сахаром.', image: step3 },
            {
                stepNumber: 4,
                description: 'Аккуратно смешать все ингредиенты и разлить по креманкам.',
                image: step4,
            },
        ],
    },
    {
        id: '12',
        title: 'Лосось на гриле с лимоном',
        description:
            'Нежное филе лосося, приготовленное на гриле с лимоном и травами. Простое и изысканное блюдо для ужина.',
        category: ['grills'],
        subcategory: ['fish-grill'],
        image: grilledSalmon,
        bookmarks: 110,
        likes: 275,
        date: '2021-03-20T00:00:00Z',
        time: '25 минут',
        portions: 2,
        nutritionValue: { calories: 280, proteins: 25, fats: 18, carbohydrates: 2 },
        ingredients: [
            { title: 'филе лосося', count: '2', measureUnit: 'шт.' },
            { title: 'лимон', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '30', measureUnit: 'мл' },
            { title: 'соль, перец', count: '0', measureUnit: 'по вкусу' },
            { title: 'свежие травы', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Замариновать лосось в оливковом масле с солью, перцем и травами.',
                image: step1,
            },
            {
                stepNumber: 2,
                description: 'Разогреть гриль и обжарить рыбу по 5-7 минут с каждой стороны.',
                image: step2,
            },
            { stepNumber: 3, description: 'Подавать с дольками лимона.', image: 'step3' },
        ],
        side: 'otherVegetables',
    },
    {
        id: '13',
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['first-dish'],
        subcategory: ['meat-soups'],
        image: solyanka,
        bookmarks: 155,
        likes: 211,
        date: '2022-03-20T00:00:00Z',
        time: '55 минут',
        portions: 4,
        nutritionValue: { calories: 310, proteins: 30, fats: 18, carbohydrates: 2 },
        ingredients: [
            { title: 'говядина', count: '500', measureUnit: 'гр' },
            { title: 'лимон', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '30', measureUnit: 'мл' },
            { title: 'соль, перец', count: '0', measureUnit: 'по вкусу' },
            { title: 'свежие травы', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Замариновать лосось в оливковом масле с солью, перцем и травами.',
                image: step1,
            },
            {
                stepNumber: 2,
                description: 'Разогреть гриль и обжарить рыбу по 5-7 минут с каждой стороны.',
                image: step2,
            },
            { stepNumber: 3, description: 'Подавать с дольками лимона.', image: 'step3' },
        ],
        meat: 'beef',
    },
    {
        id: '14',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        category: ['desserts'],
        subcategory: ['pancakes'],
        image: pancakes,
        bookmarks: 24,
        likes: 39,
        date: '2021-04-05T00:00:00Z',
        time: '20 минут',
        portions: 4,
        nutritionValue: { calories: 320, proteins: 5, fats: 20, carbohydrates: 30 },
        ingredients: [
            { title: 'мука', count: '200', measureUnit: 'г' },
            { title: 'сливки', count: '200', measureUnit: 'мл' },
            { title: 'яйцо', count: '3', measureUnit: 'шт.' },
            { title: 'сахар', count: '50', measureUnit: 'г' },
        ],
        steps: [
            { stepNumber: 1, description: 'Растопить шоколад на водяной бане.', image: step1 },
            { stepNumber: 2, description: 'Взбить сливки до густой пены.', image: step2 },
            { stepNumber: 3, description: 'Отдельно взбить яичные белки с сахаром.', image: step3 },
            {
                stepNumber: 4,
                description: 'Аккуратно смешать все ингредиенты и разлить по креманкам.',
                image: step4,
            },
        ],
    },
    {
        id: '15',
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        category: ['salads'],
        subcategory: ['vegetable-salads'],
        image: salad,
        bookmarks: 244,
        likes: 144,
        date: '2022-05-15T00:00:00Z',
        time: '25 минут',
        portions: 2,
        nutritionValue: { calories: 180, proteins: 6, fats: 12, carbohydrates: 10 },
        ingredients: [
            { title: 'помидоры', count: '3', measureUnit: 'шт.' },
            { title: 'огурцы', count: '2', measureUnit: 'шт.' },
            { title: 'красный лук', count: '1', measureUnit: 'шт.' },
            { title: 'оливки', count: '100', measureUnit: 'г' },
            { title: 'сыр фета', count: '150', measureUnit: 'г' },
            { title: 'оливковое масло', count: '30', measureUnit: 'мл' },
            { title: 'соль, перец', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать помидоры, огурцы и лук крупными кусками.',
                image: step1,
            },
            {
                stepNumber: 2,
                description: 'Добавить оливки и нарезанный кубиками сыр фета.',
                image: step2,
            },
            {
                stepNumber: 3,
                description: 'Заправить оливковым маслом, посолить и поперчить по вкусу.',
                image: step3,
            },
        ],
        side: 'otherVegetables',
    },
];

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe: (state, action: PayloadAction<Recipe>) => {
            state.push(action.payload);
        },
    },
});

export const { addRecipe } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
