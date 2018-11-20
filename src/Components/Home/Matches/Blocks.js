import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper } from '../../UI/misc';
import { reverseArray } from '../../UI/misc';
import MatchesBlock from '../../UI/matches_block';

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
    matches ?
        matches.map((match) => (
          <div key={match.id} className="item">
            <div className="wrapper">
              <MatchesBlock match={match} />
            </div>
          </div>
        ))
        :
        null
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
