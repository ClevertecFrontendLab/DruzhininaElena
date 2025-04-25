import { Box } from '@chakra-ui/icons';
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import { CategoryPage, HomePage, RecipesPage, TheJuciestPage } from '~/pages';

export const Main = () => (
    <Box as='main'>
        <Container
            maxW={{
                base: '100%',
            }}
            mx='auto'
            px={{
                base: '16px',
                md: '20px',
                xl: '273px',
            }}
            mt={{ base: '64px', xl: '80px' }}
            pb={{ base: '68px', xl: 0 }}
        >
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path=':category' element={<CategoryPage />}>
                    <Route path=':subcategory' element={<CategoryPage />} />
                </Route>
                <Route path=':category/:subcategory/:id' element={<RecipesPage />} />
                <Route path='the-juiciest' element={<TheJuciestPage />} />
            </Routes>
        </Container>
    </Box>
);
