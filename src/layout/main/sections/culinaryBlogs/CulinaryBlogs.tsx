import { Box } from '@chakra-ui/icons';
import { Button, Flex, Heading } from '@chakra-ui/react';

import { culinaryBlogsData } from '~/data/homePage/culinaryBlogsData.ts';
import { ArrowRight } from '~/icons/ArrowRight.tsx';
import { CulinaryBlogItem } from '~/layout/main/sections/culinaryBlogs/CulinaryBlogItem.tsx';

export const CulinaryBlogs = () => (
    <Box
        pos='relative'
        as='article'
        bg='lime.300'
        p={{ base: '12px 12px 64px 12px', xl: 6 }}
        borderRadius={16}
    >
        <Flex justify='space-between' mb={{ base: 3, xl: 4, '2xl': 6 }}>
            <Heading as='h2' fontSize='4xl' fontWeight={400}>
                Кулинарные блоги
            </Heading>
            <Button
                size={{ base: 'md', '2xl': 'lg' }}
                rightIcon={<ArrowRight boxSize='16px' color='black' />}
                bg='lime.300'
                _hover={{ bg: 'lime.50' }}
                pos={{ base: 'absolute', xl: 'static' }}
                zIndex={1}
                bottom={{ base: '12px', xl: 'auto' }}
                left={{ base: '50%', xl: 'auto' }}
                transform={{ base: 'translate(-50%)', xl: 'none' }}
            >
                Все авторы
            </Button>
        </Flex>
        <Flex gap={{ base: 3, xl: 4 }} direction={{ base: 'column', md: 'row' }}>
            {culinaryBlogsData.map((u) => (
                <CulinaryBlogItem key={u.id} {...u} />
            ))}
        </Flex>
    </Box>
);
