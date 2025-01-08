import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import Nouislider from "nouislider-react";

const getRandomDate = (start: Date, end: Date): string => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  // Define options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};

const getRandomAmount = (min: any, max: any) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const getRandomUnderpacing = (min: any, max: any) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const GoalsChart = ({ title }: any) => {
  const startDate = new Date(2024, 10, 10); // November 10, 2024
  const endDate = new Date(2025, 1, 4); // February 4, 2025

  const randomStartDate = getRandomDate(startDate, endDate);
  const randomEndDate = getRandomDate(startDate, endDate);
  const randomEndPoint = Math.floor(Math.random() * 100) + 1; // Random end point between 1 and 100
  const randomStartAmount = getRandomAmount(150000, 200000); // Random starting amount
  const randomEndAmount = getRandomAmount(200000, 250000); // Random ending amount
  const randomReachedPosition = Math.floor(getRandomAmount(0, randomEndPoint)); // Random reached position
  const underpacingPercentage = getRandomUnderpacing(1, 10); // Random underpacing percentage between 1% and 10%
  const underpacingAmount = getRandomAmount(1000, 20000); // Random underpacing amount

  const [showCompleted , setShowCompleted] = useState<boolean>(false);
  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);
  function tog_grid() {
    setShowGoalModal(!showGoalModal);
  }

  return (
    <Card>
      <CardHeader>
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Goals</h4>
          <Button
            color="light"
            className="btn btn-icon"
            onClick={() => setShowGoalModal(true)}
          >
            <i className="bx bx-plus" />{" "}
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <Row className="py-3 align-items-center">
          <Col lg={4}>
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="text-muted mb-0">2022 Q1 Target</h6>
              <ButtonGroup>
                <UncontrolledDropdown>
                  <DropdownToggle tag="button" className="btn btn-light">
                    <i className=" bx bx-dots-horizontal-rounded "></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </ButtonGroup>
            </div>
          </Col>
          <Col lg={8}>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-muted">{randomStartDate}</p>
              <p className="text-muted">{randomEndDate}</p>
            </div>
            <div
              className="my-3"
              data-slider-color="primary"
              style={{
                pointerEvents: "none",
              }}
            >
              <Nouislider
                range={{ min: 0, max: randomEndPoint }}
                start={[0, randomReachedPosition]}
                connect
              />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0 text-muted">₦ {randomStartAmount}</p>
              <p className="mb-0 text-dark">
                {underpacingPercentage}% · Underpacing by ₦ {underpacingAmount}
              </p>
              <p className="mb-0 text-muted">₦ {randomEndAmount}</p>
            </div>
          </Col>
        </Row>
        {showCompleted && (
          <Row className="py-3 align-items-center">
            <Col lg={4}>
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="text-muted mb-0">January 2021</h6>
                <ButtonGroup>
                  <UncontrolledDropdown>
                    <DropdownToggle tag="button" className="btn btn-light">
                      <i className=" bx bx-dots-horizontal-rounded "></i>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ButtonGroup>
              </div>
            </Col>
            <Col lg={8}>
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-muted">{randomStartDate}</p>
                <p className="text-muted">{randomEndDate}</p>
              </div>
              <div
                className="my-3"
                data-slider-color="primary"
                style={{
                  pointerEvents: "none",
                }}
              >
                <Nouislider
                  range={{ min: 0, max: randomEndPoint }}
                  start={[0, randomEndPoint]}
                  connect
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 text-muted">₦ {randomStartAmount}</p>
                <p className="mb-0 text-dark">
                  {underpacingPercentage}% · Underpacing by ₦{" "}
                  {underpacingAmount}
                </p>
                <p className="mb-0 text-muted">₦ {randomEndAmount}</p>
              </div>
            </Col>
          </Row>
        )}
      </CardBody>
      <CardFooter>
        <Button color="light" className="text-muted" onClick={() => setShowCompleted((p) => !p)}>
          {`${showCompleted ? "Hide" : "Show"}`} completed goals
        </Button>
      </CardFooter>
      <Modal
        isOpen={showGoalModal}
        toggle={() => {
          tog_grid();
        }}
      >
        <ModalHeader
          className="modal-title"
          toggle={() => {
            tog_grid();
          }}
        >
          Set {title} Goal
        </ModalHeader>
        <ModalBody>
          <form action="#">
            <div className="row g-3">
              <Col xxl={12}>
                <div>
                  <Input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Goal Name"
                  />
                </div>
              </Col>
              <Col xxl={12}>
                <div className="d-flex align-items-center w-100 gap-3">
                  <Input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="1.51"
                  />
                  <i className=" bx bxs-right-arrow-alt" />
                  <Input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="1.51"
                  />
                </div>
              </Col>
              <Col xxl={12}>
                <div className="d-flex align-items-center w-100 gap-3">
                  <Input
                    type="date"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter lastname"
                  />
                  <i className=" bx bxs-right-arrow-alt" />
                  <Input
                    type="date"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter lastname"
                  />
                </div>
              </Col>

              <Col lg={12}>
                <div className="hstack gap-2 justify-content-end">
                  <Button color="light" onClick={() => setShowGoalModal(false)}>
                    Close
                  </Button>
                  <Button color="primary">Submit</Button>
                </div>
              </Col>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </Card>
  );
};

export default GoalsChart;
