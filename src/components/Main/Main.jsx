import m from "./Main.scss";
import Slide from "./Slide/Slide";
import { useRef, useState } from 'react'; 

const Main = () => {
    const divRef = useRef()
    const [isDown, setDown] = useState(false)
    return (

        <main className="page">
            <div className="gallery">
                <div className="gallery__wrapper"
                    ref={divRef}
                    onWheel={(item) => {
                        const div = divRef.current
                        const wheel = item.deltaY
                        // console.log(item.deltaY)
                        const newScroll = div.scrollLeft + wheel / 5
                        div.scrollLeft = newScroll
                    }}

                    onMouseDown={(item) => {
                        console.log("down!")
                        // setDown(true) // down = true
                    }}

                    onMouseMove={(item) => {
                        console.log("move!")
                    }}
                >
                    <Slide name="Название" url="https://i.ibb.co/2hWjYx1/image-01.jpg"/>
                    <Slide name="Какое-то фото" url="https://i.ibb.co/wznpmzy/image-02.jpg"/>
                    <Slide name="Еще название" url="https://i.ibb.co/kHXr21y/image-03.jpg"/>
                    <Slide name="Название" url=" https://i.ibb.co/zFPFs16/image-04.jpg"/>
                    <Slide name="Какое-то фото" url="https://i.ibb.co/CBSMK27/image-05.jpg"/>
                    <Slide name="Еще название" url="https://i.ibb.co/JxYjps3/image-06.jpg"/>
                    <Slide name="Еще название" url="https://i.ibb.co/8BrghxK/image-07.jpg"/>
                    <Slide name="Название" url="https://i.ibb.co/0fQKwz3/image-08.jpg"/>
                </div>
            </div>

        </main>

    );
}
export default Main;

