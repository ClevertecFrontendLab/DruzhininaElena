import { ReactNode } from 'react';

import { Desserts } from '~/icons/navMenu/Desserts.tsx';
import { Drinks } from '~/icons/navMenu/Drinks.tsx';
import { FirstCourses } from '~/icons/navMenu/FirstCourses.tsx';
import { Grils } from '~/icons/navMenu/Grils.tsx';
import { KidsCourses } from '~/icons/navMenu/KidsCourses.tsx';
import { National } from '~/icons/navMenu/National.tsx';
import { Preparations } from '~/icons/navMenu/Peparations.tsx';
import { Salads } from '~/icons/navMenu/Salads.tsx';
import { Sauces } from '~/icons/navMenu/Sauces.tsx';
import { SecondCourses } from '~/icons/navMenu/SecondCourses.tsx';
import { Snacks } from '~/icons/navMenu/Snacks.tsx';
import { TherapeuticNutrition } from '~/icons/navMenu/TherapeuticNutrition.tsx';
import { Vegan } from '~/icons/navMenu/Vegan.tsx';

export type navMenuItem = {
    id: number;
    title: string;
    icon: ReactNode;
    listItems: string[];
    linkTo?: string;
};

export const navMenuItemsData: navMenuItem[] = [
    {
        id: 1,
        title: 'Салаты',
        icon: Salads,
        listItems: ['Мясные салаты', 'Рыбные салаты', 'Овощные салаты', 'Теплые салаты'],
    },
    {
        id: 2,
        title: 'Закуски',
        icon: Snacks,
        listItems: [
            'Мясные закуски',
            'Рыбные закуски',
            'Овощные закуски',
            'Теплые закуски',
            'Бутерброды',
            'Фастфуд',
        ],
    },
    {
        id: 3,
        title: 'Первые блюда',
        icon: FirstCourses,
        listItems: ['Мясные супы', 'Овощные супы', 'Бульоны', 'Холодные супы', 'Диетические супы'],
    },
    {
        id: 4,
        title: 'Вторые блюда',
        icon: SecondCourses,
        listItems: [
            'Мясные',
            'Рыбные',
            'Овощные',
            'Из птицы',
            'Из грибов',
            'Из субпродуктов',
            'На пару',
            'Пельмени, вареники',
            'Мучные гарниры',
            'Овощные гарниры',
            'Пицца',
            'Суши',
        ],
    },
    {
        id: 5,
        title: 'Десерты, выпечка',
        icon: Desserts,
        listItems: [
            'Блины и  оладьи',
            'Пироги и пончики',
            'Торты',
            'Рулеты',
            'Кексы и мафины',
            'Сырники и ватрушки',
            'Из слоеного теста',
            'Из Из заварного теста',
            'Из дрожжевого теста',
            'Булочки и сдоба',
            'Хлеб',
            'Тесто на пиццу',
            'Кремы',
        ],
    },
    {
        id: 6,
        title: 'Блюда на гриле',
        icon: Grils,
        listItems: ['Говядина', 'Свинина', 'Птица', 'Рыба', 'Грибы', 'Овощи'],
    },
    {
        id: 7,
        title: 'Веганская кухня',
        icon: Vegan,
        listItems: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Выпечка',
            'Сыроедческие блюда',
            'Напитки',
        ],
        linkTo: '/vegan',
    },
    {
        id: 8,
        title: 'Детские блюда',
        icon: KidsCourses,
        listItems: [
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Выпечка',
            'Без глютена',
            'Без сахара',
            'Без аллергенов',
            'Блюда для прикорма',
        ],
    },
    {
        id: 9,
        title: 'Лечебное питание',
        icon: TherapeuticNutrition,
        listItems: [
            'Детская диета',
            'Диета №1',
            'Диета №2',
            'Диета №3',
            'Диета №4',
            'Диета №5',
            'Диета №6',
            'Диета №7',
            'Диета №8',
            'Диета №9',
            'Диета №10',
            'Диета №12',
            'Диета №13',
            'Диета №14',
            'Без глютена',
            'Без аллергенов',
        ],
    },
    {
        id: 10,
        title: 'Национальные',
        icon: National,
        listItems: [
            'Американская кухня',
            'Армянская кухня',
            'Греческая кухня',
            'Грузинская кухня',
            'Итальянская кухня',
            'Испанская кухня',
            'Китайская кухня',
            'Мексиканская кухня',
            'Паназиатская кухня',
            'Паназиатская кухня',
            'Русская кухня',
            'Турецкая кухня',
            'Французская кухня',
            'Шведская кухня',
            'Японская кухня',
            'Другая кухня',
        ],
    },
    {
        id: 11,
        title: 'Соусы',
        icon: Sauces,
        listItems: ['Соусы мясные', 'Соусы сырные', 'Маринады'],
    },
    {
        id: 12,
        title: 'Напитки',
        icon: Drinks,
        listItems: [
            'Соки и фреши',
            'Смузи',
            'Компоты',
            'Кисели',
            'Кофе',
            'Лечебный чай',
            'Квас',
            'Коктейли',
            'Алкогольные',
        ],
    },
    {
        id: 13,
        title: 'Домашние заготовки',
        icon: Preparations,
        listItems: [
            'Мясные заготовки',
            'Рыбные заготовки',
            'Из огурцов',
            'Из томатов',
            'Из грибов',
            'Овощные заготовки',
            'Салаты, икра',
            'Из фруктов и ягод',
        ],
    },
];
