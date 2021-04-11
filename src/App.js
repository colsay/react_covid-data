import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';



export default function App() {
  const [Case, setCases] = useState();

  useEffect(() => {

    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:8080'
      )
      setCases(data)
      console.log(data)
    };
    fetchData();
  }, []);

  return (




    <div className="App">
      <h1>Covid Cases in Hong Kong</h1>
      <Row>
        {Case &&

          Case.map((Case, index) =>

            <Col xs="3">
              <Card body>
                <CardTitle tag="h5" key={index}>District:{Case.district}</CardTitle>
                <CardText>Adress:{Case.address}</CardText>
                <CardText>Case:{Case.count}</CardText>
              </Card>
            </Col>


            // {/* <p key={index}>  District:{Case.district} </p> */ }
            // {/* <p>Adress:{Case.address}</p> <p>Case:{Case.count}</p> */ }
            // {/* <hr></hr> */ }

          )
        }

      </Row>

    </div >
  );

}