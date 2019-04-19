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
      userInfo: [],
    };
  }

  componentDidMount() {
    this.getCompanyInfo();
    this.getUserInfo();
  }

  getCompanyInfo() {
    const url = window.location.pathname;
    const splitUrl = url.split('/');
    const symbolId = splitUrl[splitUrl.length - 2];
    console.log(symbolId);
    fetch(`/api/about/${symbolId}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then((parsedJSON) => {
        console.log(parsedJSON);
        this.setState({
          stockInfo: parsedJSON,
        });
      })
      .catch(err => console.log(err));
  }

  getUserInfo() {
    const userId = Math.ceil(Math.random() * 100);
    fetch(`/api/user/${userId}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then((parsedJSON) => {
        this.setState({
          userInfo: parsedJSON,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="grid-container-app">
          <UserInfo1 userInfo={this.state.userInfo} />
          <div id="app-grid-item"><UserInfo2 userInfo={this.state.userInfo} /></div>
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
