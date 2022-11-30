import m from "./Main.scss";
import Slide from "./Slide/Slide";
import { useRef, useState } from "react";

const Main = () => {
  const divRef = useRef();
    const [isDown, setDown] = useState(false);
    
  

  return (
    <main className="page">
      <div className="gallery">
        <div
          className="gallery__wrapper"
          ref={divRef}
          onWheel={(item) => {
            const div = divRef.current;
            const wheel = item.deltaY;
            // console.log(item.deltaY)
            const newScroll = div.scrollLeft + wheel / 5;
            div.scrollLeft = newScroll;
          }}
          onMouseDown={(item) => {
            console.log("down!");
            // setDown(true) // down = true
          }}
          onMouseMove={(item) => {
            console.log("move!");
          }}
        >
          
          <Slide />
          <Slide />
          <Slide />
        </div>
      </div>
    </main>
  );
};
export default Main;
