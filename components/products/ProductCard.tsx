import { IProduct } from '@/interfaces'
import { Grid, Card, CardActionArea, CardMedia, Box, Typography } from '@mui/material'
import { FC, PropsWithChildren, useMemo, useState } from 'react'

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({product}) => {
    const [isHovered, setIsHovered] = useState(false);
    //TODO: Se podria quitar el useMemo y solo poner una sola imagen
    const productImage = useMemo(() => {
        return isHovered 
        ? `products/${product.images[1]}`
        : `products/${product.images[0]}`
    }, [isHovered, product.images])
    //

  return (
    <Grid 
        item xs={6} 
        sm={4}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <Card>
          <CardActionArea>
            <CardMedia
              component='img'
              //TODO: Cambiar el product image por el path de la imagen para usar una sola imagen
              image={productImage}
              //
              alt={product.title}
            />
          </CardActionArea>
        </Card>

        <Box sx={{mt: 1}} className='fadeIn'>
            <Typography fontWeight={700}>${product.title}</Typography>
            <Typography fontWeight={500}>${product.price}</Typography>
        </Box>
    </Grid>
  )
}
