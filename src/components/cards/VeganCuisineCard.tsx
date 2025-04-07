import { CardBody } from '@chakra-ui/icons';
import { Card, Flex, Stack } from '@chakra-ui/react';
import { JSX } from 'react';

import { CardTitleAndText } from '~/components/CardTitleAndText.tsx';
import { IconCounter, IconCounterProps } from '~/components/IconCounter.tsx';
import { MenuItemTag } from '~/components/MenuItemTag.tsx';

type Props = {
    title: string;
    text: string;
    iconCounters: IconCounterProps[];
    tagIcon: () => JSX.Element;
    tagTitle: string;
    bgColorTag: string;
};
export const VeganCuisineCard = ({
    title,
    text,
    iconCounters,
    tagTitle,
    tagIcon,
    bgColorTag,
}: Props) => (
    <Card
        borderRadius='8px'
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <CardBody p={{ base: '8px 8px 4px 8px', xl: '12px', '2xl': '16px 24px 20px 24px' }}>
            <Stack spacing={{ base: 2, xl: 6 }}>
                <CardTitleAndText
                    title={title}
                    text={text}
                    showTextAbove='base'
                    mobileH='100px'
                    linesTitleOnMobile={1}
                />
                <Flex justify='space-between'>
                    <MenuItemTag
                        icon={tagIcon}
                        title={tagTitle}
                        bgColor={bgColorTag}
                        mobilePos='static'
                    />
                    <Flex>
                        {!!iconCounters.length &&
                            iconCounters.map((i, index) => <IconCounter key={index} {...i} />)}
                    </Flex>
                </Flex>
            </Stack>
        </CardBody>
    </Card>
);
