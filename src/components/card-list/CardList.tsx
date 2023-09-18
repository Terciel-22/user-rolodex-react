import "./card-list.styles.css";
import Card from "../card/Card";
import { User } from "../../App";

type CardListProps = {
  users: User[];
  isLoading: Boolean;
};

const CardList = ({ users, isLoading }: CardListProps) => (
  <div className="card-list">
    {isLoading ? (
      <h3 className="loading-text">Loading...</h3>
    ) : (
      users.map((user, index) => {
        return <Card user={user} key={index} />;
      })
    )}
  </div>
);

export default CardList;
