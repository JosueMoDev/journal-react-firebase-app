import { useDispatch } from 'react-redux'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {
  
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'jonasjosue@gmail.com',
    password: '123456'
  });
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch( checkingAuthentication())
  }

  const onGoogleSignIn = () => { 
    console.log('Google Sign In');
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
       <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
              label='mail'
              type='email'
              placeholder='example@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
              label='password'
              type='password'
              fullWidth
              name='password'
              value={password}
              onChange={ onInputChange }
                
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:4}}>
              <Grid item xs={12} sm={6} sx={{padding:1}}>
                <Button type='submit' variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} sx={{padding:1}}>
                <Button variant='contained' fullWidth onClick={onGoogleSignIn} >
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
