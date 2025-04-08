import { Spacer } from '@chakra-ui/icons';
import { Button, HStack } from '@chakra-ui/react';

import { SectionTitle } from '~/components/SectionTitle.tsx';
import { ArrowRight } from '~/icons/ArrowRight.tsx';

type Props = {
    onClick: () => void;
};

export const TitleSectionWithButton = ({ onClick }: Props) => (
    <HStack align='center' mb={{ base: '0.75rem', lg: '1.5rem' }}>
        <SectionTitle title='Самое сочное ' />
        <Spacer />
        <Button
            size={{ base: 'md', '2xl': 'lg' }}
            rightIcon={<ArrowRight boxSize='16px' color='black' />}
            bg='lime.300'
            _hover={{ bg: 'lime.50' }}
            data-test-id='juiciest-link'
            display={{ base: 'none', xl: 'block' }}
            onClick={onClick}
        >
            Вся подборка
        </Button>
    </HStack>
);
