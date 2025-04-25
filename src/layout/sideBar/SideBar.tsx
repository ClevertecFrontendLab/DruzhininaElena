import { Center, Spacer } from '@chakra-ui/icons';
import { IconButton, VStack } from '@chakra-ui/react';

import { IconCounter } from '~/common/components/iconCounter/IconCounter.tsx';
import { BookmarkHeart } from '~/icons/counterIcons/BookmarkHeart.tsx';
import { EmojiHeartEyes } from '~/icons/counterIcons/EmojiHeartEyes.tsx';
import { People } from '~/icons/counterIcons/People.tsx';
import { AddRecipe } from '~/icons/otherIcons/AddRecipe.tsx';

export const SideBar = () => (
    <VStack pos='fixed' right={0} bottom={0} top={{ base: '64px', xl: '80px' }} w='208px'>
        <VStack spacing='24px' pt='16px'>
            <IconCounter
                icon={BookmarkHeart}
                count={185}
                spacing='8px'
                padding='8px 16px'
                fontSize='md'
                boxSize='12px'
            />
            <IconCounter
                icon={People}
                count={589}
                spacing='8px'
                padding='8px 16px'
                fontSize='md'
                boxSize='12px'
            />
            <IconCounter
                icon={EmojiHeartEyes}
                count={587}
                spacing='8px'
                padding='8px 16px'
                fontSize='md'
                boxSize='12px'
            />
        </VStack>
        <Spacer />
        <Center
            h='208px'
            w='208px'
            background='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 80%)'
        >
            <IconButton
                isRound={true}
                variant='solid'
                bg='black'
                _hover={{ bg: 'blackAlpha.800' }}
                aria-label='Добавить рецепт'
                boxSize='48px'
                icon={<AddRecipe />}
            />
        </Center>
    </VStack>
);
