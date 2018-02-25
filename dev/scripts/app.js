import React from 'react';
import ReactDOM from 'react-dom';
import Previousbattle from './previousBattle.js'
import Nextbattle from './nextBattle.js'
import Currentbattle from './currentBattle.js'
import Currentindicator from './currentIndicator.js'

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
      activeIndex:0,
      battles: [],
    }
    //Here we bind our methods so that the `this` keyword is in proper context inside of our custom methods
    this.goToNextBattle = this.goToNextBattle.bind(this);
    this.goToPrevBattle = this.goToPrevBattle.bind(this);
  
  }

  componentDidMount() {
    const dbref = firebase.database().ref('/allBattles');

    dbref.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log (data)
      const battlesState = [];
      for(let key in data){
        data[key].key = key;
        // console.log(key);
        // battleNameState.push(key)
        battlesState.push(data[key])
        // console.log(key);
        // console.log(data[key]);
        // let subData = data[key];
        // for(let subKey in subData){
        //   console.log(subKey);
        //   console.log(subData[subKey])
        // }
      }
      function compare (a,b) {
        if (a.battleOrder < b.battleOrder)
          return -1;
        if (a.battleOrder > b.battleOrder)
          return 1;
        return 0;
      }
      battlesState.sort(compare);
      console.log(battlesState);
      this.setState({
        battles: battlesState
      })
    });

  }

  //After this for components
  goToPrevBattle(e){
    e.preventDefault();
    let index = this.state.activeIndex;
    let battles = this.state.battles;
    let battlesLength = battles.length;
    if (index < 1) {
      index = battlesLength;
    }
    --index;
    this.setState({
      activeIndex: index
    });
  }

  goToNextBattle(e){
    e.preventDefault();
    let index = this.state.activeIndex;
    let battles = this.state.battles;
    let battlesLength = battles.length - 1;
    if (index === battlesLength){
      index = -1;
    }
    ++index;
    this.setState({
      activeIndex: index
    });
  }

  render() {
    console.log(this.state.battles);
    return (
      <div>
        <div className="initialView">
          <div className="initalMapView">

          </div>
          <div className="battleTracker">
            {this.state.battles.length>0 &&
              <Currentbattle battle={this.state.battles[this.state.activeIndex]} />
            }
            {/* {this.state.battles.map((battle, i) =>{
              return <Currentbattle key={i} battle={battle} />
            })} */}
            {this.state.battles.length>0 &&
            <Currentindicator battle={this.state.battles[this.state.activeIndex]} />
            }
            <Previousbattle onClick={e => this.goToPrevBattle(e)}/>
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
