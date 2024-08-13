import { useState } from "react";

export default function ChallengeTree() {
    const [show,setShow] = useState(false);


  return (
    <div>
      <TextCard>
        <p className="bg-red-200 text-nowrap overflow-hidden truncate  p-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          consequuntur eligendi modi fuga aut eius doloremque unde fugit odio
          autem numquam provident possimus, repudiandae vero suscipit? Assumenda
          tempore commodi fugiat?
          <p className="text-red-700 font-bold cursor-pointer" onClick={()=>setShow(!show)}>
            {show ? 'Hide them' : 'Show more'}
          </p>
        </p>
      </TextCard>
      
     
    </div>
  );
}




function TextCard({ children }) {
  return <div className="bg-red-300 w-3/5 p-4 mx-auto mt-10">{children}</div>;
}
