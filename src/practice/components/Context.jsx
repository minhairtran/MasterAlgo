import React, { createContext, Component } from "react";
export const Context = createContext();

class ContextProvider extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 3 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    counters.value = 0;
    this.setState({ counters });
  }
  render() {
    return (
      <Context.Provider value={{ 
        ...this.state, 
        totalCounterChosen:this.state.counters.filter(counter => counter.value > 0).length, 
        onIncrement:this.handleIncrement, 
        onDelete:this.handleDelete, 
        onReset:this.handleReset,
        counters:this.state.counters}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
