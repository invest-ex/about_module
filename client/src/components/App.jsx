import UserInfo1 from './UserInfo1.jsx'
import UserInfo2 from './UserInfo2.jsx'
import About from './About.jsx'
import Collections from './Collections.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return(
      <div>
        <div>
          <span><UserInfo1 /></span><span><UserInfo2 /></span>
        </div>
        <div>
          <About />
        </div>
        <div>
          <Collections />
        </div>
      </div>
    )
  }
}

export default App;