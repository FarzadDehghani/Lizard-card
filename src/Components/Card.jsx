import Image from "./Image";
import Title from "./Title";
import Description from "./Description";
import Button from "./Button";
import "../Styles/card.css";
import "../Styles/image.css";
import "../Styles/button.css";

const Card = ({image,title,description,button}) => {
  return (

    <div className="container">
      <Image image={image} />
      <Title title={title} />
      <Description description={description} />
      <div className="button-container">
        <div className="button-sub">
          {button.map((text) => (
            <Button button={text} />
          ))}
        </div>
      </div>
    </div>

  );
};

export default Card;
