import m from "./Slide.scss";

const Slide = (props) => {
  const slides = ["Первое", "Второе", "Третье"];
  const listItems = slides.map((slide) => <li>{slide}</li>);
  
  return (
    <div className="slide">
      <div className="slide__image">
        <img src={props.url} alt={props.name} />
      </div>
      <span>{listItems}</span>
    </div>
  );
};

export default Slide;
