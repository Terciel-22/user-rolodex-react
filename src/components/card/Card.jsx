import React, { Component } from 'react'
import "./card.styles.css";
class Card extends Component {
  render() {
    const { user } = this.props;
    const { firstName, lastName, image, email } = user;
    return (
        <div className="card-container">
            <img alt={`User ${firstName} ${lastName}`} src={image} />
            <h3>{firstName + " " + lastName}</h3>
            <p>{email}</p>
        </div>
    );
  }
}

export default Card;