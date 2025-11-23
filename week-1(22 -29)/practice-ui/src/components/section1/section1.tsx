import { Button } from "../ui/button"
import {Input} from "../ui/input"



const Section1 = () => {
  return (
    <div className=''>
     <div className="flex place-content-between p-1">
        <h3 className=" bg-black text-white p-2 m-1 rounded-full uppercase">target audiance </h3>
       <Button className=" bg-gray-300  p-2 m-1 rounded-full uppercase"  >the digita marketing </Button>
     </div>
     <Input></Input>
    </div>
  )
}

export default Section1
