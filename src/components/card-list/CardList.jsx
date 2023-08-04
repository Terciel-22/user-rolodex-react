import "./card-list.styles.css";
import Card from "../card/Card";

const CardList = ({ users, isLoading }) =>  
(
  <div className="card-list">
    {isLoading ? (
      <h3 className="loading-text">Loading...</h3>
    ) : (
      users.map((user, index) => {
        return <Card user={user} key={index}/>;
      })
    )}
  </div>
)

export default CardList;
