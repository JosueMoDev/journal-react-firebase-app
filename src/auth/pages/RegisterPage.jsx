import { Button, Grid, Link, TextField } from '@mui/material'
import { Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
        <form>
        <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Full Name'
                type='text'
                placeholder='Jonas Morales'
                fullWidth
              />
            </Grid>
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
              <Grid item xs={12}  sx={{padding:1}}>
                <Button variant='contained' fullWidth>
                  Create Acount
                </Button>
              </Grid>

            </Grid>
            <Grid container direction='row' justifyContent='end'>
              Have you alredy had an account ? 
              <Link component={RouterLink} color='inherit' to='/auth/login'>
              Go
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
