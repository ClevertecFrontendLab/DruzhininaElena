import { Box, Show } from '@chakra-ui/icons';
import { Heading, Text } from '@chakra-ui/react';

type Props = {
    title: string;
    text: string;
    showTextAbove?: string;
    mobileH?: string;
    linesTitleOnMobile?: number;
};
export const CardTitleAndText = ({
    title,
    text,
    showTextAbove = 'xl',
    mobileH = '48px',
    linesTitleOnMobile = 2,
}: Props) => (
    <Box overflow='hidden' h={{ base: mobileH, xl: '100px' }}>
        <Heading
            as='h3'
            fontSize={{ base: 'md', xl: 'lg', '2xl': 'xl' }}
            fontWeight={500}
            noOfLines={{ base: linesTitleOnMobile, xl: 1 }}
            wordBreak={{ base: 'normal', xl: 'break-all' }}
        >
            {title}
        </Heading>
        <Show above={showTextAbove}>
            <Text fontSize='sm' mt={2} noOfLines={3}>
                {text}
            </Text>
        </Show>
    </Box>
);
