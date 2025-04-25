import { Show } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react';

import { ScrollToTop } from '~/common/components/scrollToTop/ScrollToTop.tsx';
import { theme } from '~/common/styles/theme.ts';
import { Footer } from '~/layout/footer/Footer.tsx';
import { Header } from '~/layout/header/Header.tsx';
import { Main } from '~/layout/main/Main.tsx';
import { NavMenu } from '~/layout/navMenu/NavMenu.tsx';
import { SideBar } from '~/layout/sideBar/SideBar.tsx';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <ScrollToTop />
            <Header />
            <Main />
            <Show above='xl'>
                <NavMenu />
                <SideBar />
            </Show>
            <Footer />
        </ChakraProvider>
    );
}

export default App;
