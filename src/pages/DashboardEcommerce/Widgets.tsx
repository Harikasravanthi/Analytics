import React from 'react';
import CountUp from "react-countup";
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';
import { ecomWidgets } from "../../common/data";
import { BasicLineCharts, ZoomableTimeseries } from 'pages/Charts/ApexCharts/LineCharts/LineCharts';

const Widgets = () => {
    return (
        <React.Fragment>
            {ecomWidgets.map((item, key) => (
                <Col xl={6} md={6} key={key}>
                    <Card className="card-animate">
                        <CardBody>
                           
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="fs-18 text-muted text-truncate mb-0">{item.label}</p>
                                </div>
                                
                                
                            
                            <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden mt-4">
                                    <h4 className="fw-medium text-dark text-truncate mb-0">₦ {item.counter}k</h4>
                                </div> 
                                <div className="flex-shrink-0">
                                    <h5 className={"fs-14 mb-0 text-" + item.badgeClass}>
                                        {item.badge ? <i className={"fs-13 align-middle " + item.badge}></i> : null} {item.percentage} %
                                    </h5>
                                </div>
                                </div> 
                            <div className="align-items-end justify-content-between mt-4">
                            <ZoomableTimeseries dataColors='["--vz-primary"]' label={item.label}/>
                            </div>
                        </CardBody>
                    </Card>
                </Col>))}
        </React.Fragment>
    );
};

export default Widgets;