import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function CreateImage() {
    const [description, setDescription] = useState('');
    const [album, setAlbum] = useState('');
    const [image, setImage] = useState([]);
    const [publishError, setPublishError] = useState(null);

    //categories from the backend





    const handleImage = (e) =>{
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    };

    const setFileToBase = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setImage(reader.result);
        }

    };
    const submitForm = async (e) =>{
        e.preventDefault();
        try {
            const res = await fetch('/api/picture/createPicture', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              })
              const data = await res.json();
              if (!res.ok) {
                setPublishError(data.message);
                return;
              }
        
              if (res.ok) {
                setPublishError(null);
                console.log('ok')
              }
            } catch (error) {
              setPublishError('Something went wrong');
            }

    };
    return(
        <div className="container custom_class">
        <h2 className="signup_title ">CREATE PRODUCT</h2>
        <form className=" col-sm-6 offset-3 pt-5 signup_form " onSubmit={submitForm}>
            
        

            
            <div className="form-outline mb-4">
                <textarea  onChange={(e)=>setDescription(e.target.value)}   type="text" id="form4Example2" className="form-control"  value={description}/>
                <label className="form-label" htmlFor="form4Example2">Description </label>
            </div>


            


            <div className="form-outline mb-4">
                <input onChange={handleImage}  type="file" id="formupload" name="image" className="form-control"  />
                <label className="form-label" htmlFor="form4Example2">Image</label>
            </div>
            <img className="img-fluid" src={image} alt="" />
            <button  type="submit" className="btn btn-primary btn-block mb-4">Create</button>
            
         </form>
    </div> 
    );
}