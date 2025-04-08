import alex from '../../assets/images/avatars/alex.webp';
import ekaterina from '../../assets/images/avatars/ekaterina.webp';
import elena from '../../assets/images/avatars/elena.webp';

type CulinaryBlogsData = {
    id: number;
    avatar: string;
    name: string;
    login: string;
    text: string;
};

export const culinaryBlogsData: CulinaryBlogsData[] = [
    {
        id: 1,
        avatar: elena,
        name: 'Елена Высоцкая',
        login: '@elenapovar',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 2,
        avatar: alex,
        name: 'Alex Cook',
        login: '@funtasticooking',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 3,
        avatar: ekaterina,
        name: 'Екатерина Константинопольская',
        login: '@bake_and_pie',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
