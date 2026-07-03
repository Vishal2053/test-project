import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ContactForm.css";

function ContactForm(){

const countries = useMemo(()=>countryList().getData(),[]);

const [formData,setFormData] = useState({
name:"",
email:"",
company:"",
country:"",
phone:"",
message:""
});

const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value});
};

const handleCountry=(selected)=>{
setFormData({...formData,country:selected.label});
};

const handlePhone=(value)=>{
setFormData({...formData,phone:value});
};

const handleSubmit=async(e)=>{
e.preventDefault();

await fetch("YOUR_GOOGLE_SCRIPT_URL",{
method:"POST",
mode:"no-cors",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(formData)
});

alert("Form Submitted Successfully");

setFormData({
name:"",
email:"",
company:"",
country:"",
phone:"",
message:""
});
};

return(

<section className="form-section">

<div className="form-container">

{/* LEFT TEXT */}

<div className="form-left">

<h2>Join with Quintessence Atelier</h2>

<p>
Connect with our team to explore partnerships,
investment opportunities and business collaborations.
</p>

</div>


{/* RIGHT FORM */}

<div className="form-right">

<form onSubmit={handleSubmit}>

<div className="form-grid">

<input
type="text"
name="name"
placeholder="Full Name"
value={formData.name}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email Address"
value={formData.email}
onChange={handleChange}
required
/>

<input
type="text"
name="company"
placeholder="Company Name"
value={formData.company}
onChange={handleChange}
/>

{/* ALL 195 COUNTRIES SEARCHABLE */}

<Select
options={countries}
placeholder="Select Country"
onChange={handleCountry}
isSearchable={true}
/>

</div>


{/* PHONE INPUT WITH ALL COUNTRY CODES */}

<PhoneInput
country={"in"}
value={formData.phone}
onChange={handlePhone}
enableSearch={true}
enableAreaCodes={true}
inputClass="phone-input"
/>


<textarea
name="message"
placeholder="Your Message"
value={formData.message}
onChange={handleChange}
rows="5"
/>

<button type="submit">Submit</button>

</form>

</div>

</div>

</section>

);

}

export default ContactForm;