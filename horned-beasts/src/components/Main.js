import React from "react";
import HornedBeast from "./HornedBeast";
import dataJson from "../assets/data.json";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataJson };
  }
  render() {
    return (
      <div>
        {this.state.dataJson.map((items) => {
          return (
            <HornedBeast
              title={items.title}
              imageUrl={items.image_url}
              description={items.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
