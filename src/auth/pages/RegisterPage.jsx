import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/';
import { useForm } from '../../hooks/useForm';

const formData = {
  email: 'fernando@google.com',
  password: '12456',
  name: 'Fernando Herrera',
};

export const RegisterPage = () => {
  const {name, email, password, onInputChange, formState} = useForm(formData);

  return (
    <AuthLayout title='Registro'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label='Nombre' 
              type='text' 
              placeholder='Nombre'
              name='name'
              value={name}
              onChange={onInputChange}
              fullWidth 
              error = {false}
              helperText={null}/>
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
            <Button variant='contained' fullWidth>
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
