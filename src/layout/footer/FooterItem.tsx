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
    const bgColor = isActive
        ? 'radial-gradient(circle at 50% 40%, rgba(196, 255, 97, 0.7),rgba(255, 255, 255, 0) 55%),rgb(255, 255, 211)'
        : 'lime.50';

    return (
        <Box cursor='pointer' h='100%' w='100%' bg={bgColor}>
            <VStack spacing={0} h='100%' w='100%' alignItems='center' justifyContent='center'>
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
