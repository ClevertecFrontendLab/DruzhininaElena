import { Icon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';

import { iconsMap } from '~/icons/iconsMapping.ts';
import { selectCategories } from '~/model/selectors.ts';
import { useAppSelector } from '~/store/hooks.ts';

type Props = {
    category: string;
    bgColor: string;
};
export const MenuItemTag = ({ category, bgColor }: Props) => {
    const categories = useAppSelector(selectCategories);
    const currentCategory = categories.find((item) => item.id === category);

    if (!currentCategory) {
        return;
    }

    const IconComponent = iconsMap[currentCategory.icon];

    return (
        <Flex
            alignItems='center'
            bg={bgColor}
            borderRadius='4px'
            p={{ base: '2px 4px', xl: '2px 8px' }}
            gap='8px'
        >
            <Icon as={IconComponent} boxSize='16px' />
            <Text as='span' flex='1' fontSize='sm' noOfLines={1}>
                {currentCategory.name}
            </Text>
        </Flex>
    );
};
