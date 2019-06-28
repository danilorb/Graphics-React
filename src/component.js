import React, { Component } from 'react'
import Chart from 'react-google-charts'
import moment from 'moment'

export default class GraphicsComponent extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { data, chartType, formatDate } = this.props
    return (
      <React.Fragment>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType={chartType}
          loader={<div>Loading Chart</div>}
          data={[
            ['x', 'desktop', 'mobile'],
            ...data.map(data => [moment(data.timestamp).format(formatDate), data.countDesktop, data.countMobile])
          ]}
          options={{
            hAxis: {
              title: 'Tempo'
            },
            vAxis: {
              title: 'Click'
            }
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </React.Fragment>
    )
  }
}

GraphicsComponent.defaultProps = {
  chartType: 'AreaChart',
  formatDate: 'LT'
}
