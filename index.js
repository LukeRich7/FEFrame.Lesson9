import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
let APIUrl = "https://jsonplaceholder.typicode.com/photos";
class App extends React.Component {
  state = {
    pictures: [],
    errors: null
  };

  componentDidMount() {
    fetch(APIUrl)
      .then(rep => rep.json())
      .then(payload => {
        let first50 = payload.filter((i, index) => index < 50);
        console.log(first50);
        this.setState({pictures: first50})
      })
      .catch(err => this.setState({ error: err }));
  }

  render() {
    return (
      <div style={styles}>
        <Hello name="CodeSandbox" />
        {this.state.pictures.map(pic => (
          <img src={pic.thumbnailUrl} alt={pic.title}/>
        ))}
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));