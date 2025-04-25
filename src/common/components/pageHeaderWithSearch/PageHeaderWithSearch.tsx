import { Icon, Input, Show } from '@chakra-ui/icons';
import {
    Button,
    Flex,
    Heading,
    IconButton,
    InputGroup,
    InputRightElement,
    Text,
} from '@chakra-ui/react';
import { ChangeEvent, KeyboardEvent, ReactNode, useCallback, useState } from 'react';

import { AllergensFilter } from '~/common/components/allergensFilter/AllergensFilter.tsx';
import { Filter } from '~/components/Filter.tsx';
import { FilterIcon } from '~/icons/otherIcons/FilterIcon.tsx';
import { Search } from '~/icons/otherIcons/Search.tsx';
import { resetFilters, setSearchQuery, toggleSearchModeOnPage } from '~/model/filterSlice.ts';
import { selectFilters } from '~/model/selectors.ts';
import { useAppDispatch, useAppSelector } from '~/store/hooks.ts';

type Props = {
    title: string;
    children?: ReactNode;
};
export const PageHeaderWithSearch = ({ title, children }: Props) => {
    const filter = useAppSelector(selectFilters);
    const dispatch = useAppDispatch();

    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
    const [isInvalidQuery, setIsInvalidQuery] = useState<boolean>(false);

    const closeFilterMenuHandler = useCallback(() => {
        setOpenFilter(false);
        document.body.style.overflow = 'unset';
    }, []);
    const openFilterMenuHandler = useCallback(() => {
        setOpenFilter((prev) => {
            if (prev) return prev;
            return true;
        });
        dispatch(resetFilters());
    }, [dispatch]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsInvalidQuery(false);
        dispatch(setSearchQuery(e.currentTarget.value.toLowerCase().trim()));
    };

    const searchHandler = () => {
        if (filter.searchQuery.length >= 3) {
            dispatch(toggleSearchModeOnPage(true));
        } else {
            setIsInvalidQuery(true);
        }
    };

    const searchOnEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') searchHandler();
    };

    const hasValue = filter.searchQuery.length > 0;
    const isSearchDisabled = filter.searchQuery.length < 3;
    const shouldShowShadow =
        (isInputFocused || filter.pageAllergenFilter.isActive || hasValue) &&
        !filter.isSearchModeOnPage;

    return (
        <Flex
            maxW={{ base: '360px', md: '480px', lg: '578px', '2xl': '898px' }}
            borderRadius={{ base: '0 0 8px 8px', '2xl': '24px' }}
            direction='column'
            align='center'
            pt={{ base: 4, xl: 8 }}
            pb={{ base: 4, lg: 8 }}
            px={4}
            mb={{ base: 4, xl: 6 }}
            mx={{ base: '-16px', sm: 'auto' }}
            boxShadow={
                shouldShowShadow
                    ? '0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    : 'none'
            }
        >
            <Heading as='h1' fontSize={{ base: '2xl', xl: '5xl' }} textAlign='center'>
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
                mb={{ base: 0, xl: 4 }}
            >
                <IconButton
                    data-test-id='filter-button'
                    aria-label='Filter'
                    variant='outline'
                    icon={<FilterIcon boxSize={{ base: '14px', xl: '24px' }} />}
                    boxSize={{ base: '32px', xl: '48px' }}
                    border='1px solid rgba(0, 0, 0, 0.48)'
                    onClick={openFilterMenuHandler}
                />
                <InputGroup flex='1' w={{ md: '404px', xl: '458px' }} alignItems='center'>
                    <Input
                        placeholder='Название или ингредиент...'
                        width='100%'
                        size={{ base: 'sm', xl: 'lg' }}
                        border='1px solid rgba(0, 0, 0, 0.48)'
                        value={filter.searchQuery}
                        onChange={onChangeHandler}
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                        _focus={{
                            borderColor: isInvalidQuery ? 'red.500' : 'lime.600',
                            boxShadow: 'none',
                        }}
                        onKeyDown={searchOnEnterHandler}
                        isInvalid={isInvalidQuery}
                        data-test-id='search-input'
                    />
                    <InputRightElement
                        aria-label='search'
                        as={Button}
                        bg='transparent'
                        _hover={{ bg: 'transparent' }}
                        isDisabled={isSearchDisabled}
                        cursor={isSearchDisabled ? 'not-allowed' : 'pointer'}
                        pointerEvents={isSearchDisabled ? 'none' : 'auto'}
                        opacity={isSearchDisabled ? 0.5 : 1}
                        w={{ base: '32px', xl: '48px' }}
                        h={{ base: '32px', xl: '48px' }}
                        onClick={searchHandler}
                        data-test-id='search-button'
                    >
                        <Icon
                            as={Search}
                            boxSize={{ base: '14px', xl: '18px' }}
                            color={isSearchDisabled ? 'gray.400' : 'current'}
                        />
                    </InputRightElement>
                </InputGroup>
            </Flex>
            <Show above='xl'>
                <Flex minW='518px' gap={4} alignItems='flex-start'>
                    <AllergensFilter
                        selectWidth='269px'
                        switchId='eliminateAllergens_1'
                        type='page'
                    />
                </Flex>
            </Show>
            <Filter open={openFilter} handleClose={closeFilterMenuHandler} />
        </Flex>
    );
};
