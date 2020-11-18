import React, { Component } from 'react';
import './App.css';
class App extends Component {

  state = {
    filter: "",
    data: []
  };
  
  componentDidMount() {
    const apiUrl = 'https://api.themoviedb.org/4/list/1?page=1&api_key=ed1458873e12626ef50a4437c220a1f5';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
      this.setState({ data: data.results });
       console.log('This is your data', data.results)
      });
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return item.title.toLowerCase().includes(lowercasedFilter)

    });

    return (
      <div className="container">
        <div className="box">
          <div>
        <input value={filter} onChange={this.handleChange} />
        <div className="row" >
        {filteredData.map(item => (
          <div className="item" key={item.id}>
              {/* <img src={item.backdrop_path}/> */}
              <h3>Popularity: {item.popularity}</h3>
              <p>Ititle: {item.title}</p>
              <p>Vote average: {item.vote_average}</p>
          </div>
        ))}
          </div>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
