import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import {Card} from "react-bootstrap";

export default class Misc extends React.Component {
    state = {

    }

    componentDidMount = async () => {
        this.setState(this.state);
    }

    render() {
        return (
            <div className="container" style={{maxWidth: "3000px", textAlign: "center"}}>
                <Card style={{ width: '100%', marginBottom: 20}}>
                    <Card.Body>
                        <Card.Title>
                            <p style={{fontSize: "30px"}}>
                                <b>What is R<sub>0</sub>?</b>
                            </p>
                        </Card.Title>
                        <Card.Text>
                            <blockquote className="blockquote" style={{maxWidth: "700px", margin: "auto auto", fontSize: "15px"}}>
                                <p className="mb-0">
                                    Pronounced “R-naught,” it represents the number of new infections estimated to stem from a single case.
                                </p>
                                <br/>
                                <p className="mb-0">
                                    In other words, if R<sub>0</sub> is 2.5, then one person with the disease is expected to infect, on average, 2.5 others.
                                </p>
                                <br/>
                                <p className="mb-0">
                                    An R<sub>0</sub> below 1 suggests that the number of cases is shrinking, possibly allowing societies to open back up. An R<sub>0</sub> above 1 indicates that the number of cases is growing, perhaps necessitating renewed lockdowns or other measures.
                                </p>
                                <br/>
                                <footer className="blockquote-footer">Max Fisher in
                                    <cite title="Source Title"> <a href="https://www.nytimes.com/2020/04/23/world/europe/coronavirus-R0-explainer.html">R<sub>0</sub>, the Messy Metric That May Soon Shape Our Lives, Explained</a></cite>
                                </footer>
                            </blockquote>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}