import { Box } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';

import { MainCard } from '~/common/components/mainSection/mainCard/MainCard.tsx';
import { Recipe } from '~/common/types/types.ts';
import { ArrowRight } from '~/icons/otherIcons/ArrowRight.tsx';

type Props = {
    buttonTitle: string;
    sizeButton: string;
    displayButton: string | { base: string; xl: string };
    showRightIcon?: boolean;
    onClick: () => void;
    dataTestId?: string | undefined;
    recipes: Recipe[];
};

export const MainSection = ({
    buttonTitle,
    sizeButton,
    displayButton,
    showRightIcon = false,
    onClick,
    dataTestId = undefined,
    recipes,
}: Props) => (
    <Box as='section'>
        <Flex
            data-test-id='filters-applied'
            gap={{ base: 3, md: 4, '2xl': 6 }}
            wrap='wrap'
            direction={{ base: 'column', md: 'row' }}
        >
            {recipes.map((el, i) => (
                <MainCard key={el.id} {...el} index={i} />
            ))}
        </Flex>
        <Button
            m='12px auto 0'
            size={sizeButton}
            rightIcon={showRightIcon ? <ArrowRight boxSize='16px' color='black' /> : undefined}
            bg='lime.300'
            _hover={{ bg: 'lime.50' }}
            data-test-id={dataTestId}
            display={displayButton}
            onClick={onClick}
        >
            {buttonTitle}
        </Button>
    </Box>
);
