import { Box, Show } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';

import { NewRecipesCard } from '~/components/cards/NewRecipesCard.tsx';
import { SectionTitle } from '~/components/SectionTitle.tsx';
import { newRecipesCardsData } from '~/data/homePage/newRecipesCardsData.ts';
import { ArrowLeft } from '~/icons/ArrowLeft.tsx';
import { ArrowRight } from '~/icons/ArrowRight.tsx';

export const NewRecipesSection = () => (
    <Box as='section'>
        <SectionTitle title='Новые рецепты' />
        <Box pos='relative' mt={{ base: '0.75rem', lg: '1.5rem' }}>
            <Flex gap={{ base: '12px', '2xl': '24px' }} overflow='hidden'>
                {newRecipesCardsData.map((el) => (
                    <NewRecipesCard key={el.id} {...el} />
                ))}
            </Flex>
            <Show above='xl'>
                <IconButton
                    bg='black'
                    aria-label='Arrow Left'
                    w={{ base: '40px', '2xl': '48px' }}
                    h={{ base: '40px', '2xl': '48px' }}
                    _hover={{ bg: 'black' }}
                    icon={<ArrowLeft boxSize={{ base: '20px', '2xl': '24px' }} />}
                    pos='absolute'
                    left='-8px'
                    top='148px'
                />
                <IconButton
                    bg='black'
                    aria-label='Arrow Right'
                    w={{ base: '40px', '2xl': '48px' }}
                    h={{ base: '40px', '2xl': '48px' }}
                    _hover={{ bg: 'black' }}
                    icon={<ArrowRight boxSize={{ base: '20px', '2xl': '24px' }} />}
                    pos='absolute'
                    right='-8px'
                    top='148px'
                />
            </Show>
        </Box>
    </Box>
);
