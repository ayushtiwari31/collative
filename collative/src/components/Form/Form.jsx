import React ,{useState}from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import './Form.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';



// const registerSchema = yup.object().shape({
//     firstName: yup.string().required("required"),
//     lastName: yup.string().required("required"),
//     email: yup.string().email("invalid email").required("required"),
//     phone: yup.string()
//     .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
//     .required('Phone number is required'),
//     selectedOption: yup.string().required('Please select an option'),
// });

// const initialValuesRegister = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     selectedOption:''
// };



function myForm(){

    // const [selectedCountryCode, setSelectedCountryCode] = useState('');
    // const handleCountryCodeChange = (countryCode) => {
    //     setSelectedCountryCode(countryCode);
    //   };

    // const handleFormSubmit = async (values, onSubmitProps) => {
    //     try {
    //         console.log(values);
            
    //         const formData = new FormData();

    //         for (let value in values) {
    //             formData.append(value, values[value]);
    //         }
           

           
    //        //for checking
    //         for (let [key, value] of formData.entries()) {
    //             console.log(`${key}: ${value}`);
    //         }
            
           
            
    
    //         const response = await fetch("http://localhost:3000/", {
    //             method: "POST",
            
               
    //             headers: {
    //                 'Content-Type': 'application/json', // Set the content type to JSON
    //             },
    //             body: JSON.stringify(values),
    //         });
    
    //         if (!response.ok) {
    //             throw new Error('Failed to submit form');
    //         }

    //         onSubmitProps.resetForm();

    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //     }
    // }

    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit= async (data) => {
       
    //     console.log(data)
    //     const formData = new FormData();
    //     formData.append('category', data.category);
    //     formData.append('specialContext', data.specialContext);
    //     formData.append('title', data.title);
    //     formData.append('content', data.content);
    //     formData.append('image', data.image[0]); // Assuming single image upload
    //     formData.append('WrittenBy', data.WrittenBy); 

    //     reset();
    //     console.log(formData)
    
    //     try {
    //       const response = await axios.post('', formData, {
    //         headers: {
    //           'Content-Type': 'multipart/form-data'
    //         }
    //       });
    //       console.log('Blog post created successfully:', response.data);
    //     } catch (error) {
    //       console.error('Error creating blog post:', error);
    //     }
    }
    
  return (
    <div>

    
    {/* <Formik
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
        <Form  onSubmit={handleSubmit} form-container >
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

    </Formik> */}

<form className='form' onSubmit={handleSubmit(onSubmit)}>
       
       <div className='schedule' >Schedule a Visit</div> 
        
        <div className="form-box">

        

        <div className="pass toppass">

      <div >
        <label htmlFor="firstname" className='label' >First Name</label>
        <input placeholder='First Name...'className='inputfield leftpass' type="text" id="firstname" name="firstname" {...register("firstname",{
            required:"FirstName is required",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "First name must contain only alphabetic characters"
            }
        })} />
        {errors.firstname && <span>{errors.firstname.message}</span>}
      </div>


      <div >
        <label htmlFor="lastname" className='label'>Last Name</label>
        <input placeholder='Last Name...'className='inputfield' type="text" id="lastname" name="lastname" {...register("lastname", {
           required:'LastName is required',
           pattern: {
            value: /^[A-Za-z]+$/,
            message: "LastName must contain only alphabetic characters"
          }
          })} />
        {errors.lastname && <span>{errors.lastname.message}</span>}
      </div>
      

      </div>

      <div className='email'>
        <label htmlFor="email" className='label'>Email Address</label>
        <input placeholder='Email...'className='inputfield emailinp' type="email" id="email" name="email" {...register("email", { 
          required: "Email is required",
          pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address"
          } })}
          />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className='email'>
        <label htmlFor="organisation" className='label'>Organisation</label>
        <input placeholder='Organisation...'className='inputfield ' type="text" id="organisation" name="organisation" {...register("organisation", { 
          required: "Organisation is required",
        })}
          />
        {errors.organisation && <span>{errors.organisation.message}</span>}
      </div>



     
      </div>
      <button className='reactbtn' type='submit'>Submit</button> 
     
    </form>

    </div>
  )
}

export default myForm