import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google} from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/';

export const LoginPage = () => {
  const dispatch = useDispatch()
  const {email, password, onInputChange} = useForm({
    email: 'fernando@google.com',
    password: '12456',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
    console.log({email, password});
  };

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
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
          <Grid item xs={12} sm={6}> 
            <Button type='submit' 
                    variant='contained' 
                    fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Button variant='contained' 
                    onClick={onGoogleSignIn}
                    fullWidth>
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
