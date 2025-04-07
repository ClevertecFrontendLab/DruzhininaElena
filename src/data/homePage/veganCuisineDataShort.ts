import { ReactNode } from 'react';

import { FirstCourses } from '~/icons/navMenu/FirstCourses.tsx';
import { SecondCourses } from '~/icons/navMenu/SecondCourses.tsx';

export type SecondCardsData = {
    id: number;
    icon: ReactNode;
    title: string;
};

export const veganCuisineDataShort: SecondCardsData[] = [
    {
        id: 1,
        icon: SecondCourses,
        title: 'Стейк для вегетарианцев',
    },
    {
        id: 2,
        icon: SecondCourses,
        title: 'Котлеты из гречки и фасоли',
    },
    {
        id: 3,
        icon: FirstCourses,
        title: 'Сырный суп с лапшой и брокколи',
    },
];
