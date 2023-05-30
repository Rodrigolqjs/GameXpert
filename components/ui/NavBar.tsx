import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge } from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export const NavBar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref legacyBehavior>
                <Link display='flex' alignItems='center'>
                    <Typography variant="h6">GameXpert |</Typography>
                    <Typography sx={{ml: 0.5}}>Shop</Typography>
                </Link>
            </NextLink>
            <Box flex='1' />
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                <NextLink href='/category/men' passHref legacyBehavior>
                    <Link>
                        <Button>Computadoras</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/women' passHref legacyBehavior>
                    <Link>
                        <Button>Laptops</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/children' passHref legacyBehavior>
                    <Link>
                        <Button>Sobre Nosotros</Button>
                    </Link>
                </NextLink>
            </Box>
            <Box flex='1' />
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <NextLink href='/cart' passHref legacyBehavior>
                <Link>
                    <IconButton>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>
            <Button>
                Menú
            </Button>
        </Toolbar>
    </AppBar>
  )
}
