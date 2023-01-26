import React from 'react'
import './Sankey.css'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import SankeyChart from 'highcharts/modules/sankey'

const options = {
    chart: {
        backgroundColor: '#242427',
        width: 600,
        margin: [40, 24, 40, 24],
    },
    title: {
        text: ''
    },
    credits: {
        text: 'Sankey',
        href: ''
    },
    series: [{
        keys: ['from', 'to', 'weight'],
        colors: ['#979797', '#8B75BA', '#DDAFD3', '#7EB8BF', '#77954D'],
        data: [
            ['Медведи 65%', 'Мёд 50%', 1],
            ['Медведи 65%', 'Малина 20%', 0.3],
            ['Медведи 65%', 'Яблоки 30%', 0.7],
            ['Ежи 35%', 'Мёд 50%', 0.7],
            ['Ежи 35%', 'Малина 20%', 0.5],
            ['Ежи 35%', 'Яблоки 30%', 0.6],
        ],
        linkOpacity: 0.85,
        dataLabels: {
            style: {
                fontSize: 20,
                lineHeight: 12,
                color: "#fff",
                whiteSpace: 'pre-wrap!important',
            },
        },
        type: 'sankey',
    }]
}



const Sankey = () => {
    SankeyChart(Highcharts)

    // Для градиентных линий
    Highcharts.seriesTypes.sankey.prototype.pointAttribs = function (point, state) {
        var opacity = this.options.linkOpacity,
            color = point.color;

        if (state) {
            opacity = this.options.states[state].linkOpacity || opacity;
            color = this.options.states[state].color || point.color;
        }

        return {
            fill: point.isNode ?
                color : {
                    linearGradient: {
                        x1: 0,
                        x2: 1,
                        y1: 0,
                        y2: 0
                    },
                    stops: [
                        [0, Highcharts.color(color).setOpacity(opacity).get()],
                        [1, Highcharts.color(point.toNode.color).setOpacity(opacity).get()]
                    ]
                }
        };
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}


export default Sankey