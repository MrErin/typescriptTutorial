import * as React from "react";
import CounterOutput from "./CounterOutput";

// This app doesn't require props, so I commented out the IAppProps object
// And passed an empty object to the Component type
// interface IAppProps {}

interface IAppState {
  counterValue: number;
}

class App extends React.Component<{}, IAppState> {
  public state = { counterValue: 0 };

  public render() {
    return (
      <div style={{ textAlign: "center" }}>
        <CounterOutput counter={this.state.counterValue} />
        <button onClick={this.handleChange(1)}>Increment</button>
        <button onClick={this.handleChange(-1)}>Decrement</button>
      </div>
    );
  }
  private handleChange = (amount: number) => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue + amount };
    });
  };
}

export default App;
