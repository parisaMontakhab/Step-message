
export default function ChallengeOne (){
    const dateString = new Date().toLocaleDateString();
    return(
        <div className="text-center mt-10">
            <div className="grid grid-cols-3 w-48 mx-auto mb-5">
                <button className="bg-slate-300 rounded-full font-bold text-2xl ">-</button>
                <p>step :0 </p>
                <button className="bg-slate-300 rounded-full font-bold text-2xl "> +</button>
            </div>
            <div className="grid grid-cols-3 w-48 mx-auto mb-5">
            <button className="bg-slate-300 rounded-full font-bold text-2xl ">-</button>
                <p>count :0 </p>
                <button className="bg-slate-300 rounded-full font-bold text-2xl "> +</button>
            </div>
            <div>today is : {dateString}</div>
        </div>
    )
}