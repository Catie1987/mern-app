import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const PaginationButtons = () => {
  return (
    <div>
        <ReactPaginate
            breakLabel={<div>...</div> }
            nextLabel={
              <div className="w-fit h-10 flex items-center justify-center gap-2 absolute top-10 md:top-0 right-0 text-[--text-primary] hover:text-[--cta]">
                <span className="select-none inline">Next page</span>
                < FaChevronRight/>
              </div>
            }
            pageRangeDisplayed={4}
            pageCount={50}
            marginPagesDisplayed={1}
            previousLabel={
              <div className="w-fit h-10 flex items-center justify-center gap-2 absolute top-10 md:top-0 left-0 text-[--text-primary] hover:text-[--cta]">
                < FaChevronLeft/>
                <span className="select-none inline">Previous page</span>
              </div>
            }
            containerClassName="relative flex items-center justify-center mt-8 mb-4 gap-2 border-t border-[--disable-text]"
            pageClassName="text-[--text-primary] hover:text-[--cta] text-lg block border-t-2 border-transparent w-10 h-10 flex items-center justify-center hover:pointer select-none"
            activeLinkClassName="text-[--cta] text-xl border-t-2 border-[--cta] w-10 h-10 flex items-center justify-center -mt-1 pt-1 font-semibold"
        />
    </div>
  )
}

export default PaginationButtons;