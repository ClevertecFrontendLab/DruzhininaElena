import { Show } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react';

import { Footer } from '~/layout/footer/Footer.tsx';
import { Header } from '~/layout/Header.tsx';
import { Main } from '~/layout/Main.tsx';
import { NavMenu } from '~/layout/NavMenu.tsx';
import { SideBar } from '~/layout/SideBar.tsx';

import { theme } from '../styles/theme.ts';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Main />
            <Show above='xl'>
                <NavMenu />
                <SideBar />
            </Show>
            <Show below='xl'>
                <Footer />
            </Show>
        </ChakraProvider>
    );
}

export default App;
