import React from "react";
import { Formik, useField, Form } from "formik";
import * as yup from 'yup'



const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()] and this will spread
    // on <input>. we can use field meta to show an error message if the field is invalid and it has
    // been touched i.e visited

    const [field, meta] = useField(props);
    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props}/>
        {meta.touched && meta.error ? (
            <div className="error"> { meta.error }</div>
        ) : null }
        </>
    )
}


const Registration = () => {

    return (
        <>
        <div className="MaterialForm">
        <h1> Registration </h1>
        <Formik 
        initialValues = {{
            firstName:'',
            lastName: '',
            username : '',
            email: '',
            password : '',
            confirmPassword: ''
        }}

        validationSchema = {yup.object({
            firstName: yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lasttName: yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
           username: yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
           password: yup.string()
                .min(6, 'Must be 6 characters or more')
                .required('Required'),
           confirmPassword: yup.string()
                .min(6, 'Must be 16 characters or more')
                .required('Required'),
           email: yup.string()
                .email('Invalid email address')
                .required('Required')
           
       })}

       onSubmit = {(values, {setSubmitting}) => {
        console.log(values)
        setSubmitting(false)
    }}
        > 
        <Form>
            
        <MyTextInput
            label= "First Name"
            name = "firstName"
            type= "text"
            placeholder = "First Name"
        />

        <MyTextInput  
            label= "Last Name"
            name = "lastName"
            type= "text"
            placeholder = "Last Name"
        />

       <MyTextInput    
            label= "Username"
            name = "username"
            type= "text"
            placeholder = "Username"
        />
            
        <MyTextInput
            label= "Email Adress"
            name = "email"
            type= "email"
            placeholder = "Your Name"
        />

         <MyTextInput
            label= "Password"
            name = "password"
            type= "password"
            placeholder = "Password"
        />

        <MyTextInput
            label= "Confirm Password"
            name = "confirmPassword"
            type= "password"
            placeholder = "Confirm Password"
         />






{/* 
        <label htmlFor="firstName">First Name</label>
        <Field  name = "firstName" type="text"/>
        <ErrorMessage name = "firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field  name = "lastName" type="text"/>
        <ErrorMessage name = "lastName" />

        <label htmlFor="username">Username</label>
        <Field  name = "username" type="text"/>
        <ErrorMessage name = "username" />

        <label htmlFor="email">Email Address</label>
        <Field  name = "email" type="text"/>
        <ErrorMessage name = "email" />

        <label htmlFor="password">Password</label>
        <Field  name = "password" type="text"/>
        <ErrorMessage name = "password" />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field  name = "confirmPassword" type="text"/>
        <ErrorMessage name = "confirmPassword" /> */}

        </Form>
    </Formik>
        </div>
        
        </>
    )
}

export default Registration