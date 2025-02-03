import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/';
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEamilPassword } from '../../store/auth';


const formData = {
  email: '',
  password: '',
  name: '',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo de tener una @.'],
  password: [(value) => value.length >= 6, 'El password debe tener más de seis letras.'],
  name: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmited, setFormSubmited] = useState(false);
  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const {
    formState, name, email, password, onInputChange, 
    isFormValid, nameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if(!isFormValid) return;
    dispatch(startCreatingUserWithEamilPassword(formState));
  };

  return (
    <AuthLayout title='Crear cuenta'>
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
              error={!!nameValid && formSubmited}
              helperText={nameValid}
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
              error={!!emailValid && formSubmited}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
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
          <Grid item xs={12}> 
            <Button variant='contained' 
                    fullWidth 
                    type='submit'
                    disabled={isCheckingAuthentication}>
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
