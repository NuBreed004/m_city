import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Otamendi from '../../../Resources/images/players/Otamendi.png';
import PLayerCard from '../../UI/playerCard';


class HomeCards extends Component {

  state = {
    cards: [
      {
        bottom: 90,
        left: 300
      },
      {
        bottom: 60,
        left: 200
      },
      {
        bottom: 30,
        left: 100
      },
      {
        bottom: 0,
        left: 0
      }
    ]
  }


  showAnimateCards = () => (
    this.state.cards.map((card, i) => (
      <Animate
        show={this.props.show}
        key={i}
        start={{
          left: 0,
          bottom:0
        }}
        enter={{
          left: [card.left],
          bottom: [card.bottom],
          timing: { duration: 500, ease: easePolyOut }
        }}
      >
        { ({ left, bottom })=> {
          return (
            <div style={{
              position: 'absolute',
              left,
              bottom
            }}>
              <PLayerCard
                number="30"
                name="Nik"
                lastname="Otamendi"
                bck={Otamendi}
               />
            </div>
          )
        } }
      </Animate>
    ))
  )



  render() {
    return (
      <div>
        { this.showAnimateCards() }
      </div>
    );
  }

}

export default HomeCards;
