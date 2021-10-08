import React, { children  } from 'react';
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography,Link } from '@mui/material';
import useStyles from '../utilitis/styles';
import NextLink from 'Next/link'
const Layout = ({children }) => {

    const classes = useStyles();

    return (
        <div>
            <Head>
               <title>next amazona</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
              <Toolbar>
              <NextLink href="/" passHref>
                  <Link><Typography className={classes.brand}> amazona</Typography></Link>
              </NextLink>
              <div className={classes.grow}></div>
              <div>
              <NextLink href="/cart" passHref>
                  <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                  <Link>Login</Link>
              </NextLink>
              </div>
              </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer  className={classes.footer}>
                <Typography>
                all right resurved next amazona
                </Typography>
            </footer>
        </div>
    );
};

export default Layout;