import React from 'react';
import { Container } from 'reactstrap';

// import Components
import BreadCrumb from '../../Components/Common/BreadCrumb';

import TileBoxs from './TileBoxs';
import OtherWidgets from './OtherWidgets';
import UpcomingActivity from './UpcomingActivities';
import EcommerceWidgets from './EcommerenceWidget';
import CreditCard from './Creaditcard';

const Widgets = () => {
    document.title = "Widgets | Swipe36 ";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Widgets" pageTitle="Swipe36" />
                    {/* Tile Boxs Widgets */}
                    <TileBoxs />

                    {/* Other Widgets */}
                    <OtherWidgets 
                    // dataColors='["--vz-success", "--vz-danger"]'
                    />

                    {/* Upcoming Activity */}
                    <UpcomingActivity />

                    {/* Chart & EcommerceWidgets  */}
                    <EcommerceWidgets />

                    {/* CreditCard */}
                    <CreditCard />

                </Container>
            </div>
        </React.Fragment>
    );
};

export default Widgets;
