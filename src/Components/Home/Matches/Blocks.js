import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper } from '../../UI/misc';
import { reverseArray } from '../../UI/misc';

class Blocks extends Component {

  state = {
    matches: []
  }


componentDidMount() {
  firebaseMatches.limitToLast(6).once('value').then((snapshot) => {
    const matches = firebaseLooper(snapshot)

    this.setState({
      matches: reverseArray(matches)
    })
  })

}

  showMatches = (matches) => (
    <div>
      Match
    </div>
  )


  render() {

  const { matches } = this.state
  console.log(matches);
    return (
      <div className="home_matches">
        { this.showMatches(matches) }
      </div>
    );
  }

}

export default Blocks;
