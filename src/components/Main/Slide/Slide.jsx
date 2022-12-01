import "./Slide.scss";

const Slide = (props) => {
   return (
    <div className="slide">
      <div className="slide__image">
        <img src={props.img} alt={props.title} />
      </div>
       <span>{props.title}</span>
    </div>
  );
};

export default Slide;
