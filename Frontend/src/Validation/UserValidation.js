import * as yup from 'yup';

// register validation
const registerValidation = yup.object().shape({
  email: yup.string().email().required('Email is required').trim(),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters')
    .matches(/(?=.*[0-9])/, 'Password must be contain a number'),
  fullName: yup
    .string()
    .required('Full name is required')
    .max(20, 'full name must be at most 20 characters')
    .matches(/^[a-zA-Z]*$/, 'Full name must contain only letter '),
});

const loginValidation = yup.object().shape({
  email: yup.string().email().required('Email is required').trim(),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be less than 20 characters')
    .matches(/(?=.*[0-9])/, 'Password must contain a number'),
});

export { registerValidation, loginValidation };
