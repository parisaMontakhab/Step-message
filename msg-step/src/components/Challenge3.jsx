import { useState } from "react";

export default function ChallengeTree() {
    const [showOne,setShowOne] = useState(false);
    const [showTwo,setShowTwo] = useState(false);
    const [showTree,setShowTree] = useState(true);
    


  return (
    <div>
      <TextCard>
        <p className={!showOne ? 'bg-red-200  p-2  text-nowrap overflow-hidden truncate' : 'bg-red-200  p-2'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          consequuntur eligendi modi fuga aut eius doloremque unde fugit odio
          autem numquam provident possimus, repudiandae vero suscipit? Assumenda
          tempore commodi fugiat?
          <p className="text-red-700 font-bold cursor-pointer" onClick={()=>setShowOne(!showOne)}>
            {showOne ? 'Hide them' : 'Show more'}
          </p>
        </p>
      </TextCard>

      <TextCard>
        <p className={!showTwo ? 'bg-red-200  p-2  text-nowrap overflow-hidden truncate' : 'bg-red-200  p-2'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea dolorem repellendus corrupti perspiciatis reiciendis debitis iure, illum assumenda ipsum eum, minima aliquid sequi quisquam doloribus temporibus. Magnam, ab dolor
            <p className="text-red-700 font-bold cursor-pointer" onClick={()=>setShowTwo(!showTwo)} >{showTwo ? 'Hide them' : 'Show more'}</p>
        </p>
      </TextCard>

      <TextCard>
        <p className={!showTree ? 'bg-red-200  p-2  text-nowrap overflow-hidden truncate' : 'bg-red-200  p-2'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea dolorem repellendus corrupti perspiciatis reiciendis debitis iure, illum assumenda ipsum eum, minima aliquid sequi quisquam doloribus temporibus. Magnam, ab dolor
            <p className="text-red-700 font-bold cursor-pointer" onClick={()=>setShowTree(!showTree)} >{showTree ? 'Hide them' : 'Show more'}</p>
        </p>
      </TextCard>


     
      
     
    </div>
  );
}




function TextCard({ children }) {
  return <div className="bg-red-300 w-3/5 p-4 mx-auto mt-10">{children}</div>;
}
