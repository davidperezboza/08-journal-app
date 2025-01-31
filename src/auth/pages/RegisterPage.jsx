import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/';
import { useForm } from '../../hooks/useForm';

const formData = {
  email: 'fernando@google.com',
  password: '12456',
  name: 'Fernando Herrera',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo de tener una @.'],
  password: [(value) => value.length >= 6, 'El password debe tener más de seis letras.'],
  name: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
};

export const RegisterPage = () => {
  const {
    formState, name, email, password, onInputChange, 
    isFormValid, nameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title='Registro'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label='Nombre' 
              type='text' 
              placeholder='Nombre'
              name='name'
              value={name}
              onChange={onInputChange}
              fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label='Correo' 
              type='email' 
              name='email'
              value={email}
              onChange={onInputChange}
              placeholder='correo@google.com'
              fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label='Contraseña' 
              type='password' 
              name='password'
              value={password}
              onChange={onInputChange}
              placeholder='Contraseña'
              fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}> 
            <Button variant='contained' fullWidth type='submit'>
              Crear cuenta
            </Button>
          </Grid>
          
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr: 1}}>¿Ya tiene cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
