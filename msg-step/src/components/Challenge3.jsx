import { useState } from "react";

export default function ChallengeTree() {
   
    
  return (
    <div>
      
      <TextCard box='box' textExpen ='text-expend' textNotExpend ='text-notexpend' btn='btn' >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum eveniet, ea quod cumque reiciendis tempora voluptatem quae autem amet iusto alias totam perspiciatis dolores aspernatur maxime optio, odit quibusdam!
      </TextCard>

      <TextCard box='box' textExpen ='text-expend' textNotExpend ='text-notexpend' btn='btn' expended={true} >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur accusamus voluptatibus blanditiis, dolores dolor ex numquam perferendis sit voluptatum recusandae asperiores laudantium quasi sed? Non dolor temporibus eaque saepe.
      </TextCard>

      <TextCard box='box' textExpen ='text-expend' textNotExpend ='text-notexpend' btn='btn'  >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur accusamus voluptatibus blanditiis, dolores dolor ex numquam perferendis sit voluptatum recusandae asperiores laudantium quasi sed? Non dolor temporibus eaque saepe.
      </TextCard>
     
    </div>
  );
}




function TextCard({ children,box, textExpen,textNotExpend,btn,expended=false}) {
     const [isExpended,setIsExpended] = useState(expended)

  return <div className={box}>
    <p className={isExpended ? textNotExpend : textExpen  }>{ children}</p>
    <p className={btn} onClick={()=>setIsExpended(!isExpended)}>{isExpended ? 'show less' : 'show more'}</p>
  </div>;
}
