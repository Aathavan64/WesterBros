import React from 'react';
import ReactDOM from 'react-dom';
import Previousbattle from './previousBattle.js'
import Nextbattle from './nextBattle.js'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDIrpMFuD5jkPxxlfm9S-CYHJ7KH9oMFoo",
  authDomain: "wester-bros.firebaseapp.com",
  databaseURL: "https://wester-bros.firebaseio.com",
  projectId: "wester-bros",
  storageBucket: "wester-bros.appspot.com",
  messagingSenderId: "553144417983"
};
firebase.initializeApp(config);
// battles=[]

//Here we have our main app component 
class App extends React.Component {
  //constructor used to set inital state
  constructor() {
    super();
    //set initial states here
    this.state ={
      activeIndex:0
    }
    //Here we bind our methods so that the `this` keyword is in proper context inside of our custom methods
    this.goToNextBattle = this.goToNextBattle.bind(this);
    this.goToPrevBattle = this.goToPrevBattle.bind(this);
  
  }

  componentDidMount() {
    const dbref = firebase.database().ref('/allBattles');

    dbref.on('value', (snapshot) => {
      const data = snapshot.val();
      const state = [];
      for(let key in data){
        // console.log(key);
        // console.log(data[key]);
        let subData = data[key];
        for(let subKey in subData){
          console.log(subKey);
          console.log(subData[subKey])
        }
      }

    });
  }

  //After this for components
  goToPrevBattle(e){
    e.preventDefault();

    let index = this.state.activeIndex;
    // let { battles } = this.props;
    // let battlesLength = battles.length;

    // if (index < 1) {
    //   index = battlesLength;
    // }

    --index;

    this.setState({
      activeIndex: index
    });

    console.log('prev button clicked');
  }

  goToNextBattle(e){
    e.preventDefault();
    let index = this.state.activeIndex;
    //propety that is passed to child that will switch the battle 


    // let {battles} = this.props;

    // let battlesLength = battles.length - 1;
    // if (index === slidesLength){
    //   index = -1;
    // }

    ++index;

    this.setState({
      activeIndex: index
    });

    console.log('next button clicked'); 
 
  }

  render() {
    return (
      <div>
        <div className="initialView">
          <div className="initalMapView">
            <h1>h1test</h1>

          </div>
          <div className="battleTracker">
            <Previousbattle onClick={e => this.goToPrevBattle(e)}/>
            {/* <div className="battleTrackerBattles">
              {this.props.battles.map((battle, index) =>
                <CurrentBattle
                  key={index}
                  index={index}
                  activeIndex= {this.state.activeIndex}
                  battle={battle}
                />
              )} 
            </div> */}
            <Nextbattle onClick={e => this.goToNextBattle(e)} />
          </div>
        </div>
      </div>
    )
  }

  setColor(e){
    this.setState({
      colorNumber : e.target.id
    })
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
