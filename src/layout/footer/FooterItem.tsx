import { Box } from '@chakra-ui/icons';
import { Flex, Text, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    text: string;
    isActive: boolean;
};

export const FooterItem = ({ children, text, isActive }: Props) => {
    const textColor = isActive ? 'black' : 'blackAlpha.700';

    return (
        <Box cursor='pointer'>
            <VStack spacing={0}>
                <Flex align='center' justify='center' h='40px' w='40px'>
                    {children}
                </Flex>
                <Text color={textColor} fontWeight={isActive ? 500 : 400} fontSize='xs'>
                    {text}
                </Text>
            </VStack>
        </Box>
    );
};
