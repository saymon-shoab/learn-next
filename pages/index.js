
import {
   Button,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   Grid,
   Typography,
   } from "@mui/material";
import NextLink from 'next/link'  
import Layout from "../components/Layout";
import data from './../utilitis/data'
export default function Home() {
  return (
    <>
    <Layout>
      <div>
      <h1>product</h1>
         <Grid container spacing={3}>
           {
             data.products.map((product)=> (
                <Grid item sm={1} md={4} key={product.name}>
                  <Card>
                    <NextLink href={`/product/${product.slug}`} passHref>
                    <CardActionArea>
                      <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                      ></CardMedia>
                      <CardContent>
                        <Typography>
                          {product.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    </NextLink>
                    <CardActions>
                      <Typography>
                        ${product.price}
                      </Typography>
                      <Button size="small" color="primary">Add To Cart</Button>
                    </CardActions>
                  </Card>
                </Grid>
             ))}
         </Grid>
      </div>
    
    </Layout>
   </>
  )
}
