import { Box } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';

import { AvatarWithName } from '~/common/components/avatarWithName/AvatarWithName.tsx';

type Props = {
    avatar: string;
    name: string;
    login: string;
    text: string;
};
export const CulinaryBlogItem = ({ avatar, name, login, text }: Props) => (
    <Box p={{ base: 4, '2xl': '24px 24px 20px 24px' }} bg='white' borderRadius='8px'>
        <AvatarWithName src={avatar} name={name} login={login} />
        <Text fontSize='sm' mt={{ base: 4, '2xl': 7 }} noOfLines={3}>
            {text}
        </Text>
    </Box>
);
