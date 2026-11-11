import { useState } from "react"
import { MdRemoveShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Signup() {
  

  const [form, setForm]= useState({
    name:"",
    email:"",
    password:"",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading]= useState(false)
  const [error, setError]= useState("");
  {error && (
  <p className="text-red-500 text-center">
    {error}
  </p>
)}

   function handleChange(e: any) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handlesubmit= async(e:any)=>{
    e.preventDefault();
    setError("")
    if (form.name.trim().length<2){
      setError("Name must be greater than 2 characters")
      return;
    }
    if(form.password.length<12){
      setError("password must be at least 12 characters")
      return;
    }
    if (form.password !== form.confirmPassword) {
  setError("Passwords do not match");
   console.log("Form submitted");
  console.log("Form data:", form);

  if (form.name.trim().length < 2) {
    console.log("Name validation failed");
    setError("Name must be at least 2 characters");
    return;
  }

  if (form.password.length < 12) {
    console.log("Password validation failed");
    setError("Password must be at least 12 characters");
    return;
  }

  if (form.password !== form.confirmPassword) {
    console.log("Confirm password validation failed");
    setError("Passwords do not match");
    return;
  }

  console.log("All validations passed");
  console.log("About to send API request");

  return;
}
    setLoading(true)
    try{
      const response=await fetch("http://localhost:5000/api/v1/register",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        credentials:"include",
        body:JSON.stringify({
          name:form.name.trim(),
          email:form.email.trim(),
          password:form.password,
          
        })
      })
      const data=await response.json()

      if(!response.ok){
        throw new Error(data.message || "Signup failed")
      }
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/");
    }catch (err:any) {
      setError(
        err.message === "Failed to fetch"
          ? "Cannot connect to the server. Please try again."
          : err.message
      );
    }finally {
  setLoading(false);
}
  }

  return (
    <div className="flex justify-center items-center h-180">
      <div className="h-110 w-90 border-2 ">
        <h1 className="flex mt-4 font-bold text-2xl justify-center">Signup</h1>
        <div >
        <form action="" className="flex flex-col items-center m-5 p-3 justify-center "  onSubmit={handlesubmit}>
          <input type="text" placeholder="Full Name"  className="m-2 p-2 border-1"  value={form.name} name="name"
            onChange={handleChange}/>
          <input type="email" placeholder="E-mail" className="m-2 p-2 border-1"  value={form.email}   name="email"
            onChange={handleChange}/>
          <input type="password" placeholder="Password" className="m-2 p-2 border-1"  value={form.password}  name="password"
            onChange={handleChange}/>
          <input type="password" placeholder="Confirm Password" className="m-2 p-2 border-1"  value={form.confirmPassword}
            onChange={handleChange}   name="confirmPassword"/>
        <button type="submit" disabled={loading} className=" py-2 px-4 m-6 cursor-pointer transition-all hover:scale-105 rounded-2xl bg-blue-300"> {loading ? "Signing up..." : "Signup"}</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
