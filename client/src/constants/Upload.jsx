import { useEffect, useState } from 'react';
import { BsUpload } from "react-icons/bs";
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [loaded, setLoaded] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const uwScript = document.getElementById('uw');
    if (!loaded && !uwScript) {
      const script = document.createElement('script');
      script.setAttribute('async', '');
      script.setAttribute('id', 'uw');
      script.src = 'https://upload-widget.cloudinary.com/global/all.js';
      script.addEventListener('load', () => setLoaded(true));
      document.body.appendChild(script);
    }
  }, [loaded]);
  
  const processResults = (error, result) => {
    if (result.event === 'close') {
      setIsDisabled(false);
    }
    if (result && result.event === 'success') {
      
      setIsDisabled(false);

    }
    if (error) {
      setIsDisabled(false);
    }
    
  };


  const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;

  const uploadWidget = () => {
    setIsDisabled(true);
    window.cloudinary.openUploadWidget(
      {
        cloudName,
        uploadPreset,
        sources: ['local', 'url'],
        tags: ['myphotoalbum-react'],
        clientAllowedFormats: ['image'],
        resourceType: 'image',
      },
      processResults
      
    );
  };
  return (
    <div className="">
      
      <Button
        outline
        gradientDuoTone='purpleToPink'
        disabled={isDisabled}
        className={`btn btn-primary ${isDisabled ? 'btn-disabled' : ''}`}
        type="button"
        onClick={uploadWidget}
      >
        
        {isDisabled ? 'Opening Widget' : <div className='flex items-center gap-2'><BsUpload className='text-lg'/>Upload Image</div>}
      </Button>
      
      
    </div>
  );
};

export default Upload;