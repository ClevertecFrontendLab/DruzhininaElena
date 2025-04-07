import { FormControl, Icon, Input, Select, Show } from '@chakra-ui/icons';
import {
    Flex,
    FormLabel,
    Heading,
    IconButton,
    InputGroup,
    InputRightElement,
    Switch,
    Text,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Filter } from '~/icons/Filter.tsx';
import { Search } from '~/icons/Search.tsx';

type Props = {
    title: string;
    children?: ReactNode;
};
export const PageHeaderWithSearch = ({ title, children }: Props) => (
    <Flex direction='column' align='center' pt={{ base: 4, xl: 8 }} mb={{ base: 8, xl: 14 }}>
        <Heading as='h1' fontSize={{ base: '2xl', xl: '5xl' }}>
            {title}
        </Heading>
        {children && (
            <Text
                textAlign='center'
                color='blackAlpha.600'
                lineHeight={1.5}
                fontSize={{ base: 'sm', xl: 'md' }}
                mt={{ base: 4, xl: 3 }}
                maxW={{ base: '100%', xl: '696px' }}
            >
                {children}
            </Text>
        )}
        <Flex
            gap={3}
            width={{ base: '100%', md: 'auto' }}
            mt={{ base: 4, xl: 8 }}
            mb={{ base: 0, xl: 8 }}
        >
            <IconButton
                _hover={{ background: 'none' }}
                aria-label='Filter'
                variant='outline'
                icon={<Filter size={{ base: 'sm', xl: 'lg' }} />}
                size={{ base: 'sm', xl: 'lg' }}
                w={{ base: '2rem', xl: '4rem' }}
            />
            <InputGroup flex='1' w={{ md: '404px', xl: '458px' }} alignItems='center'>
                <Input
                    placeholder='Название или ингредиент...'
                    _placeholder={{ color: 'lime.800' }}
                    width='100%'
                    size={{ base: 'sm', xl: 'lg' }}
                />
                <InputRightElement
                    cursor='pointer'
                    w={{ base: '32px', xl: '48px' }}
                    h={{ base: '32px', xl: '48px' }}
                >
                    <Icon as={Search} boxSize={{ base: '14px', xl: '18px' }} />
                </InputRightElement>
            </InputGroup>
        </Flex>
        <Show above='xl'>
            <Flex minW='518px' gap='16px'>
                <FormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='removeAllergens' mb='0' fontWeight={500}>
                        Исключить мои аллергены
                    </FormLabel>
                    <Switch id='removeAllergens' colorScheme='gray' />
                </FormControl>
                <Select placeholder='Выберите из списка...' size='md' />
            </Flex>
        </Show>
    </Flex>
);
