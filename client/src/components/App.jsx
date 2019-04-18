import React from 'react';
import UserInfo1 from './UserInfo1.jsx';
import UserInfo2 from './UserInfo2.jsx';
import About from './About.jsx';
import Collections from './Collections.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockInfo: [],
    };
  }

  componentDidMount() {
    this.getCompanyInfo();
  }

  getCompanyInfo() {
    const url = window.location.pathname;
    const splitUrl = url.split('/');
    const symbolId = splitUrl[splitUrl.length - 2];
    fetch(`/api/quotes/${symbolId}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then((parsedJSON) => {
        this.setState({
          stockInfo: parsedJSON,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="grid-container-app">
          <UserInfo1 stockInfo={this.state.stockInfo} />
          <div id="app-grid-item"><UserInfo2 stockInfo={this.state.stockInfo} /></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <About stockInfo={this.state.stockInfo} />
        </div>
        <br></br>
        <br></br>
        <div>
          <Collections stockInfo={this.state.stockInfo}/>
        </div>
      </div>
    );
  }
}

export default App;
