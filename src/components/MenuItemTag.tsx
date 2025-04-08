import { ComponentWithAs, Icon, IconProps } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';

type Props = {
    icon: ComponentWithAs<'svg', IconProps>;
    title: string;
    bgColor: string;
    mobilePos?: 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static';
};
export const MenuItemTag = ({ icon, title, bgColor, mobilePos = 'absolute' }: Props) => (
    <Flex
        alignItems='center'
        bg={bgColor}
        borderRadius='4px'
        p={{ base: '2px 4px', xl: '2px 8px' }}
        gap='8px'
        pos={{ base: mobilePos, xl: 'static' }}
        top='8px'
        left='8px'
    >
        <Icon as={icon} boxSize='16px' />
        <Text as='span' flex='1' fontSize='sm' noOfLines={1}>
            {title}
        </Text>
    </Flex>
);
