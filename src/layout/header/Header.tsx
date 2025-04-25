import { Box, Hide, Icon, Show, Spacer } from '@chakra-ui/icons';
import { Flex, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import { AvatarWithName } from '~/common/components/avatarWithName/AvatarWithName.tsx';
import { Breadcrumbs } from '~/common/components/breadcrumbs/Breadcrumbs.tsx';
import { IconCounter } from '~/common/components/iconCounter/IconCounter.tsx';
import { BookmarkHeart } from '~/icons/counterIcons/BookmarkHeart.tsx';
import { EmojiHeartEyes } from '~/icons/counterIcons/EmojiHeartEyes.tsx';
import { People } from '~/icons/counterIcons/People.tsx';
import { LogoWithoutText } from '~/icons/otherIcons/LogoWithoutText.tsx';
import { LogoWithText } from '~/icons/otherIcons/LogoWithText.tsx';
import { BurgerMenu } from '~/layout/header/burgerMenu/BurgerMenu.tsx';
import { resetFilters } from '~/model/filterSlice.ts';
import { useAppDispatch } from '~/store/hooks.ts';

import avatar from '../../assets/images/avatars/avatar.webp';

type Props = {
    isBurgerMenu?: boolean;
};

export const Header = ({ isBurgerMenu = false }: Props) => {
    const dispatch = useAppDispatch();

    const resetFiltersHandler = () => {
        dispatch(resetFilters());
    };

    return (
        <Flex
            pl='12px'
            as='header'
            h={{ base: '64px', xl: '80px' }}
            bg={isBurgerMenu ? 'white' : 'lime.50'}
            align='center'
            pos='fixed'
            top='0'
            right='0'
            left='0'
            data-test-id='header'
            zIndex={isBurgerMenu ? 100 : 10}
        >
            <NavLink to='/' onClick={resetFiltersHandler}>
                <Show above='md'>
                    <Icon as={LogoWithText} />
                </Show>
                <Hide above='md'>
                    <Icon as={LogoWithoutText} />
                </Hide>
            </NavLink>
            {!isBurgerMenu && (
                <>
                    <Show above='xl'>
                        <Box ml={32}>
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
                            <IconCounter
                                icon={BookmarkHeart}
                                count={185}
                                spacing='6px'
                                padding='4px 8px'
                                boxSize='12px'
                            />
                            <IconCounter
                                icon={People}
                                count={589}
                                spacing='6px'
                                padding='4px 8px'
                                boxSize='12px'
                            />
                            <IconCounter
                                icon={EmojiHeartEyes}
                                count={587}
                                spacing='6px'
                                padding='4px 8px'
                                boxSize='12px'
                            />
                        </HStack>
                    </Hide>
                    <BurgerMenu />
                </>
            )}
        </Flex>
    );
};
