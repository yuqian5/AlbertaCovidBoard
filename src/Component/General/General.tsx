import React from "react";
import {Button, Jumbotron} from "react-bootstrap";

import CovidStats from "../../Middleware/CovidStats/CovidStats"

import {Link} from "react-router-dom";

import { ResponsiveLine } from '@nivo/line'

export default class General extends React.Component {
    state = {
        AlbertaDailyCases: <div/>
    }

    componentDidMount = async () => {
        let alberta = await CovidStats.GetDailyCaseCountForAlberta();
        let edmonton = await CovidStats.GetDailyCaseCountByZone("Edmonton Zone");
        let calgary = await CovidStats.GetDailyCaseCountByZone("Calgary Zone");
        let north = await CovidStats.GetDailyCaseCountByZone("North Zone");
        let south = await CovidStats.GetDailyCaseCountByZone("South Zone");
        this.state.AlbertaDailyCases =
                <div className="col-md-12" style={{height: 500}}>
                    <ResponsiveLine
                        data={[south, north, calgary, edmonton, alberta, {id:"Baseline",data:[{x:"2020-03-24",y:0}]}]}
                        margin={{ top: 20, right: 40, bottom: 50, left: 65 }}
                        curve="basis"
                        enableSlices={"x"}
                        xScale={{
                            type: "time",
                            format: "%Y-%m-%d"
                        }}
                        xFormat="time:%Y-%m-%d"
                        yScale={{
                            type: "linear",
                            min: "auto",
                            max: "auto",
                            stacked: false,
                            reverse: false
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisLeft={{
                            orient: "left",
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: "count",
                            legendOffset: -40,
                            legendPosition: "middle"
                        }}
                        axisBottom={{
                            format: "%b %d",
                            legend: "time scale",
                            legendOffset: 30,
                            legendPosition: "middle"
                        }}
                        colors={{ scheme: "category10" }}
                        pointSize={0}
                        pointColor={{ theme: "background" }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: "serieColor" }}
                        pointLabel="y"
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: "top",
                                direction: "row",
                                justify: false,
                                translateX: 0,
                                translateY: -20,
                                itemsSpacing: 5,
                                itemDirection: "left-to-right",
                                itemWidth: 100,
                                itemHeight: 10,
                                itemOpacity: 0.75,
                                symbolSize: 10,
                                symbolShape: "circle",
                                symbolBorderColor: "rgba(0, 0, 0, .5)",
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemBackground: "rgba(0, 0, 0, .03)",
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Alberta Covid Board</h1>
                    <p>
                        Get the latest information on the Covid-19 situation in Alberta.
                    </p>
                    <p>
                        <Button as={Link} variant="primary" to="/RelaunchStatus">Check Reopening Progress</Button>
                    </p>
                </Jumbotron>

                <div className="row" style={{textAlign: "center"}}>
                    <h4 className="col-md-12">Daily New Cases</h4>
                    {this.state.AlbertaDailyCases}
                </div>

            </div>
        );
    }
}