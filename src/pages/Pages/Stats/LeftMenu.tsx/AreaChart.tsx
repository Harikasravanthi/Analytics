import { useMemo } from "react";
import { BasicAreaCharts } from "pages/Charts/ApexCharts/AreaCharts/AreaCharts";
import TableContainer from "Components/Common/TableContainerReactTable";

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
    heading: string;
    [key: string]: number | string; // Allow dynamic keys with number values
  };

  const records: Record[] = [];

  for (let i = 0; i < headings.length; i++) {
    const record: Record = { heading: headings[i] };

    for (let day = 1; day <= 30; day++) {
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

const getRandomAmount = (min: any, max: any) => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
};

interface IAreaChartProps {
  title?: string;
  showTable?: boolean;
}
const AreaChart = ({ title, showTable }: IAreaChartProps) => {
  const defaultTable = useMemo(() => generateRandomTable(), []);

  const series = generateSmoothSeriesData();

  const totalAmount = Math.floor(Math.random() * 200000); // Random amount between 0 and 200,000
  const percentageChange = (Math.random() * 4 - 2).toFixed(2); // Random percentage change between -2% and +2%
  const isPositive = Number(percentageChange) >= 0;

  const columns = [
    {
      header: "Heading",
      accessorKey: "heading",
      cell: (cell: any) => (
        <span className="fw-semibold">{cell.getValue()}</span>
      ),
    },
    ...Array.from({ length: 30 }, (_, index) => ({
      header: `May ${index + 1}`,
      accessorKey: `day${index + 1}`,
      width: "20px",
      renderValue: (value: any) => (
        <span className="fw-semibold">123 {value}</span>
      ),
    })),
  ];

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
      <BasicAreaCharts dataColors='["--vz-primary"]' series={series} />
      {showTable && (
        <div className="mt-5">
          <div className="table-responsive table-card">
            <TableContainer columns={columns} data={defaultTable} />
          </div>
        </div>
      )}
    </>
  );
};

export default AreaChart;
