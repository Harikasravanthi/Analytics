import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { BankBalance, BurnRate, DashedLine, NetProfit, Runway } from 'pages/Charts/ApexCharts/LineCharts/LineCharts';
import { ProfitLine } from 'pages/Charts/ApexCharts/LineCharts/LineCharts';
import { RevenueCharts } from 'pages/DashboardEcommerce/DashboardEcommerceCharts';
import Revenue from 'pages/DashboardEcommerce/Revenue';
import { BasicColumn } from 'pages/Charts/ApexCharts/ColumnCharts/ColumnCharts';

const Starter = () => {
  document.title = "Starter | Swipe36 ";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col>
              <div className="h-100">
               
                <Row>
                
                 <Col xl={6}>
                 <Card className="card-animate">
                  <CardBody>
                  <h4>Revenue</h4>
                    <DashedLine dataColors='["--vz-primary", "--vz-success", "--vz-warning"]' />
                  </CardBody>
                    </Card>
                 </Col>
                
                 <Col xl={6}>
                 <Card className="card-animate">
                  <CardBody>
                  <h4>Profit</h4>
                    <ProfitLine dataColors='["--vz-primary", "--vz-success", "--vz-warning"]' />
                    </CardBody>
                    </Card>
                 </Col>
               
                
                </Row>


                <Row>
                
                <Col xl={4}>
                <Card className="card-animate">
                 <CardBody>
                 <h4>Bank Balance</h4>
                   <BankBalance dataColors='["--vz-primary", "--vz-success", "--vz-warning"]' />
                 </CardBody>
                   </Card>
                </Col>
               
                <Col xl={4}>
                <Card className="card-animate">
                 <CardBody>
                 <h4>Runway</h4>
                   <Runway dataColors='["--vz-primary", "--vz-success", "--vz-warning"]' />
                   </CardBody>
                   </Card>
                </Col>

                <Col xl={4}>
                <Card className="card-animate">
                 <CardBody>
                 <h4>Expense Breakdown</h4>
                 <div className="w-100 mt-4">
                 <BasicColumn dataColors='["--vz-warning", "--vz-primary", "--vz-info"]'/>
                 </div>
                   </CardBody>
                   </Card>
                </Col>
              
               
               </Row>

               <Row>
                
                <Col xl={4}>
                <Card className="card-animate">
                 <CardBody>
                 <h4>Net Profit</h4>
                   <NetProfit dataColors='["--vz-primary", "--vz-success", "--vz-warning"]' />
                 </CardBody>
                   </Card>
                </Col>
               
                <Col xl={4}>
                <Card className="card-animate">
                 <CardBody>
                 <h4>Burn Rate</h4>
                   <BurnRate dataColors='["--vz-primary", "--vz-success", "--vz-warning"]' />
                   </CardBody>
                   </Card>
                </Col>

                <Col xl={4}>
                <Card className="card-animate">
                 <CardBody>
                 <h4>Fixed vs Variable</h4>
                  <Revenue />
                   </CardBody>
                   </Card>
                </Col>
              
               
               </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Starter;