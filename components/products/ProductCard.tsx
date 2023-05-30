import { IProduct } from '@/interfaces'
import { Grid, Card, CardActionArea, CardMedia } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({product}) => {
  return (
    <Grid item xs={6} sm={4} key={product.slug}>
        <Card>
          <CardActionArea>
            <CardMedia
              component='img'
              image={`products/${product.images[0]}`}
              alt={product.title}
            >
            </CardMedia>
          </CardActionArea>
        </Card>
    </Grid>
  )
}
