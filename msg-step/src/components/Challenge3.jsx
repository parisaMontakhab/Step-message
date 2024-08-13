export default function ChallengeTree() {
  return (
    <div>
      <TextCard>
        <p className="bg-red-200 text-nowrap overflow-hidden truncate  p-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          consequuntur eligendi modi fuga aut eius doloremque unde fugit odio
          autem numquam provident possimus, repudiandae vero suscipit? Assumenda
          tempore commodi fugiat?
          <p className="text-red-700">show more</p>
        </p>
      </TextCard>
      
      <TextCard>
        <p className="bg-red-200 text-nowrap overflow-hidden truncate  p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur eligendi ipsum odio deleniti doloremque ab ullam aliquam asperiores laborum! Error, tenetur quos dolore excepturi dicta molestiae possimus unde repellendus
            <p className="text-red-700">hide them</p>
        </p>
      </TextCard>
    </div>
  );
}




function TextCard({ children }) {
  return <div className="bg-red-300 w-3/5 p-4 mx-auto mt-10">{children}</div>;
}
