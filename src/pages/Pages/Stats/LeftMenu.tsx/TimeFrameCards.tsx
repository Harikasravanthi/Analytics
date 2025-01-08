import {
  Card,
  CardBody,
  Col,
  Row
} from "reactstrap";

const generateRandomCardData = () => {
  const timeFrames = [
    "Current",
    "1 month ago",
    "3 months ago",
    "6 months ago",
    "12 months ago",
    "24 months ago",
  ];

  return timeFrames.map((timeFrame) => {
    const amount = Math.floor(Math.random() * 200000); // Random amount between 0 and 200,000
    const percentageChange = (Math.random() * 4 - 2).toFixed(2); // Random percentage change between -2% and +2%
    const isPositive = Number(percentageChange) >= 0;

    return {
      timeFrame,
      amount,
      percentageChange,
      isPositive,
    };
  });
};

const TimeFrameCards = () => {
  const cardsData = generateRandomCardData();

  return (
    <Card className="mb-3 p-3 rounded">
      <CardBody>
        <Row>
          {cardsData.map((item, index) => (
            <Col lg={2} key={index}>
              <div className="text-center">
                <p className="text-muted">{item.timeFrame}</p>
                <h3 className="text-dark fw-bold">
                  ₦ {item.amount.toLocaleString()}
                </h3>
                {item.timeFrame !== "Current" && (
                  <span
                    className={`badge ${
                      item.isPositive
                        ? "bg-success-subtle text-success"
                        : "bg-danger-subtle text-danger"
                    } mt-3`}
                  >
                    <i
                      className={`bx ${
                        item.isPositive
                          ? "bx-up-arrow-alt"
                          : "bx-down-arrow-alt"
                      }`}
                    />{" "}
                    {Math.abs(Number(item.percentageChange))} %
                  </span>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default TimeFrameCards;
