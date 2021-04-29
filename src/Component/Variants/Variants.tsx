import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import CovidStats from "../../Middleware/CovidStats/CovidStats";
import {CurrentVariantsCard} from "../StatelessComponent/Variants/CurrentVariantsCard";
import {Card} from "react-bootstrap";

export default class Variants extends React.Component {
    state = {
        calgaryCurrent: <FontAwesomeIcon icon={faCircleNotch} size="lg" spin/>,
        edmontonCurrent: <FontAwesomeIcon icon={faCircleNotch} size="lg" spin/>,
        northCurrent: <FontAwesomeIcon icon={faCircleNotch} size="lg" spin/>,
        southCurrent: <FontAwesomeIcon icon={faCircleNotch} size="lg" spin/>,
        centralCurrent: <FontAwesomeIcon icon={faCircleNotch} size="lg" spin/>,
        albertaCurrent: <FontAwesomeIcon icon={faCircleNotch} size="lg" spin/>
    }

    componentDidMount = async () => {
        let albertaCurrent = await CovidStats.GetCurrentVariantCasesByZone("In Alberta");
        let calgaryCurrent = await CovidStats.GetCurrentVariantCasesByZone("Calgary Zone");
        let edmontonCurrent = await CovidStats.GetCurrentVariantCasesByZone("Edmonton Zone");
        let northCurrent = await CovidStats.GetCurrentVariantCasesByZone("North Zone");
        let southCurrent = await CovidStats.GetCurrentVariantCasesByZone("South Zone");
        let centralCurrent = await CovidStats.GetCurrentVariantCasesByZone("Central Zone");

        this.state.albertaCurrent = CurrentVariantsCard(albertaCurrent)
        this.state.calgaryCurrent = CurrentVariantsCard(calgaryCurrent);
        this.state.edmontonCurrent = CurrentVariantsCard(edmontonCurrent);
        this.state.northCurrent = CurrentVariantsCard(northCurrent);
        this.state.southCurrent = CurrentVariantsCard(southCurrent);
        this.state.centralCurrent = CurrentVariantsCard(centralCurrent);

        this.setState(this.state);
    }

    render = () => {
        return (
            <div className="container" style={{maxWidth: "3000px", textAlign: "center"}}>
                <Card style={{ width: '100%', marginBottom: 20}}>
                    <Card.Body>
                        <Card.Title>
                            <p style={{fontSize: "30px"}}>
                                <b>Variants of Concern</b>
                            </p>
                        </Card.Title>
                        <Card.Text>
                            <blockquote className="blockquote" style={{maxWidth: "700px", margin: "auto auto", fontSize: "15px"}}>
                                <p className="mb-0">
                                    Variants are viruses that have changed or mutated while reproducing inside an infected person’s cells. Variants can spread to others and may continue mutating as they move from person to person. It is normal for viruses to mutate over time.
                                </p>
                                <br/>
                                <p className="mb-0">
                                    Variants of concern can spread more easily. They can also cause more serious illness that could result in more hospitalizations and deaths as they become common in the community.
                                </p>
                                <br/>
                                <p className="mb-0">
                                    COVID-19 variants of concern were first identified in the United Kingdom, South Africa and Brazil. These strains have since been detected in Alberta and in countries around the world.
                                </p>
                                <br/>
                                <p className="mb-0">
                                    Alberta is monitoring for variants spreading in our province. Confirmed cases are updated daily.
                                </p>
                                <br/>
                                <footer className="blockquote-footer">
                                    <a href="https://www.alberta.ca/covid-19-variants.aspx">Government of Alberta</a>
                                </footer>
                            </blockquote>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '100%', marginBottom: 20}}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-md-4">
                                <div style={{marginRight: 10, marginLeft: 10}}>
                                    {this.state.albertaCurrent}
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div style={{marginRight: 10, marginLeft: 10}}>
                                    {this.state.edmontonCurrent}
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div style={{marginRight: 10, marginLeft: 10}}>
                                    {this.state.calgaryCurrent}
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '100%', marginBottom: 20}}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-md-4">
                                <div style={{marginRight: 10, marginLeft: 10}}>
                                    {this.state.northCurrent}
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div style={{marginRight: 10, marginLeft: 10}}>
                                    {this.state.centralCurrent}
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div style={{marginRight: 10, marginLeft: 10}}>
                                    {this.state.southCurrent}
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}