import { Box, CardBody, ComponentWithAs, IconProps, Show } from '@chakra-ui/icons';
import { Button, Card, Flex, Image, Stack } from '@chakra-ui/react';

import { CardTitleAndText } from '~/components/CardTitleAndText.tsx';
import { IconCounter, IconCounterProps } from '~/components/IconCounter.tsx';
import { MenuItemTag } from '~/components/MenuItemTag.tsx';
import { BookmarkHeart } from '~/icons/counterIcons/BookmarkHeart.tsx';

type Props = {
    img: string;
    altImg: string;
    title: string;
    text: string;
    iconCounters: IconCounterProps[];
    tagIcon: ComponentWithAs<'svg', IconProps>;
    tagTitle: string;
    bgColorTag: string;
};
export const HorizontalCard = ({
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
        direction='row'
        overflow='hidden'
        flex={{
            base: '0 0 100%',
            md: '0 0 calc(50% - 8px)',
            xl: '0 0 100%',
            '2xl': '0 0 calc(50% - 12px)',
        }}
        minW={0}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Box h={{ base: '128px', xl: '230px' }} overflow='hidden'>
            <Image
                src={img}
                alt={altImg}
                p={0}
                h='100%'
                objectFit='cover'
                w={{ base: '158px', xl: '346px' }}
            />
        </Box>
        <CardBody p={{ base: '8px 8px 4px 8px', xl: '12px', '2xl': '16px 24px 20px 24px' }}>
            <Stack spacing={{ base: 2, xl: 6 }}>
                <Flex justify='space-between'>
                    <MenuItemTag icon={tagIcon} title={tagTitle} bgColor={bgColorTag} />
                    <Flex gap='8px'>
                        {!!iconCounters.length &&
                            iconCounters.map((i, index) => <IconCounter key={index} {...i} />)}
                    </Flex>
                </Flex>
                <CardTitleAndText title={title} text={text} />
                <Flex justify='flex-end' gap={{ base: '12px', xl: '8px' }}>
                    <Button
                        colorScheme='black'
                        size={{ base: 'xs', xl: 'sm' }}
                        sx={{
                            '& span': {
                                marginRight: { base: 0, xl: 2 }, // Убираем отступ у иконки
                            },
                        }}
                        variant='outline'
                        leftIcon={<BookmarkHeart />}
                    >
                        <Show above='xl'>Сохранить</Show>
                    </Button>
                    <Button
                        bg='black'
                        _hover={{ bg: 'black' }}
                        color='white'
                        size={{ base: 'xs', xl: 'sm' }}
                    >
                        Готовить
                    </Button>
                </Flex>
            </Stack>
        </CardBody>
    </Card>
);
