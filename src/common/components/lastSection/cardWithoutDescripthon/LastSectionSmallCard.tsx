import { Box, Icon } from '@chakra-ui/icons';
import { Button, Heading, HStack } from '@chakra-ui/react';
import { JSX } from 'react';

type Props = {
    title: string;
    icon: () => JSX.Element;
};
export const LastSectionSmallCard = ({ title, icon }: Props) => (
    <Box
        borderRadius='8px'
        border='1px solid'
        borderColor='blackAlpha.200'
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Box p={{ base: '10px 12px', xl: '12px', '2xl': '12px 24px' }}>
            <HStack spacing={{ base: 2, xl: 3 }}>
                <Icon as={icon} boxSize='24px' flexShrink={0} />
                <Heading
                    as='h3'
                    fontWeight={500}
                    fontSize={{ base: 'md', xl: 'lg', '2xl': 'xl' }}
                    flexGrow={1}
                    noOfLines={1}
                >
                    {title}
                </Heading>
                <Button
                    flexShrink={0}
                    variant='outline'
                    colorScheme='lime'
                    size={{ base: 'xs', '2xl': 'sm' }}
                >
                    Готовить
                </Button>
            </HStack>
        </Box>
    </Box>
);
