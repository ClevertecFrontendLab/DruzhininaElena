import { Grid } from '@chakra-ui/icons';

import { footerItems } from '~/data/footerItemsData.tsx';
import { FooterItem } from '~/layout/footer/FooterItem.tsx';

export const Footer = () => (
    <Grid
        as='footer'
        bg='lime.50'
        h='84px'
        gridTemplateColumns='1fr 1fr 1fr 1fr'
        alignItems='center'
        justifyItems='center'
        data-test-id='footer'
        pos='fixed'
        bottom={0}
        left={0}
        right={0}
        zIndex={5}
        display={{ base: 'flex', xl: 'none' }}
    >
        {footerItems.map((item) => (
            <FooterItem key={item.id} text={item.text} isActive={item.isActive}>
                {item.icon}
            </FooterItem>
        ))}
    </Grid>
);
