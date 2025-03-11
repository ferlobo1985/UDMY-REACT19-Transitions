import { useState, useRef } from "react";
import { Transition } from "react-transition-group";

const TransitionComp = () => {
  const nodeRef = useRef(null);
  let [show,setShow] = useState(true) 

  const showDiv = () =>{
    setShow(!show ? true:false)
  }

  return (
    <>
      <Transition
        nodeRef={nodeRef}
        in={show}
        timeout={1000}
        onEnter={(node)=>{
          console.log('ENTER')
        }}
        onExit={(node)=>{
          console.log('EXIT')
        }}
      >
        {state =>
          <div ref={nodeRef} className={`square square-${state}`}>
            {`square square-${state}`}
          </div>
        }
      </Transition>
      <button className="btn btn-primary" onClick={showDiv}>Show</button>
    </>
  )
};

export default TransitionComp;