import m from "./Slide.scss";

const Slide = (props) => {
  return (
    <div className="slide">
      <div className="slide__image">
        <img src={props.url} alt={props.name}  />
      </div>
      <span>{props.name}</span>
    </div>
  );
};

export default Slide;
