import React from 'react'
import { Formik} from "formik";
import * as yup from "yup";
import './Form.css'

const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    organisation: yup.string().required("required"),
});

const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
};



function Form(){

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
            // Handle the error appropriately (e.g., show a message to the user)
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
        <form  onSubmit={handleSubmit}>
        
            <div className='form'>

                <div className="submit" >
                <button type="submit"   >Schedule a Visit</button>
                </div>

            <div className='name'>

            <div>
            <label className="label" htmlFor="firstName">First name <span>{errors.firstName && touched.firstName && errors.firstName}</span></label>
            <br/>
            <input className ="inp" type="text" id="firstName" name="firstName" placeholder="Enter your first name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName} 
            />
            </div>

            <div>
            <label className="label" htmlFor="lastName">Last name <span>{errors.lastName && touched.lastName && errors.lastName}</span></label>
            <br/>
            <input className ="inp" type="text" id="lastName" name="lastName" placeholder="Enter your last name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName} 
            />
            </div>

            </div>

            <div className="other">

            <div>
            <label className="label" htmlFor="email">Email address <span>{errors.email && touched.email && errors.email}</span></label>
            <br/>
            <input className ="inp" type="text" id="email" name="email" placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email} 
            />
            </div>

            <div>
            <label className="label" htmlFor="organisation">Organisation <span>{errors.organisation && touched.organisation && errors.organisation}</span></label>
            <br/>
            <input className ="inp" type="text" id="organisation" name="organisation" placeholder="Enter your organisation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.organisation} 
            />
            </div>
            </div>

            </div>
            
        </form>
      )
    }

    </Formik>
    </div>
  )
}

export default Form