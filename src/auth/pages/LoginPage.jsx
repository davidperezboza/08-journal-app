import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google} from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/';
import { useForm } from '../../hooks';
import { startLoginWithEmailPassword, startGoogleSignIn } from '../../store/auth/';

const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {
  const {status, errorMessage} = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const {email, password, onInputChange} = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({email, password}));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}
            className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label='Correo' 
              type='email' 
              placeholder='correo@google.com'
              name='email'
              onChange={onInputChange}
              value={email}
              fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label='Contraseña' 
              type='password' 
              name='password'
              onChange={onInputChange}
              value={password}
              placeholder='Contraseña'
              fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item 
                xs={12} 
                display={!!errorMessage ? '' : 'none'}> 
            <Alert severity='error'>
              {errorMessage}
            </Alert>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Button type='submit' 
                    variant='contained' 
                    fullWidth
                    disabled={isAuthenticating}>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Button variant='contained' 
                    onClick={onGoogleSignIn}
                    fullWidth
                    disabled={isAuthenticating}>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
          
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
