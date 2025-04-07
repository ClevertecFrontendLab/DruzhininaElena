import { Heading } from '@chakra-ui/react';

type Props = {
    title: string;
};
export const SectionTitle = ({ title }: Props) => (
    <Heading as='h2' fontWeight={500} fontSize={{ base: '2xl', xl: '4xl', '2xl': '5xl' }}>
        {title}
    </Heading>
);
