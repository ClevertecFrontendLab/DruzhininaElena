import { Box, CardBody } from '@chakra-ui/icons';
import { Card, Flex, Image, Stack } from '@chakra-ui/react';
import { JSX } from 'react';

import { CardTitleAndText } from '~/components/CardTitleAndText.tsx';
import { IconCounter, IconCounterProps } from '~/components/IconCounter.tsx';
import { MenuItemTag } from '~/components/MenuItemTag.tsx';

type Props = {
    img: string;
    altImg: string;
    title: string;
    text: string;
    iconCounters: IconCounterProps[];
    tagIcon: () => JSX.Element;
    tagTitle: string;
    bgColorTag: string;
};
export const NewRecipesCard = ({
    img,
    altImg,
    title,
    text,
    iconCounters,
    tagTitle,
    tagIcon,
    bgColorTag,
}: Props) => (
    <Card
        borderRadius='8px'
        overflow='hidden'
        w={{ base: '158px', xl: '277px', '2xl': '322px' }}
        flexShrink={0}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Box position='relative' h={{ base: '128px', xl: '230px' }} overflow='hidden'>
            <Image src={img} alt={altImg} p={0} w='100%' h='100%' objectFit='cover' maxH='230px' />
        </Box>
        <CardBody p={{ base: '8px 8px 4px 8px', xl: '12px', '2xl': '16px 24px 20px 24px' }}>
            <Stack spacing={{ base: 2, xl: 6 }}>
                <CardTitleAndText title={title} text={text} />
                <Flex justify='space-between'>
                    <MenuItemTag icon={tagIcon} title={tagTitle} bgColor={bgColorTag} />
                    <Flex gap='8px'>
                        {!!iconCounters.length &&
                            iconCounters.map((i, index) => <IconCounter key={index} {...i} />)}
                    </Flex>
                </Flex>
            </Stack>
        </CardBody>
    </Card>
);
