import React from 'react';
import './styles.css';
import img from "./images/welcomeBack.jpg"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });


const App: React.FC = () => {



  const handleSubmit = (values : any) => {
    // Handle form submission here

  };
  

  return (
    <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
    <Form>
    <div className="grid grid-cols-2 items-center justify-center min-h-screen bg-gray-100 ">
      <div  className=" w-screen h-screen col-span-1 items-center justify-center" >
        <img 
          src={img}
          alt="Welcome" 
          className='w-full h-full object-cover object-center'
          />
        
      </div>
      <div className=" col-span-1  w-full max-w-md">
        <div className="bg-gradient-to-r from-red-300 to-yellow-300 rounded-lg shadow-lg px-10 py-8" >
          <h2 className="text-3xl text-center font-bold mb-8">Login</h2>
          <form>
            <div className="mb-6">
              { <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label> }
              <Field
                type="email" id="email" name="email"
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="mb-6">
               <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label> 
              <Field
                type="password" id="password" name="password"
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
              <button
                
                className="text-blue-600 py-2 px-4 align-content:flex-end float-right hover:text-red-600 transition-colors duration-300"
            >
              Forgot Password?
            </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
              // onClick={handleSubmit}
            >
              Login
            </button>
            <div className='py-4'>
              <p className="absolute bottom-35">Don't have an account? Then create one :) </p>
              <button
                className="text-blue-600  align-content:flex-end float-right hover:font-bold transition-colors duration-300"
            >
              Sign Up
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Form>
    </Formik>
  );

};
export default App;
