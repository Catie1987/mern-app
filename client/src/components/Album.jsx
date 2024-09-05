import { useEffect, useState } from 'react';
import CldImage from './CldImage';
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Album = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;


  const getData = async (tag) => {
    const response = await fetch(
      `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_NAME
      }/image/list/${tag}.json`
    );
    
    const data = await response.json();
    try {
    if (Array.isArray(data.resources)) {
      setPhotos(data.resources);
    } else {
      console.error('Data format is not as expected:', data);
    }
    setLoading(false);
  } catch (error) {
    next(error);
  }
    
};
  useEffect(() => {
    
    getData('myphotoalbum-react');
    
  }, []);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  const offset = currentPage * itemsPerPage;
  const currentItems = photos.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(photos.length / itemsPerPage);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (photo) => {
    setSelectedImage(photo);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="m-2 space-y-4">
      <div className='min-h-screen mb-5'>
      {loading && <p className="font-bold">Loading gallery</p>}
      {!loading && photos.length !== 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 lg:[&>div:not(:first-child)]:mt-4 [&>div:not(:first-child)]:mt-4 ">
          {currentItems.map((photo, idx) => {
            return (
              <div className="max-w-full h-auto" 
              onClick={() => handleClick(photo)}
              key={idx}>
                <CldImage 
                publicId={photo.public_id}
                width="500"
                sizes="100vw" 
                />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-xl p-4">
          No photos found
        </p>
      )}
      </div>
      <div>
        <ReactPaginate
            breakLabel={<div>...</div> }
            nextLabel={currentPage < pageCount - 1 ?
              <div className="w-fit h-10 flex items-center justify-center gap-2 absolute top-10 md:top-0 right-0 text-[--text-primary] hover:text-[--cta]">
                <span className="select-none inline">Next page</span>
                < FaChevronRight/>
              </div> : null
            }
            pageRangeDisplayed={4}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            previousLabel={currentPage > 0 ?
              <div className="w-fit h-10 flex items-center justify-center gap-2 absolute top-10 md:top-0 left-0 text-[--text-primary] hover:text-[--cta]">
                < FaChevronLeft/>
                <span className="select-none inline">Previous page</span>
              </div> : null
            }
            containerClassName="relative flex items-center justify-center mt-8 mb-4 gap-2 border-t border-[--disable-text]"
            pageClassName="text-[--text-primary] hover:text-[--cta] text-lg block border-t-2 border-transparent w-10 h-10 flex items-center justify-center hover:pointer select-none"
            activeLinkClassName="text-[--cta] text-xl border-t-2 border-[--cta] w-10 h-10 flex items-center justify-center -mt-1 pt-1 font-semibold"
        />
    </div>
    {selectedImage && (
        <div className="fixed -top-10 z-50 inset-0 bg-black bg-opacity-75 flex items-center justify-center" onClick={handleClose}>
          <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload/${selectedImage.public_id}`} alt="Selected" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
};

export default Album;