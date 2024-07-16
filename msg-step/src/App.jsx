
import './App.css'

const message =[
  "Learning React","Apply for job","Invest your new income"
]

function App() {
  const step =1;

  return (
    <div className='text-center w-2/4 mx-auto bg-slate-200 rounded-2xl mt-28 shadow-md'>
      <div className='grid grid-rows-3 grid-cols-3 gap-4 p-5'>
        <div className='active ml-32'>1</div>
        <div className=''>2</div>
        <div className=''>3</div>
        <div className=' col-start-1  col-end-7 '>
          <p className='text-lg font-bold text-indigo-800'> step {step } : "{message[step-1]}"</p>
        </div>
        <div className='custom-btn ml-80'>
          <button>Next</button>
        </div>
        <div className='custom-btn ml-48'>
          <button>Previous</button>
        </div>
 
      </div>
    
    </div>
  )
}

export default App
