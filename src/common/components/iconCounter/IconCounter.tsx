import { Icon } from '@chakra-ui/icons';
import { ComponentWithAs, HStack, IconProps, Text } from '@chakra-ui/react';

export type IconCounterProps = {
    count: number;
    icon: ComponentWithAs<'svg', IconProps>;
    spacing: string | { [key: string]: string };
    padding: string | { [key: string]: string };
    fontSize?: string | { [key: string]: string };
    boxSize?: string | { [key: string]: string };
};
export const IconCounter = ({
    count,
    icon,
    spacing,
    padding,
    fontSize = 'xs',
    boxSize,
}: IconCounterProps) => (
    <HStack spacing={spacing} p={padding}>
        <Icon as={icon} boxSize={boxSize} />
        <Text as='span' color='lime.600' fontWeight={600} fontSize={fontSize}>
            {count}
        </Text>
    </HStack>
);
