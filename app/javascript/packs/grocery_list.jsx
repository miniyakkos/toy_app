import React from 'react'
import ReactDOM from 'react-dom'

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: []
    };
  }

  componentDidMount() {
    fetch('api/v1/grocery_lists')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({groceries: myJson.groceries})
    });
  }

  render() {
    let groceries = this.state.groceries.map((grocery) => {
      return(
        <p>{grocery.name}</p>
      )
    })

    return(
      <div>
        <h1>Hello, </h1>
        {groceries}
      </div>
    )
  }
}

export default GroceryList
