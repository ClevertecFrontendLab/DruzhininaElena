import { Icon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/react';
import { JSX } from 'react';

export type IconCounterProps = {
    count: number;
    icon: () => JSX.Element;
    spacing: string;
    padding: string;
};
export const IconCounter = ({ count, icon, spacing, padding }: IconCounterProps) => (
    <HStack spacing={spacing} p={padding}>
        <Icon as={icon} />
        <Text as='span' color='lime.600' fontWeight={600} fontSize={14}>
            {count}
        </Text>
    </HStack>
);
