import { Icon } from '@chakra-ui/icons';
import { Avatar, IconButton } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { AddRecipe } from '~/icons/otherIcons/AddRecipe.tsx';
import { Home } from '~/icons/otherIcons/Home.tsx';
import { Search } from '~/icons/otherIcons/Search.tsx';

import avatar from '../assets/images/avatars/avatar.webp';

type FooterItemData = {
    id: number;
    text: string;
    isActive: boolean;
    icon: ReactNode;
};

export const footerItems: FooterItemData[] = [
    {
        id: 1,
        text: 'Главная',
        isActive: true,
        icon: (
            <IconButton
                isRound={true}
                variant='solid'
                bg='black'
                _hover={{ bg: 'black' }}
                aria-label='Главная'
                fontSize='20px'
                icon={<Home boxSize='16px' />}
            />
        ),
    },
    {
        id: 2,
        text: 'Поиск',
        isActive: false,
        icon: <Icon as={Search} boxSize='24px' />,
    },
    {
        id: 3,
        text: 'Записать',
        isActive: false,
        icon: <Icon as={AddRecipe} boxSize='24px' />,
    },
    {
        id: 4,
        text: 'Мой профиль',
        isActive: false,
        icon: <Avatar name='Екатерина Константинопольская' src={avatar} boxSize='40px' />,
    },
];
