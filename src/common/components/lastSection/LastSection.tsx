import { Box, Grid } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';

import { LastSectionBigCard } from '~/common/components/lastSection/cardWithDescription/LastSectionBigCard.tsx';
import { LastSectionSmallCard } from '~/common/components/lastSection/cardWithoutDescripthon/LastSectionSmallCard.tsx';
import { SectionTitle } from '~/common/components/sectionTitle/SectionTitle.tsx';
import { FirstCardsData } from '~/data/homePage/veganCuisineData.ts';
import { SecondCardsData } from '~/data/homePage/veganCuisineDataShort.ts';

type Props = {
    title: string;
    description: string;
    firstCardsData: FirstCardsData[];
    secondCardsData: SecondCardsData[];
};

export const LastSection = ({ title, description, firstCardsData, secondCardsData }: Props) => (
    <Box as='section' borderTop='1px solid rgba(0, 0, 0, 0.08)'>
        <Grid
            mt={{ base: 2, xl: 6 }}
            mb={{ base: 4, xl: 6 }}
            gap={{ base: 3, xl: 0 }}
            templateColumns={{ base: '1fr', xl: '1fr 2fr', '2xl': '1fr 1fr' }}
        >
            <Box pr={2}>
                <SectionTitle title={title} />
            </Box>
            <Text fontWeight={500} color='blackAlpha.700' lineHeight={1.5}>
                {description}
            </Text>
        </Grid>
        <Grid
            templateColumns={{ base: '1fr', md: '2fr 1fr', '2xl': '1fr 1fr' }}
            gap={{ base: 3, xl: 4, '2xl': 6 }}
        >
            <Grid
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                gap={{ base: 3, xl: 4, '2xl': 6 }}
            >
                {firstCardsData.map((i) => (
                    <LastSectionBigCard key={i.id} {...i} />
                ))}
            </Grid>
            <Flex direction='column' gap={{ base: 3, md: 1.5, xl: 3 }} justify='space-between'>
                {secondCardsData.map((i) => (
                    <LastSectionSmallCard key={i.id} {...i} />
                ))}
            </Flex>
        </Grid>
    </Box>
);
