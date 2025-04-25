import { Box } from '@chakra-ui/icons';
import { Flex, Stack } from '@chakra-ui/react';

import { CardTitleAndText } from '~/common/components/cardTitleWithText/CardTitleAndText.tsx';
import { IconCounter, IconCounterProps } from '~/common/components/iconCounter/IconCounter.tsx';
import { MenuItemTag } from '~/common/components/menuItemTag/MenuItemTag.tsx';
import { Category } from '~/data/recipes/recipesData.ts';

type Props = {
    title: string;
    description: string;
    iconCounters: IconCounterProps[];
    category: Category;
    bgColorTag: string;
};
export const LastSectionBigCard = ({
    title,
    description,
    iconCounters,
    category,
    bgColorTag,
}: Props) => (
    <Box
        borderRadius='8px'
        border='1px solid'
        borderColor='blackAlpha.200'
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Box p={{ base: '12px', xl: '16px', '2xl': '24px 24px 20px 24px' }}>
            <Stack spacing={{ base: 2, xl: 6 }}>
                <CardTitleAndText
                    title={title}
                    description={description}
                    showTextAbove='base'
                    mobileH='100px'
                    linesTitleOnMobile={1}
                    isMainCard={false}
                />
                <Flex justify='space-between'>
                    <MenuItemTag category={category} bgColor={bgColorTag} mobilePos='static' />
                    <Flex gap='8px'>
                        {!!iconCounters.length &&
                            iconCounters.map((i, index) => <IconCounter key={index} {...i} />)}
                    </Flex>
                </Flex>
            </Stack>
        </Box>
    </Box>
);
