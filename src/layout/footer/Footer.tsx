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
    >
        {footerItems.map((item) => (
            <FooterItem key={item.id} text={item.text} isActive={item.isActive}>
                {item.icon}
            </FooterItem>
        ))}
    </Grid>
);
