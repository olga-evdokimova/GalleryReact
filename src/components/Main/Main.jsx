import "./Main.scss";
import Slide from "./Slide/Slide";
import { useRef, useState } from "react";
import { slideList } from "./Slide/slideList";

const Main = () => {
  const divRef = useRef();
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
        >
          {slideList.map((slide) => {
            return (
              <Slide
                key={slide.id}
                title={slide.title}
                img={slide.img}
                id={slide.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default Main;
