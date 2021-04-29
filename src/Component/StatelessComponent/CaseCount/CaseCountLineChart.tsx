import {ResponsiveLine} from "@nivo/line";
import React from "react";


export function CaseCountLineChart(dataArray: any) : any{
    return (
        <div className="col-md-12" style={{height: 500}}>
            <ResponsiveLine
                data={dataArray}
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
                    legendOffset: -60,
                    legendPosition: "middle"
                }}
                axisBottom={{
                    format: "%b %d",
                    legend: "time scale",
                    legendOffset: 40,
                    legendPosition: "middle"
                }}
                colors={{ scheme: "category10" }}
                enablePoints={false}
                pointSize={0}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabel="y"
                pointLabelYOffset={-12}
                useMesh={false}
                enableCrosshair={true}
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
    );
}