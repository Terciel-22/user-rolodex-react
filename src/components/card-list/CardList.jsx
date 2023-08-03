import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/Card";

class CardList extends Component {
  render() {
    const { users, isLoading } = this.props;
    return (
      <div className="card-list">
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          users.map((user, index) => {
            return <Card user={user} key={index}/>;
          })
        )}
      </div>
    );
  }
}

export default CardList;
