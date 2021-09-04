import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  increasingVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };

  render() {
    return (
      <div id="honorDiv">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.imageUrl}
            alt={this.props.title}
            onClick={this.increasingVotes}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description} My favorite {this.state.votes} ❤️
            </Card.Text>
          </Card.Body>
        </Card>
        {/* <h2>{this.props.title}</h2>
        <img
          onClick={this.increasingVotes}
          src={this.props.imageUrl}
          alt={this.props.title}
        />
        <p>{this.props.description}</p>
        <p>My favorite {this.state.votes} ❤️</p> */}
      </div>
    );
  }
}

export default HornedBeast;
