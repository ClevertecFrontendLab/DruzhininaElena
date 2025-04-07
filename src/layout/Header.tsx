import { Box, Hide, Icon, Show, Spacer } from '@chakra-ui/icons';
import { Flex, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import { AvatarWithName } from '~/components/AvatarWithName.tsx';
import { Breadcrumbs } from '~/components/Breadcrumbs.tsx';
import { BurgerMenu } from '~/components/BurgerMenu.tsx';
import { IconCounter } from '~/components/IconCounter.tsx';
import { BookmarkHeart } from '~/icons/counterIcons/BookmarkHeart.tsx';
import { EmojiHeartEyes } from '~/icons/counterIcons/EmojiHeartEyes.tsx';
import { People } from '~/icons/counterIcons/People.tsx';
import { LogoWithoutText } from '~/icons/LogoWithoutText.tsx';
import { LogoWithText } from '~/icons/LogoWithText.tsx';

import avatar from '../assets/images/avatars/avatar.webp';

export const Header = () => (
    <Flex
        pl='12px'
        as='header'
        h={{ base: '64px', xl: '80px' }}
        bg='lime.50'
        align='center'
        pos='fixed'
        top='0'
        right='0'
        left='0'
        data-test-id='header'
        zIndex={10}
    >
        <NavLink to='/'>
            <Show above='md'>
                <Icon as={LogoWithText} />
            </Show>
            <Hide above='md'>
                <Icon as={LogoWithoutText} />
            </Hide>
        </NavLink>
        <Show above='xl'>
            <Box>
                <Breadcrumbs />
            </Box>
            <Spacer />
            <Box mr='80px'>
                <AvatarWithName
                    name='Екатерина Константинопольская'
                    login='@bake_and_pie'
                    src={avatar}
                />
            </Box>
        </Show>
        <Hide above='xl'>
            <Spacer />
            <HStack px={{ base: '8px', sm: '12px' }} spacing={0}>
                <IconCounter icon={BookmarkHeart} count={185} spacing='6px' padding='4px 8px' />
                <IconCounter icon={People} count={589} spacing='6px' padding='4px 8px' />
                <IconCounter icon={EmojiHeartEyes} count={587} spacing='6px' padding='4px 8px' />
            </HStack>
            <BurgerMenu />
        </Hide>
    </Flex>
);
