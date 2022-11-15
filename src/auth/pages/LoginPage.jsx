import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
       <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='mail'
                type='email'
                placeholder='example@google.com'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='password'
                type='password'
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:4}}>
              <Grid item xs={12} sm={6} sx={{padding:1}}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} sx={{padding:1}}>
                <Button variant='contained' fullWidth>
                  <Google sx={{mx:1}} />
                  Google
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Create a new acount 
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
