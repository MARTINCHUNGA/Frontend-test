
import React,{useState} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import * as Yup from 'yup'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, ErrorMessage, Field } from 'formik'
import Axions from 'axion'


const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const btnstyle = { margin: '8px 0' }

    const initialValues = {
        name: '',
        email: '',
       // gender: '',
        phoneNumber: '',
        password : '',
        confirmPassword: ''
    }

    const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    const validationSchema = Yup.object().shape({
        name : Yup.string().required(),
        email : Yup.string().email('Enter valid email').required('Required'),
       // gender : Yup.string().required('Required'),
        phoneNumber : Yup.string().required("Required").min(10,"Phone # should contain 10 digits").max(10,"Phone # should contain 10 digits"),
        password: Yup.string().matches(PASSWORD_REGEX,'Password must contain atleast a digit and special character').required(),
        confirmPassword: Yup.string().when('password', {
            is: val => ( val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref('password')],'Password does not match')
        })
    })
    
    
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }

    const url = ''
    const [data, setData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password : '',
        confirmPassword: ''
    })


    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues}  onSubmit={onSubmit} validationSchema={validationSchema}>
                {(props) => (
                    <Form>
                        <Field as={TextField} label='Name' name="name" value={formik}
                                placeholder='Enter your Name' fullWidth required
                                helperText={<ErrorMessage name="name" />}
                         />
                         <Field as={TextField} label='Email' name="email"
                                placeholder='Enter your Email' fullWidth required
                                helperText={<ErrorMessage name="email" />}
                         />

                   {/* // <TextField fullWidth label='Name' placeholder="Enter your name" />
                    //<TextField fullWidth label='Email' placeholder="Enter your email" /> */}
                    {/* <FormControl  component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl> */}
                    <Field as={TextField} label='Phone Number' name="phoneNumber"
                                placeholder='Enter Phone Number' fullWidth required
                                helperText={<ErrorMessage name="phoneNumber" />}
                    />
                    <Field as={TextField} label='Password' name="password"
                                placeholder='Enter Password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />}
                    />
                    <Field as={TextField} label='Confirm Password' name="confirmPassword"
                                placeholder='Confirm Password' type='password' fullWidth required
                                helperText={<ErrorMessage name="confirmPassword" />}
                    />
                    {/* <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/> */}
{/*                 
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    /> */}
                     <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign Up"}</Button>
                    {/* <Button type='submit' variant='contained' color='primary'>Sign up</Button> */}
                </Form>
                )}    
                
                </Formik>
                
            </Paper>
        </Grid>
    )
}

export default Signup;