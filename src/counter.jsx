import { useSelector, useDispatch } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from './reducers/counter'
import { useState } from 'react'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const [num, setNum] = useState()
  const [num2, setNum2] = useState()
  const dispatch = useDispatch()

  return (
    <div>
      <div className='text-center mt-[30px]'>
        <button className='p-[5px] bg-[#555] text-[#fff] mx-[10px]'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button className='p-[5px] bg-[#555] text-[#fff] mx-[10px]'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button><br />
        <div className='my-[10px]'>
            <input placeholder='Number' type="number" className='border' value={num} onChange={(e) => setNum(e.target.value)}/>
            <button className='p-[5px] bg-[#555] text-[#fff] mx-[10px]'
            aria-label="Decrement value"
            onClick={() => dispatch(incrementByAmount(Number(num)))}
            >
            Increment by this number
            </button>
        </div>
        <div className='my-[10px]'>
            <input placeholder='Number' type="number" className='border' value={num2} onChange={(e) => setNum2(e.target.value)}/>
            <button className='p-[5px] bg-[#555] text-[#fff] mx-[10px]'
            aria-label="Decrement value"
            onClick={() => dispatch(decrementByAmount(Number(num2)))}
            >
            Decrement by this number
            </button>
        </div>
      </div>
    </div>
  )
}