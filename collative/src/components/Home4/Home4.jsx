import React,{useState} from 'react'
import './Home4.css'
import nehruplace from '../../images/nehru-place.png'
import Home4Card from '../Home4Card/Home4Card'
import { useForm ,Controller} from 'react-hook-form';
import axios from 'axios';
import up from '../../images/up.png'
import down from '../../images/down.png'



const FAQData = [
  {
    question: "Why do people choose Co-working Spaces in Nehru Place Delhi?",
    answer: "Coworking Spaces are preferred due to high-end amenities, millennial culture, community access, cost-effectiveness, superb infrastructure, and excellent connectivity, etc.",
  },
  {
    question: "What are the prices of hot desks, dedicated desks, and private cabins of Coworking Space in Nehru Place Delhi?",
    answer:
      "Coworking Spaces are preferred due to high-end amenities, millennial culture, community access, cost-effectiveness, superb infrastructure, and excellent connectivity, etc.",
  },
  {
    question: "What are the prices of hot desks, dedicated desks, and private cabins of Coworking Space in Nehru Place Delhi?",
    answer:
      "Coworking Spaces are preferred due to high-end amenities, millennial culture, community access, cost-effectiveness, superb infrastructure, and excellent connectivity, etc.",
  },
  // Add more question-answer pairs as needed
];

function Home4() {

  const { register, handleSubmit,reset, formState: { errors },control } = useForm();

  const onSubmitForm= async (data) => {
    console.log(data);
    reset()   ;
 }


 const [activeIndex, setActiveIndex] = useState(null);

 const toggleAnswer = (index) => {
   setActiveIndex(index === activeIndex ? null : index);
 };

  return (
    <div className="home4">
        <div className="co-working">
            <h1>Co-working space in Delhi Place</h1>
            <div className="home4-buttons">
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
                <button className="co-btn">Delhi</button>
            </div>
        </div>

        
        {/* <Home4Card photo={nehruplace} title={"Smartworks Nehru Place"} location={"Nehru Place, New Delhi"} /> */}

        <div className="home4-cards">
          <div className="home4-card-container">
          <Home4Card photo={nehruplace} title={"Smartworks Nehru Place"} location={"Nehru Place, New Delhi"} />
          <Home4Card photo={nehruplace} title={"Smartworks Nehru Place"} location={"Nehru Place, New Delhi"} />
          <Home4Card photo={nehruplace} title={"Smartworks Nehru Place"} location={"Nehru Place, New Delhi"} />
          <Home4Card photo={nehruplace} title={"Smartworks Nehru Place"} location={"Nehru Place, New Delhi"} />
          </div>

          <div className="home4-card-container home4-card-container2 ">
          <Home4Card photo={nehruplace} title={"Smartworks Nehru Place"} location={"Nehru Place, New Delhi"} />
          <Home4Card photo={nehruplace} title={"Smartworks Nehru Place"} location={"Nehru Place, New Delhi"} />
          <Home4Card photo={nehruplace} title={"Smartworks Nehru Place"} location={"Nehru Place, New Delhi"} />
          <Home4Card photo={nehruplace} title={"Smartworks Nehru Place"} location={"Nehru Place, New Delhi"} />
          </div>
        </div>


        <div className="home4-form">

        <form className='form form2' onSubmit={handleSubmit(onSubmitForm)}>
       
         <h2>Let us find your Dream Property</h2>
         <h5>Connect to CoFynd Space Expert now</h5>

         <div className="form-container">

         <div className="form-left">
         <div >
        <label htmlFor="First_Name" className='label' >First Name</label><br/>
        <input placeholder='First Name...'className='inputfield leftpass' type="text" id="First_Name" name="First_Name" {...register("First_Name",{
            required:"FirstName is required",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "First name must contain only alphabetic characters"
            }
        })} />
        {errors.First_Name && <span>{errors.First_Name.message}</span>}
      </div>

      <div >
        <label htmlFor="Email_" className='label'>Email Address</label><br/>
        <input placeholder='Email...'className='inputfield emailinp' type="email" id="Email_" name="Email_" {...register("Email_", { 
          required: "Email is required",
          pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address"
          } })}
          />
        {errors.Email_ && <span>{errors.Email_.message}</span>}
      </div>

      <label className='label'>
        Type Of Space
        <br/>
        <br/>
        <Controller
          name="Type_Of_Space" // Specify the name for the select field
          control={control}
          defaultValue="option1" // Set the default value if needed
          render={({ field }) => (
            <select {...field}>
              {/* <option value="">Select...</option> */}
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          )}
        />
      </label>
         </div>


         <div className="form-right">
         <div >
        <label htmlFor="Last_Name" className='label'>Last Name</label><br/>
        <input placeholder='Last Name...'className='inputfield' type="text" id="Last_Name" name="Last_Name" {...register("Last_Name", {
           required:'LastName is required',
           pattern: {
            value: /^[A-Za-z]+$/,
            message: "LastName must contain only alphabetic characters"
          }
          })} />
        {errors.Last_Name && <span>{errors.Last_Name.message}</span>}
      </div>

      <div>
        <label className='label' htmlFor="phoneno">Phone</label><br/>
        <input placeholder='Phone No ...'className='inputfield' type="tel" id="phoneno" name="phoneno" {...register("phoneno", { 
         required: "Phone number is required",
         pattern: {
           value: /^\d{10}$/,
           message: "Phone number must be 10 digits"
         }
           })} />
        {errors.phoneno && <span>{errors.phoneno.message}</span>}
      </div>
         


         <label className='label'>
        Select City
        <br/>
        <br/>
        <Controller
          name="Select_City" // Specify the name for the select field
          control={control}
          defaultValue="Delhi" // Set the default value if needed
          render={({ field }) => (
            <select {...field}>
              {/* <option value="">Select...</option> */}
              <option value="option1">Delhi</option>
              <option value="option2">Delhi</option>
              <option value="option3">Delhi</option>
            </select>
          )}
        />
      </label>

      </div>
         </div>
        
        
      <button className='reactbtn form2-btn' type='submit'>Submit</button> 
    </form>

        </div>


      <div className='questions'>
      <h1>Frequently Asked Questions</h1>
      <span>
      Our FAQ page has answers to many common questions. If you are <br/>looking for more information, please check it out.
      </span>
      <div className="faq-container"> 
        {FAQData.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active-item" : ""}`}>
            <div
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              {activeIndex!==index &&<img style={{marginLeft:'10px'}} src={down} alt="" />}
              {activeIndex===index &&<img style={{marginLeft:'10px'}} src={up} alt="" />}
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default Home4