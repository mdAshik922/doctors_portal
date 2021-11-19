import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { TextField } from '@mui/material';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState(null);
    const [success, setSuccess] = useState(false);

    const handelSubmit= e =>{
e.preventDefault();

if(!img){
    return;
}

const formData = new FormData();
formData.append('name', name);
formData.append('email', email);
formData.append('image', img);

fetch('http://localhost:5000/doctors', {
    method: 'POST',
   
    body: formData
  })
  .then(res=>res.json())
  .then(data => {
    if(data.insertedId){
        setSuccess('successfully added doctor ')
       
            };   
  })
  .catch(error=>{
    console.error('Error:', error)
})
 
         
          
    }
    return (
        <div>
            <h3>Add A Doctor</h3>
            <form onSubmit={handelSubmit}>
                <TextField 
                label="Name"
type="text"
required
variant="standrd"
onChange={e=>setName(e.target.value)}
                />
                <br/>
                <TextField 
                label="Email"
type="email"
required
variant="standrd"
onChange={e=>setEmail(e.target.value)}
                />
                 <Input 
                 accept="image/*"
                  multiple type="file"
                  onChange={e=>setImg(e.target.files)}
                  />
  <Button variant="contained" type="submit">
    Upload
  </Button>
            </form>
            {
                success && <p style={{color: 'green'}}>{success}</p>
            }
        </div>
    );
};

export default AddDoctor;