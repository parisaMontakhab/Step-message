


export default function ChallengeTwo (){
    return(
        <div className="text-center">

            <div className="mb-4 mt-2">
                <h2>How much was the bill?</h2>
                <input type="text" placeholder="0" className="bg-slate-200 p-2 text-center rounded-md"/>
            </div>
             
            <div className="mb-4 mt-2">
                <h2>How did you like the services?</h2>
                <input type="text" placeholder="Dissatisfied(0%)" className="bg-slate-200 p-2 text-center rounded-md"/>
            </div>

             
            <div className="mb-4 mt-2">
                <h2>How did your friend like the services?</h2>
                <input type="text" placeholder="Dissatisfied(0%)" className="bg-slate-200 p-2 text-center rounded-md"/>
            </div>
            
        </div>
    )
}