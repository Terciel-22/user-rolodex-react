import { User } from "../../App";
import "./card.styles.css";

type CardProps = {
  user: User;
};
const Card = ({ user }: CardProps) => {
  const { firstName, lastName, image, email } = user;
  return (
    <div className="card-container">
      <img alt={`User ${firstName} ${lastName}`} src={image} />
      <h3>{firstName + " " + lastName}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
