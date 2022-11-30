import m from "./Slide.scss";

const Slide = (props) => {
  const names = ["Первое", "Второе", "Третье"];
  const listItems = names.map((name) => <li>{name}</li>);
  
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
