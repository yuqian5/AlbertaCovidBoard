import {Card} from "react-bootstrap";

import { ResponsiveBar } from '@nivo/bar'

export function CurrentVariantsCard(data: any) : any {
    let dataTest = [
        {variant:"B.117", "B.117": data[0]["b_1_1_7"]},{variant:"B.1.351", "B.1.351": data[0]["b_1_351"]},{variant:"P.1", "P.1": data[0]["p_1"]}
    ]

    console.log(data)
    return (
        <Card style={{ width: '100%', textAlign: "center", marginBottom: 10}}>
            <Card.Body>
                <Card.Title>{data[0].zone}</Card.Title>
                <Card.Text>
                    <div style={{height: 550}}>
                        <ResponsiveBar
                            data={dataTest}
                            keys={[ "B.117", "B.1.351", "P.1" ]}
                            indexBy="variant"
                            margin={{ top: 10, right: 10, bottom: 50, left: 60 }}
                            padding={0.2}
                            valueScale={{ type: 'linear' }}
                            indexScale={{ type: 'band', round: true }}
                            colors={{ scheme: 'category10' }}
                            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                            defs={[
                                {
                                    id: 'B.117',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: '#1f77b4',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },{
                                    id: 'B.1.351',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: '#ff7f0e',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },{
                                    id: 'P.1',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: '#2ca02c',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                            ]}
                            fill={[
                                {
                                    match: {
                                        id: 'fries'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: 'sandwich'
                                    },
                                    id: 'lines'
                                }
                            ]}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Variant',
                                legendPosition: 'middle',
                                legendOffset: 32
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Count',
                                legendPosition: 'middle',
                                legendOffset: -50
                            }}
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                            legends={[
                                {
                                    dataFrom: 'keys',
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 120,
                                    translateY: 0,
                                    itemsSpacing: 2,
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 0.85,
                                    symbolSize: 20,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                        />
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <i className="text-muted" style={{fontSize: 12}}>Last Updated: {data[0].date.split('T')[0]}</i>
            </Card.Footer>
        </Card>
    );
}