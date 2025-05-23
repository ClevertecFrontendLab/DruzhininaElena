import { Box, FormControl } from '@chakra-ui/icons';
import { FormLabel, Switch } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

import { CustomMultiSelect } from '~/common/components/customMultiSelect/CustomMultiSelect.tsx';
import {
    addDrawerCustomAllergen,
    addPageCustomAllergen,
    toggleDrawerAllergenFilter,
    toggleDrawerExcludedAllergen,
    togglePageAllergenFilter,
    togglePageExcludedAllergen,
} from '~/model/filterSlice.ts';
import { selectFilters } from '~/model/selectors.ts';
import { useAppDispatch, useAppSelector } from '~/store/hooks.ts';

type Props = {
    flexGrow?: number;
    flexShrink?: number;
    selectWidth: string;
    switchId: string;
    type: 'page' | 'drawer';
};

export const AllergensFilter = ({
    flexGrow = 1,
    flexShrink = 0,
    selectWidth,
    switchId,
    type,
}: Props) => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(selectFilters);

    const allergenFilter =
        type === 'page' ? filter.pageAllergenFilter : filter.drawerAllergenFilter;

    const options = [
        'Молочные продукты',
        'Яйцо',
        'Рыба',
        'Моллюски',
        'Орехи',
        'Томат',
        'Цитрусовые',
        'Клубника',
        'Шоколад',
    ];

    const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.currentTarget.checked;
        if (type === 'page') {
            dispatch(togglePageAllergenFilter(isChecked));
        } else {
            dispatch(toggleDrawerAllergenFilter(isChecked));
        }
    };

    const setExcludedAllergens = (allergen: string) => {
        if (type === 'page') {
            dispatch(togglePageExcludedAllergen(allergen));
        } else {
            dispatch(toggleDrawerExcludedAllergen(allergen));
        }
    };

    const addCustomAllergen = (allergen: string) => {
        if (type === 'page') {
            dispatch(addPageCustomAllergen(allergen));
        } else {
            dispatch(addDrawerCustomAllergen(allergen));
        }
    };

    return (
        <>
            <FormControl display='flex' alignItems='center' flexGrow={flexGrow} mt={2} gap={0}>
                <FormLabel htmlFor={switchId} mb='0' fontWeight={500}>
                    Исключить мои аллергены
                </FormLabel>
                <Switch
                    data-test-id={
                        type === 'drawer' ? 'allergens-switcher-filter' : 'allergens-switcher'
                    }
                    id={switchId}
                    isChecked={allergenFilter.isActive}
                    onChange={handleToggle}
                />
            </FormControl>
            <Box flexShrink={flexShrink} pos='relative'>
                <Box w={selectWidth}>
                    <CustomMultiSelect
                        options={options}
                        placeholder='Выберите из списка'
                        isActive={allergenFilter.isActive}
                        isAllergenFilter={true}
                        allergenFilterType={type}
                        toggleItem={setExcludedAllergens}
                        addCustomItem={addCustomAllergen}
                        selectedItems={allergenFilter.excludedAllergens}
                    />
                </Box>
            </Box>
        </>
    );
};
