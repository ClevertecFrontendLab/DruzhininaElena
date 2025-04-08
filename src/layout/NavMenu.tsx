import { Accordion, Box, Icon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

import { NavMenuItem } from '~/components/NavMenuItem.tsx';
import { navMenuItemsData } from '~/data/navMenuItemsData.ts';
import { LogOut } from '~/icons/LogOut.tsx';

export const NavMenu = () => (
    <Flex
        direction='column'
        pos='fixed'
        left={0}
        bottom={0}
        top={{ base: '64px', xl: '80px' }}
        w='256px'
    >
        <Accordion
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
                // Убираем стрелки
                '&::-webkit-scrollbar-button': {
                    display: 'none',
                },
            }}
            m='34px 16px 10px 10px'
            flexGrow={1}
            overflowY='auto'
        >
            {navMenuItemsData.map((el) =>
                el.id === 7 ? (
                    <Box data-test-id='vegan-cuisine' key={el.id}>
                        <NavMenuItem {...el} />
                    </Box>
                ) : (
                    <NavMenuItem {...el} key={el.id} />
                ),
            )}
        </Accordion>
        <Box as='footer' h='144px' flexShrink={0} px='24px' fontSize='12px'>
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
