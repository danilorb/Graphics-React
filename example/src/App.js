import React, { Component } from 'react'

import { GraphicsComponent } from 'graphics'

export default class App extends Component {
  render () {
    const data = [
      {
        id: '0',
        countDesktop: 30,
        countMobile: 10,
        timestamp: 1561723704
      },
      {
        id: '1',
        countDesktop: 80,
        countMobile: 70,
        timestamp: 1561725624
      },
      {
        id: '2',
        countDesktop: 10,
        countMobile: 30,
        timestamp: 1561726524
      },
      {
        id: '3',
        countDesktop: 100,
        countMobile: 60,
        timestamp: 1561727484
      }
    ]
    return (
      <React.Fragment>
        <GraphicsComponent data={data} />
      </React.Fragment>
    )
  }
}
