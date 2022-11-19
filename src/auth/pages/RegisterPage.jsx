import { Alert, Button, Grid, Link, TextField } from '@mui/material'
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink} from 'react-router-dom'
import { useForm } from '../../hooks';
import { startCreateUserWithEmailAndPassword } from '../../store/auth/thunks';
import { AuthLayout } from '../layout/AuthLayout'

const formData = {
  email: '',
  password: '',
  displayName:''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'email must have included a @'],
  password: [(value) => value.length >= 6, 'password must be greater than 6'],
  displayName: [(value)=> value.length >= 1, 'user name is required ']
}

export const RegisterPage = () => {
  
  const dispatch = useDispatch();

  const [formSubmitted, setformSubmitted] = useState(false)

  const { status, errorMessage } = useSelector(state => state.auth);

  const isCheckingAuthentication = useMemo( ()=> status === 'checking', [status]);

  const {
    displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid

  } = useForm(formData, formValidations);

  const onSubmit = (event) => { 
    event.preventDefault();
    setformSubmitted(true);

    if (!isFormValid) return;
    dispatch(startCreateUserWithEmailAndPassword(formState))
  }

  return (
    <AuthLayout title='Register'>
      <h1>Form Valid: { isFormValid? 'Yes' : ' No'}</h1>
        <form onSubmit={ onSubmit }>
        <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Full Name'
                type='text'
                placeholder='Full Name'
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
                error ={displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='mail'
                type='email'
                placeholder='example@google.com'
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                error ={emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='password'
                type='password'
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                error ={passwordValid && formSubmitted}
                helperText={ passwordValid }
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:4}}>
            <Grid item xs={12} sx={{ padding: 1 }} display={ !!errorMessage?'':'none'}>
                  <Alert severity='error'>{errorMessage}</Alert>
                </Grid>
              <Grid item xs={12}  sx={{padding:1}}>
              <Button variant='contained' fullWidth type='submit' disabled={ !isFormValid || isCheckingAuthentication}>
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
