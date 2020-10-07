import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'animate.css'

const Layout = ({ location, children }) => {
    return (
        <React.Fragment>
            {/* <GlobalStyle/> */}
            <Helmet
                title="Rafał Kiszło - Trener personalny Mokotów"
                meta={[
                    {
                        name: 'description',
                        content:
                            'Zapraszam na wspólne treningi na Mokotowie - Trener personalny Rafał Kiszło',
                    },
                    { name: 'keywords', content: 'Rafał Kiszło, strona www' },
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1',
                    },
                ]}
            >
                <html lang="pl" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;900&display=swap"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
                {location && location.pathname != '/404'}
            </ThemeProvider>
        </React.Fragment>
    );
};
Layout.propTypes = {
    children: PropTypes.node,
    location: PropTypes.node,
};

export default Layout;
