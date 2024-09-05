import { Spinner } from "flowbite-react";


export default function LoadingSpinner() {

  return (
    <div className="flex min-h-screen min-w-full justify-center items-center">
        <Spinner color="pink" aria-label="Pink spinner example" />
    </div>
  )
}
