class About extends React.Component {
  constructor(props) {
    super(props)
    this.state ={

    }
  }
  render() {
    return (
      <div>
        <div>
        <span>About</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>show more</span>
        </div>
        <div>
          DESCRIPTIONS 
        </div>
        <div>
          <span>CEO</span>&nbsp;&nbsp;<span>Employees</span>&nbsp;&nbsp;<span>Headquarters</span>&nbsp;&nbsp;<span>Founded</span>
        </div>
        <div>
          <span>Lisa T.Su</span>&nbsp;&nbsp;<span>1,100</span>&nbsp;&nbsp;<span>Santa Clara, California</span>&nbsp;&nbsp;<span>1969</span>
        </div>
        <div>
        <span>Market Cap</span>&nbsp;&nbsp;<span>Price-Earings Ratio</span>&nbsp;&nbsp;<span>Dividend Yield</span>&nbsp;&nbsp;<span>Average Volume</span>
        </div>
        <div>
        <span>25.82B</span>&nbsp;&nbsp;<span>77.72</span>&nbsp;&nbsp;<span>0.00</span>&nbsp;&nbsp;<span>89.14M</span>
        </div>
      </div>
    )
  }
}

export default About;