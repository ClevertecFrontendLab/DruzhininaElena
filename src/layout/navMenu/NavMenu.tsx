import { Accordion, Box, Icon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { LogOut } from '~/icons/otherIcons/LogOut.tsx';
import { NavMenuItem } from '~/layout/navMenu/navMenuItem/NavMenuItem.tsx';
import { selectCategories } from '~/model/selectors.ts';
import { useAppSelector } from '~/store/hooks.ts';

type Props = {
    isBurgerMenu?: boolean;
    children?: ReactNode;
    closeBurgerMenu?: () => void;
};

export const NavMenu = ({ isBurgerMenu = false, children, closeBurgerMenu }: Props) => {
    const categories = useAppSelector(selectCategories);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const location = useLocation();

    // Автоматическое закрытие при переходе на главную
    useEffect(() => {
        if (location.pathname === '/') {
            setExpandedIndex(null);
        }
    }, [location.pathname]);

    return (
        <Flex
            data-test-id='nav'
            direction='column'
            pos='fixed'
            left={isBurgerMenu ? 'auto' : 0}
            right={isBurgerMenu ? 2 : 'auto'}
            bottom={isBurgerMenu ? '84px' : 0}
            top={{ base: '64px', xl: '80px' }}
            w={isBurgerMenu ? '344px' : '256px'}
            bg='white'
            zIndex={20}
            borderRadius={isBurgerMenu ? '0 0 12px 12px' : 0}
            overflow='hidden'
        >
            {children && <>{children}</>}
            <Accordion
                index={expandedIndex}
                onChange={(index) => setExpandedIndex(index as number)}
                allowToggle
                sx={{
                    '&::-webkit-scrollbar': {
                        backgroundColor: '#0000000A',
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#00000028',
                        borderRadius: '8px',
                    },
                    '&::-webkit-scrollbar-button': {
                        display: 'none',
                    },
                }}
                m={isBurgerMenu ? '12px 16px 10px 10px' : '34px 16px 10px 10px'}
                flexGrow={1}
                overflowY='auto'
            >
                {categories.map((el) => (
                    <NavMenuItem {...el} key={el.id} closeBurgerMenu={closeBurgerMenu} />
                ))}
            </Accordion>
            <Box
                as='footer'
                h='144px'
                flexShrink={0}
                px='24px'
                fontSize='12px'
                alignSelf='flex-end'
            >
                <Box as='span' display='block' fontWeight={500} color='blackAlpha.400'>
                    Версия программы 03.25
                </Box>
                <Box
                    as='span'
                    display='block'
                    fontWeight={400}
                    color='blackAlpha.700'
                    m='16px 0'
                    pr='20px'
                >
                    Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                </Box>
                <Flex as='a' cursor='pointer' align='center'>
                    <Icon as={LogOut} />
                    <Box as='span' fontWeight={600} ml='6px'>
                        Выйти
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};
