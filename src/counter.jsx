import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './reducers/counter'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
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
        </button>
      </div>
    </div>
  )
}