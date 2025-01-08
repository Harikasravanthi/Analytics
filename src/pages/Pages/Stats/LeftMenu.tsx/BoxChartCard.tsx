import { Card, CardBody, CardHeader } from "reactstrap";

import { Basic } from "pages/Charts/ApexCharts/BoxplotCharts/BoxplotCharts";

// function getRandomBoxPlotData(numYears : any) {
//   const data = [];

//   for (let i = 0; i < numYears; i++) {
//     const year = `Jan ${2015 + i}`;

//     // Generate random values for Q1, Q2 (median), Q3
//     const q1 = Math.floor(Math.random() * 50) + 30; // Random value between 30 and 80
//     const q2 = Math.floor(Math.random() * (80 - q1)) + q1; // Random value between Q1 and Q3
//     const q3 = Math.floor(Math.random() * (100 - q2)) + q2; // Random value between Q2 and 100

//     // Set min and max values
//     const min = Math.min(q1 - Math.floor(Math.random() * 10), 20); // Ensure min is not less than 20
//     const max = Math.max(q3 + Math.floor(Math.random() * 10), 100); // Ensure max is at least 100

//     // Push the generated data
//     data.push({
//       x: year,
//       y: [min, q1, q2, q3, max],
//     });
//   }

//   return {
//     type: "boxPlot",
//     data: data,
//   };
// }

const BoxChartCard = () => {
  // const boxPlotData = getRandomBoxPlotData(8);

  // // Adjust the data to remove whiskers
  // const adjustedBoxPlotData = [{
  //   type: "boxPlot",
  //   data: boxPlotData.data.map((item) => {
  //     const [min, q1, median, q3, max] = item.y;
  //     return {
  //       x: item.x,
  //       y: [q1, median, q3, q3, q1], // Set whiskers to the same as Q1 and Q3
  //     };
  //   }),
  // }];

  return (
    <Card>
      <CardHeader>
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Monthly growth</h4>
          <select
            className="form-select mb-0"
            aria-label="Select duration"
            style={{ maxWidth: "200px" }}
            defaultValue="12" // Set default value to 12 months
          >
            <option value="">Select Duration</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="9">9 Months</option>
            <option value="12" selected>
              12 Months
            </option>
            <option value="15">15 Months</option>
            <option value="18">18 Months</option>
            <option value="21">21 Months</option>
            <option value="24">24 Months</option>
            <option value="27">27 Months</option>
            <option value="30">30 Months</option>
            <option value="33">33 Months</option>
            <option value="36">36 Months</option>
            <option value="39">39 Months</option>
            <option value="42">42 Months</option>
            <option value="45">45 Months</option>
            <option value="48">48 Months</option>
          </select>
        </div>
      </CardHeader>
      <CardBody>
        <Basic 
        dataColors='["--vz-primary", "--vz-info"]' 
        // series={adjustedBoxPlotData}
        />
      </CardBody>
    </Card>
  );
};

export default BoxChartCard;
