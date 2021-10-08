import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utilitis/data';
import Layout from '../../components/Layout'
import NextLink from 'next/link'
import { Grid, Link, List, ListItem,Typography, Rating, Card,Button } from '@mui/material';
import useStyles from '../../utilitis/styles';
import Image from 'next/image'
export default function ProductScreen() {
    const classes = useStyles();
    const router = useRouter();
    const {slug} = router.query;
    const product = data.products.find((a) => a.slug === slug);
    if(!product){
        return <div> Product Not Found</div>
    }
    return (
        <Layout title={product.name} description={product.description}>
         <div className={classes.section}>
             <NextLink href="/" passHref>
                <Link>Back To Product</Link>
             </NextLink>
         </div>
         <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
                <Image
                src={product.image}
                alt={product.naem}
                width="640px"
                height="640px"
                layout="responsive"
                />
            </Grid>
            <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h5" variant="h5">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Rating value={product.rating} readOnly></Rating>
              <Link href="#reviews">
                <Typography>({product.numReviews} reviews)</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Typography> Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
            <Card>
                <List>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={6}> <Typography>Price </Typography></Grid>
                            <Grid item> <Typography>$ {product.price}</Typography></Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={6}> <Typography>Status </Typography></Grid>
                            <Grid item> <Typography> {product.countInStock>0? 'in stuck': 'unavailable'}</Typography></Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Button fullWidth variant="contained" color="primary">Add To Cart</Button>
                    </ListItem>
                </List>
            </Card>
        </Grid>
         </Grid>
        </Layout>
    );
}
