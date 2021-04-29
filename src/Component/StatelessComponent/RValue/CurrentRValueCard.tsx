import {Card} from "react-bootstrap";

import "../../../Main.css";

export function CurrentRValueCard(data: any) : any {
    let r = parseFloat(data[0].r_value);
    let header = "";
    let headerColor = "";

    if (r > 1) {
        header = "Growing Cases Alert";
        headerColor = "danger";
    } else if (r == 1) {
        header = "Stable";
        headerColor = "warning";
    } else if (r < 1) {
        header = "Decreasing";
        headerColor = "success";
    }

    return (
        <Card style={{ width: '100%', textAlign: "center", marginBottom: 10}}>
            <div className={headerColor}>
                <Card.Header>
                    {header}
                </Card.Header>
            </div>
            <Card.Body>
                <Card.Title>{data[0].location === "Alberta provincewide" ? "Alberta Average" : data[0].location}</Card.Title>
                <Card.Text>
                    <p style={{fontSize: 30}}>
                        <b>{data[0].r_value}</b>
                    </p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <i className="text-muted" style={{fontSize: 12}}>{data[0].date_range_string}</i>
            </Card.Footer>
        </Card>
    );
}