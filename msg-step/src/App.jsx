
import './App.css'

const message =[
  "Learning React","Apply for job","Invest your new income"
]

function App() {
  const step =1;
  
  function handlePrevious (){
    alert("previous")
  }
function handleNext (){
  alert("Next")
}
  
  return (
    <div className='text-center w-2/4 mx-auto bg-slate-200 rounded-2xl mt-28 shadow-md'>
      <div className='grid grid-rows-3 grid-cols-3 gap-4 p-5'>
        <div className='active ml-32'>1</div>
        <div className=' not-active ml-28'>2</div>
        <div className='not-active ml-20'>3</div>
        <div className=' col-start-1  col-end-7 '>
          <p className='text-lg font-bold text-indigo-800 mt-5 mb-5'> step {step } : "{message[step-1]}"</p>
        </div>
        <div className='custom-btn ml-80'>
          <button onClick ={handlePrevious}>Previous</button>
        </div>
        <div className='custom-btn ml-48'>
          <button onClick={handleNext}>Next</button>
        </div>
 
      </div>
    
    </div>
  )
}

export default App
