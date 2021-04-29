import React from "react";
import {Button, Card, Jumbotron} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import CovidStats from "../../Middleware/CovidStats/CovidStats"

import {Link} from "react-router-dom";

import DailyDataToCumulativeData from "../../Utility/DailyDataToCumulativeData";
import {CaseCountLineChart} from "../StatelessComponent/CaseCount/CaseCountLineChart";

export default class General extends React.Component {
    state = {
        AlbertaDailyCases: <FontAwesomeIcon icon={faCircleNotch} size="lg" spin/>,
        AlbertaCumulativeCases: <FontAwesomeIcon icon={faCircleNotch} size="lg" spin/>
    }

    componentDidMount = async () => {
        let alberta = await CovidStats.GetDailyCaseCountForAlberta();
        let edmonton = await CovidStats.GetDailyCaseCountByZone("Edmonton Zone");
        let calgary = await CovidStats.GetDailyCaseCountByZone("Calgary Zone");
        let north = await CovidStats.GetDailyCaseCountByZone("North Zone");
        let south = await CovidStats.GetDailyCaseCountByZone("South Zone");

        let albertaCumulative = DailyDataToCumulativeData(alberta);
        let edmontonCumulative = DailyDataToCumulativeData(edmonton);
        let calgaryCumulative = DailyDataToCumulativeData(calgary);
        let northCumulative = DailyDataToCumulativeData(north);
        let southCumulative = DailyDataToCumulativeData(south);

        this.state.AlbertaDailyCases = CaseCountLineChart([south, north, calgary, edmonton, alberta]);

        this.state.AlbertaCumulativeCases = CaseCountLineChart([southCumulative, northCumulative, calgaryCumulative, edmontonCumulative, albertaCumulative]);

        this.setState(this.state);
    }

    render() {
        return (
            <div className="container" style={{maxWidth: "3000px", textAlign: "center"}}>
                <Jumbotron>
                    <h1>Alberta Covid Board</h1>
                    <p>
                        Get the latest information on the Covid-19 situation in Alberta.
                    </p>
                    <p>
                        <Button as={Link} variant="primary" to="/RelaunchStatus">Check Reopening Progress</Button>
                    </p>
                </Jumbotron>

                <Card style={{ width: '100%', marginBottom: "20px"}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: "center"}}>Daily New Cases</Card.Title>
                        {this.state.AlbertaDailyCases}
                    </Card.Body>
                </Card>

                <Card style={{ width: '100%', marginBottom: "20px"}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: "center"}}>Cumulative Cases</Card.Title>
                        {this.state.AlbertaCumulativeCases}
                    </Card.Body>
                </Card>

            </div>
        );
    }
}