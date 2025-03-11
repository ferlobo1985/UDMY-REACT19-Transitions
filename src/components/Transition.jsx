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
        timeout={2000}
      >
        {state =>
          <div
            style={{
                background:'red',
                height:'100px',
                transition:'all 2s ease',
                opacity: state === 'exited' || state === 'exiting' ? 0:1
            }}
          >
            {state}
          </div>
        }
      </Transition>
      <button className="btn btn-primary" onClick={showDiv}>Show</button>
    </>
  )
};

export default TransitionComp;