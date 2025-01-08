import { useMemo, useState } from "react";
import { BasicAreaCharts } from "pages/Charts/ApexCharts/AreaCharts/AreaCharts";
import TableContainer from "Components/Common/TableContainerReactTable";
import "./AreaChart.css";
import { Col, Row } from "reactstrap";

function generateRandomTable() {
  const headings = [
    "New",
    "Expansion",
    "Reactivation",
    "Contraction",
    "Churn",
    "Net Change",
  ];

  // Define a type for the records
  type Record = {
    [key: string]: number | string; // Allow dynamic keys with number values
  };

  const records: Record[] = [];

  for (let i = 0; i < headings.length; i++) {
    const record: Record = {};

    for (let day = 1; day <= 20; day++) {
      // Generate a random value between 0 and 200
      const randomValue = Math.floor(Math.random() * 201);
      record[`day${day}`] = randomValue; // This is now valid
    }

    records.push(record);
  }

  return records;
}

function getRandomFluctuation(basePrice: any, maxFluctuation: any) {
  // Generate a random fluctuation within the specified range
  return Math.random() * maxFluctuation * 2 - maxFluctuation; // Fluctuation can be negative or positive
}

function generateSmoothSeriesData() {
  const prices = [];
  const initialPrice = 8500; // Starting price
  const maxFluctuation = 50; // Maximum fluctuation per step

  // Start with the initial price
  prices.push(initialPrice);

  for (let j = 1; j < 20; j++) {
    // Generate 20 data points
    const lastPrice = prices[j - 1];
    const newPrice = parseFloat(
      (lastPrice + getRandomFluctuation(lastPrice, maxFluctuation)).toFixed(2)
    );
    prices.push(newPrice);
  }

  return prices;
}

function generateDates() {
  const dates = [];

  for (let j = 1; j < 20; j++) {
    // Generate 20 data points
    dates.push(`May ${j}`);
  }

  return dates;
}

const getRandomAmount = (min: any, max: any) => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
};

interface IAreaChartProps {
  title?: string;
  showTable?: boolean;
}
const AreaChart = ({ title, showTable }: IAreaChartProps) => {
  const defaultTable = useMemo(() => generateRandomTable(), [title]);

  const series = useMemo(() => {
    return generateSmoothSeriesData();
  }, [title]);

  const dates = useMemo(() => generateDates(), [title]);

  const totalAmount = Math.floor(Math.random() * 200000); // Random amount between 0 and 200,000
  const percentageChange = (Math.random() * 4 - 2).toFixed(2); // Random percentage change between -2% and +2%
  const isPositive = Number(percentageChange) >= 0;

  const columns = useMemo(() => {
    const columns = [
      ...Array.from({ length: 20 }, (_, index) => ({
        header: `May ${index + 1}`,
        accessorKey: `day${index + 1}`,
        width: "20px",
        renderValue: (value: any) => (
          <span className="fw-semibold">123 {value}</span>
        ),
      })),
    ];

    return columns;
  }, [title]);

  const [selectedColumn, setSelectedColumn] = useState<any>(null);

  const handleDateClick = (xAxisData: any) => {
    // Set the selected column based on the clicked date
    setSelectedColumn(columns[xAxisData-1]?.accessorKey);

    // Assuming each date corresponds to a div with an id like 'col_1', 'col_2', etc.
    const targetId = `col_${columns[xAxisData-1]?.accessorKey}`; // Adjust this based on your actual id naming convention
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll the target element into view
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      // Get the container that holds the scrollable elements
      const container = targetElement.parentElement; // Adjust this if your structure is different

      if (container) {
        // Adjust the scroll position of the container
        const offset = 150; // The offset in pixels
        container.scrollLeft +=
          targetElement.getBoundingClientRect().left -
          container.getBoundingClientRect().left -
          offset;
      }
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <span className="text-muted text-uppercase d-block mb-2">
            {title}
          </span>
          <h2 className="fw-bold mb-2">₦ {totalAmount.toLocaleString()} </h2>
          <div className="d-flex align-items-center gap-2">
            <span
              className={`badge ${
                isPositive
                  ? "bg-success-subtle text-success"
                  : "bg-danger-subtle text-danger"
              } mt-0`}
            >
              <i
                className={`bx ${
                  isPositive ? "bx-up-arrow-alt" : "bx-down-arrow-alt"
                }`}
              />{" "}
              {Math.abs(Number(percentageChange))} %
            </span>
            <p className="mb-0 text-muted">in selected period</p>
          </div>
        </div>
        <div>
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
      </div>
      <BasicAreaCharts
        dataColors='["--vz-primary"]'
        series={series}
        dates={dates}
        handleDateIndexClick={handleDateClick}
      />
      {showTable && (
        <div className="mt-5 d-flex">
          <Row>
            <Col md={2} lg={2} xl={2} xxl={2}>
              <div className="table-responsive table-card">
                <TableContainer
                  columns={[
                    {
                      header: "Breakdown",
                      accessorKey: "heading",
                      cell: (cell: any) => (
                        <span className="fw-semibold">{cell.getValue()}</span>
                      ),
                    },
                  ]}
                  data={[
                    {
                      heading: "New",
                    },
                    {
                      heading: "Expansion",
                    },
                    {
                      heading: "Reactivation",
                    },
                    {
                      heading: "Contraction",
                    },
                    {
                      heading: "Churn",
                    },
                    {
                      heading: "Net Change",
                    },
                  ]}
                />
              </div>
            </Col>
            <Col md={10} lg={10} xl={10} xxl={10}>
              <div
                className="table-responsive table-card"
                style={{ width: "58vw" }}
              >
                <TableContainer
                  columns={columns}
                  data={defaultTable}
                  tableClass={""}
                  theadClass={""}
                  trClass={""}
                  thClass={""}
                  divClass={""}
                  selectedColumn={selectedColumn}
                />
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default AreaChart;
