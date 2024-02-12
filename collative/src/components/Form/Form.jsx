import React ,{useState}from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import './Form.css'



const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    phone: yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
    selectedOption: yup.string().required('Please select an option'),
});

const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedOption:''
};



function myForm(){

    const [selectedCountryCode, setSelectedCountryCode] = useState('');
    const handleCountryCodeChange = (countryCode) => {
        setSelectedCountryCode(countryCode);
      };

    const handleFormSubmit = async (values, onSubmitProps) => {
        try {
            console.log(values);
            
            const formData = new FormData();

            for (let value in values) {
                formData.append(value, values[value]);
            }
           

           
           //for checking
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            
           
            
    
            const response = await fetch("http://localhost:3000/", {
                method: "POST",
            
               
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                },
                body: JSON.stringify(values),
            });
    
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            
    
            onSubmitProps.resetForm();

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }
    
  return (
    <div>
    <Formik
    onSubmit={handleFormSubmit}
    initialValues={initialValuesRegister}
    validationSchema={registerSchema}
    >
        {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) =>(
        <Form  onSubmit={handleSubmit}>
            <div className='form'>
            <h1>Talk to an expert.</h1>
               

               
            <Field name="selectedOption" as="select" className="slct" >
            <option value="">What are you interested in?*</option>
            <option value="option1">Managed Offices</option>
            <option value="option2">Shared Workspace</option>
            <option value="option3">Meeting Room</option>
            <option value="option4">Conference Hall</option>
            <option value="option5">Interview Room</option>
            <option value="option6">Hot Desk</option>
            <option value="option7">Event Space</option>
           </Field>
          <ErrorMessage  name="selectedOption" component="span" className="error" />
         
           
            
           

          
           
            <input className ="inp" type="text" id="firstName" name="firstName" placeholder="Full name*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName} 
            />
             <ErrorMessage name="firstName" component="span" className="error" />

            

            
           
             <input className ="inp" type="text" id="lastName" name="lastName" placeholder="Last name*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName} 
            />
             <ErrorMessage name="lastName" component="span" className="error" />

            

           
            

           
            
            <input className ="inp" type="text" id="email" name="email" placeholder="Email*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email} 
            />
             <ErrorMessage name="email" component="span" className="error" />

            

            
            
            
                <input className ="inp" type="tel" id="phone" name="phone" placeholder="Phone number*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone} 
                />

             <ErrorMessage name="phone" component="span" className="error" />



           
            
          
            <div className="submit" >
                <button type="submit">INQUIRE NOW</button>
                </div>
            </div>

        </Form>
      )
    }

    </Formik>
    </div>
  )
}

export default myForm