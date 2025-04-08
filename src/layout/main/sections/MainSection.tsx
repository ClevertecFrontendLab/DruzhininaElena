import { Box } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { HorizontalCard } from '~/components/cards/HorizontalCard.tsx';
import { MainSectionData } from '~/data/homePage/theJuciestCardsData.ts';
import { ArrowRight } from '~/icons/ArrowRight.tsx';

type Props = {
    mainSectionData: MainSectionData[];
    children?: ReactNode;
    buttonTitle: string;
    sizeButton: string;
    displayButton: string | { base: string; xl: string };
    showRightIcon?: boolean;
    onClick: () => void;
    dataTestId?: string | undefined;
};

export const MainSection = ({
    mainSectionData,
    buttonTitle,
    sizeButton,
    displayButton,
    showRightIcon = false,
    onClick,
    dataTestId = undefined,
}: Props) => (
    <Box as='section'>
        <Flex
            gap={{ base: 3, md: 4, '2xl': 6 }}
            wrap='wrap'
            direction={{ base: 'column', md: 'row' }}
        >
            {mainSectionData.map((el) => (
                <HorizontalCard key={el.id} {...el} />
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
