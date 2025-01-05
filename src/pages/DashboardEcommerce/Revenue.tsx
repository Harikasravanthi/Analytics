import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { RevenueCharts } from "./DashboardEcommerceCharts";
import CountUp from "react-countup";
import { useSelector, useDispatch } from "react-redux";
import { getRevenueChartsData } from "../../slices/thunks";
import { createSelector } from "reselect";

const Revenue = () => {
  const dispatch :any = useDispatch();

  const [chartData, setchartData] = useState<any>([]);

  const selectDashboardData = createSelector(
    (state:any) => state.DashboardEcommerce.revenueData,
    (revenueData) => revenueData
  );
  // Inside your component
  const revenueData = useSelector(selectDashboardData);

  useEffect(() => {
    setchartData(revenueData);
  }, [revenueData]);

  const onChangeChartPeriod = (pType:any) => {
    dispatch(getRevenueChartsData(pType));
  };

  useEffect(() => {
    dispatch(getRevenueChartsData("all"));
  }, [dispatch]);

  return (
    <React.Fragment>
    
          <div className="w-100 mt-3">
            <div dir="ltr">
              <RevenueCharts series={chartData} dataColors='["--vz-info", "--vz-primary", "--vz-danger"]' />
            </div>
          </div>
     
    </React.Fragment>
  );
};

export default Revenue;
