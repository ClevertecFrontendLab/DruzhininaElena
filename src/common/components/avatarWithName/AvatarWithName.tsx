import { Box } from '@chakra-ui/icons';
import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';

type Props = {
    src: string;
    name: string;
    login: string;
};
export const AvatarWithName = ({ src, name, login }: Props) => (
    <Flex>
        <Avatar name={name} src={src} size={{ base: 'sm', xl: 'md' }} mr={{ base: 2, xl: 3 }} />
        <Box>
            <Heading
                as='h6'
                fontSize={{ base: 'md', xl: 'lg' }}
                fontWeight={500}
                noOfLines={1}
                wordBreak='break-all'
            >
                {name}
            </Heading>
            <Text as='span' fontSize={{ base: 'xs', xl: 'sm' }} color='blackAlpha.700'>
                {login}
            </Text>
        </Box>
    </Flex>
);
