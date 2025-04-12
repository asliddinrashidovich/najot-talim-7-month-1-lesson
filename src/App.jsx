import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_NAME } from "./reducers/name";
import { PiLampFill } from "react-icons/pi";
import { TOGGLE, TURN_OFF, TURN_ON } from "./reducers/lamp";

function App() {
  const [clicked, setClicked] = useState(false)
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const sliceName = useSelector((state) => state.name.nameOf)
  const sliceLamp = useSelector((state) => state.lamp.lamp)

  function handleSubmit(e) {
    e.preventDefault();
    setClicked(true)
    setName("")
    dispatch(SET_NAME(name))
  }

  function handleON() {
    dispatch(TURN_ON())
  }
  function handleOFF() {
    dispatch(TURN_OFF())
  }
  function handleToggle() {
    dispatch(TOGGLE())
  }
  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <h1 className="text-center text-[30px] my-[50px] font-semibold">Redux Homework - 1</h1>
        <form onSubmit={handleSubmit} className="text-center">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full mb-[10px] border-[1px] border-[#e5e5e5] rounded-[3px] p-[7px]" placeholder="Enter Your Name"/>
          <button className="w-full p-[7px] bg-[#4a4aff] cursor-pointer rounded-[5px]">Submit</button>
        </form>
        {clicked && <h1 className="mt-[50px] text-center text-[40px]">Salom {sliceName} 👋</h1>}
      </div>
      <div className="max-w-[500px] mx-auto">
        <h1 className="text-center text-[30px] my-[40px] font-semibold">Redux Homework - 2</h1>
        <div className="flex justify-center gap-[10px]">
          <button onClick={handleON} className="px-[10px] py-[5px] cursor-pointer rounded-[5px] bg-[#e1e1e1]">on</button>
          <button onClick={handleOFF} className="px-[10px] py-[5px] cursor-pointer rounded-[5px] bg-[#e1e1e1]">off</button>
          <button onClick={handleToggle} className="px-[10px] py-[5px] cursor-pointer rounded-[5px] bg-[#e1e1e1]">toggle</button>
        </div>
        <div className="bg-[#555] mt-[20px]">
          {sliceLamp && <PiLampFill color="yellow" className="text-[200px] mx-auto"/>}
          {!sliceLamp && <PiLampFill color="white" className="text-[200px] mx-auto"/>}
        </div>
      </div>
    </>
  )
}

export default App