import { Box, Show } from '@chakra-ui/icons';
import { Heading, Text } from '@chakra-ui/react';

import { highlightText } from '~/common/utils/text';
import { selectFilters } from '~/model/selectors.ts';
import { useAppSelector } from '~/store/hooks.ts';

type Props = {
    title: string;
    description: string;
    showTextAbove?: string;
    mobileH?: string;
    linesTitleOnMobile?: number;
    isMainCard?: boolean;
};

export const CardTitleAndText = ({
    title,
    description,
    showTextAbove = 'xl',
    mobileH = '48px',
    linesTitleOnMobile = 2,
    isMainCard = true,
}: Props) => {
    const filter = useAppSelector(selectFilters);
    const titleWithHighlightedText = highlightText(title, filter.searchQuery);

    return (
        <Box overflow='hidden' minH={{ base: mobileH, xl: '100px' }}>
            <Heading
                as='h3'
                fontSize={{ base: 'md', xl: 'lg', '2xl': 'xl' }}
                fontWeight={500}
                noOfLines={{ base: linesTitleOnMobile, xl: 1 }}
                wordBreak={{ base: 'normal', xl: 'break-all' }}
            >
                {isMainCard && filter.isSearchModeOnPage ? (
                    <>{titleWithHighlightedText}</>
                ) : (
                    <>{title}</>
                )}
            </Heading>
            <Show above={showTextAbove}>
                <Text fontSize='sm' mt={2} noOfLines={3}>
                    {description}
                </Text>
            </Show>
        </Box>
    );
};
