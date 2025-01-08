import React, { useMemo, useState } from "react";
import StatsMRR from "./MRR/StatsMRR";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Table,
  UncontrolledDropdown,
} from "reactstrap";
import { BasicAreaCharts } from "pages/Charts/ApexCharts/AreaCharts/AreaCharts";
import { Link } from "react-router-dom";
import TableContainer from "Components/Common/TableContainerReactTable";
import Nouislider from "nouislider-react";

const StatsIndex = () => {
  const defaultTable = [
    {
      heading: "New",
      day1: 50,
      day2: 125,
      day3: 163,
      day4: 375,
      day5: 50,
      day6: 250,
      day7: 50,
    },
    {
      heading: "Expansion",
      day1: 0,
      day2: 615,
      day3: 233,
      day4: 68,
      day5: 165,
      day6: 1148,
      day7: 66,
    },
    {
      heading: "Reactivation",
      day1: 0,
      day2: 0,
      day3: 0,
      day4: 0,
      day5: 0,
      day6: 0,
      day7: 0,
    },
    {
      heading: "Contraction",
      day1: 0,
      day2: 0,
      day3: -74,
      day4: -18,
      day5: 0,
      day6: -50,
      day7: 0,
    },
    {
      heading: "Churn",
      day1: 0,
      day2: -150,
      day3: -1220,
      day4: -125,
      day5: -131,
      day6: -650,
      day7: 0,
    },
    {
      heading: "Net Change",
      day1: 50,
      day2: 590,
      day3: -898,
      day4: 300,
      day5: 84,
      day6: 698,
      day7: 116,
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: "Heading",
        accessorKey: "heading",
        cell: (cell: any) => (
          <span className="fw-semibold">{cell.getValue()}</span>
        ),
      },
      { header: "Day 1", accessorKey: "day1" },
      { header: "Day 2", accessorKey: "day2" },
      { header: "Day 3", accessorKey: "day3" },
      { header: "Day 4", accessorKey: "day4" },
      { header: "Day 5", accessorKey: "day5" },
      { header: "Day 6", accessorKey: "day6" },
      { header: "Day 7", accessorKey: "day7" },
    ],
    []
  );

  const [modal_grid, setmodal_grid] = useState<boolean>(false);
  function tog_grid() {
    setmodal_grid(!modal_grid);
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xxl={2}>
              <div className="btn text-uppercase text-muted fs-6">Revenue</div>
              <div className="d-flex align-items-start mb-3">
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link text-start active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    MRR
                  </button>
                  <button
                    className="nav-link text-start"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    ARR
                  </button>
                  <button
                    className="nav-link text-start"
                    id="v-pills-disabled-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-disabled"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-disabled"
                    aria-selected="false"
                  >
                    Net Revenue
                  </button>
                  <button
                    className="nav-link text-start"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    MRR Growth Rate
                  </button>
                  <button
                    className="nav-link text-start"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Fees
                  </button>
                  <button
                    className="nav-link text-start"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Other Revenue
                  </button>
                  <button
                    className="nav-link text-start"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Quick Ratio
                  </button>
                </div>
              </div>
              <div className="btn text-uppercase text-muted fs-6">
                {" "}
                Customer{" "}
              </div>
              <div className="d-flex align-items-start">
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link text-start"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    ARPU
                  </button>
                  <button
                    className="nav-link text-start"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    ASP
                  </button>
                  <button
                    className="nav-link text-start"
                    id="v-pills-disabled-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-disabled"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-disabled"
                    aria-selected="false"
                  >
                    LTV
                  </button>
                  <button
                    className="nav-link text-start"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    New Customers
                  </button>
                  <button
                    className="nav-link text-start"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Fees
                  </button>
                </div>
              </div>
            </Col>
            <Col xxl={10}>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="h-100">
                    <Card className="card mb-3">
                      <CardHeader>
                        <div className="d-flex gap-2">
                          <Button className="btn btn-outline-dark">
                            Compare Plans
                          </Button>
                          <Button className="btn btn-outline-dark">
                            Compare Segments
                          </Button>
                          <Button className="btn btn-outline-dark">
                            Compare Segments
                          </Button>
                          <Dropdown id="dropdownMenuButton1">
                            <DropdownToggle
                              caret
                              className="btn btn-outline-dark"
                            >
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu container="body">
                              <DropdownItem>Action 1</DropdownItem>
                              <DropdownItem>Action 2</DropdownItem>
                              <DropdownItem>Action 3</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                          <Dropdown id="dropdownMenuButton2">
                            <DropdownToggle
                              caret
                              className="btn btn-outline-dark"
                            >
                              Reset
                            </DropdownToggle>
                            <DropdownMenu container="body">
                              <DropdownItem>Action 1</DropdownItem>
                              <DropdownItem>Action 2</DropdownItem>
                              <DropdownItem>Action 3</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                          <Button className="btn btn-outline-dark">
                            Annotations
                          </Button>
                          <Button className="btn btn-danger">Reset</Button>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <BasicAreaCharts dataColors='["--vz-primary"]' />
                        <div className="mt-5">
                          <div className="table-responsive table-card">
                            {/* <TableContainer
                              columns={columns}
                              data={defaultTable}
                              
                              
                            /> */}
                            <Table className="align-middle table-nowrap mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th scope="col">BREAKOUT</th>
                                  <th scope="col">MAY 1</th>
                                  <th scope="col">MAY 2</th>
                                  <th scope="col">MAY 2</th>
                                  <th scope="col">MAY 2</th>
                                  <th scope="col">MAY 2</th>
                                  {/* <th scope="col" style={{ width: "150px" }}>
                                    Action
                                  </th> */}
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="col">New</th>
                                  <td>$24.05</td>
                                  <td>$24.05</td>
                                  <td>$24.05</td>
                                  <td>$24.05</td>
                                  <td>$24.05</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                    <Card className="mb-3 p-3 rounded">
                      <CardBody>
                        <Row>
                          <Col lg={2}>
                            <div className="text-center">
                              <p className="text-muted">Current</p>
                              <h3 className="text-dark fw-bold">$177,378</h3>
                            </div>
                          </Col>
                          <Col lg={2}>
                            <div className="text-center">
                              <p className="text-muted">1 month ago</p>
                              <h3 className="text-dark fw-bold">$177,378</h3>
                              <span className="badge bg-success-subtle text-success mt-3">
                                <i className=" bx bx-up-arrow-alt" /> 1.67 %
                              </span>
                            </div>
                          </Col>
                          <Col lg={2}>
                            <div className="text-center">
                              <p className="text-muted">3 months ago</p>
                              <h3 className="text-dark fw-bold">$177,378</h3>
                              <span className="badge bg-success-subtle text-success mt-3">
                                <i className=" bx bx-up-arrow-alt" /> 1.67 %
                              </span>
                            </div>
                          </Col>
                          <Col lg={2}>
                            <div className="text-center">
                              <p className="text-muted">6 months ago</p>
                              <h3 className="text-dark fw-bold">$177,378</h3>
                              <span className="badge bg-success-subtle text-success mt-3">
                                <i className=" bx bx-up-arrow-alt" /> 1.67 %
                              </span>
                            </div>
                          </Col>
                          <Col lg={2}>
                            <div className="text-center">
                              <p className="text-muted">12 months ago</p>
                              <h3 className="text-dark fw-bold">$177,378</h3>
                              <span className="badge bg-success-subtle text-success mt-3">
                                <i className=" bx bx-up-arrow-alt" /> 1.67 %
                              </span>
                            </div>
                          </Col>
                          <Col lg={2}>
                            <div className="text-center">
                              <p className="text-muted">24 months ago</p>
                              <h3 className="text-dark fw-bold">$177,378</h3>
                              <span className="badge bg-success-subtle text-success mt-3">
                                <i className=" bx bx-up-arrow-alt" /> 1.67 %
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>
                        <div className="d-flex align-items-center justify-content-between">
                          <h4 className="mb-0">Goals</h4>
                          <Button color="light" className="btn btn-icon">
                            <i className="bx bx-plus" />{" "}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <Row className="py-3 align-items-center">
                          <Col lg={4}>
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="text-muted mb-0">
                                2022 Q1 Target
                              </h6>
                              <ButtonGroup>
                                <UncontrolledDropdown>
                                  <DropdownToggle
                                    tag="button"
                                    className="btn btn-light"
                                  >
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
                              <p className="text-muted">November 10, 2024</p>
                              <p className="text-muted">February 4, 2025</p>
                            </div>
                            <div className="my-3">
                              <Nouislider
                                range={{ min: 0, max: 100 }}
                                start={[20, 80]}
                                connect
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="mb-0 text-muted">$181,318.80</p>
                              <p className="mb-0 text-dark">
                                4.32% · Underpacing by $15,490.26
                              </p>
                              <p className="mb-0 text-muted">$198,000</p>
                            </div>
                          </Col>
                        </Row>
                        <Row className="py-3 align-items-center border-top border-dark border-opacity-10">
                          <Col lg={4}>
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="text-muted mb-0">
                                2022 Q1 Target
                              </h6>
                              <ButtonGroup>
                                <UncontrolledDropdown>
                                  <DropdownToggle
                                    tag="button"
                                    className="btn btn-light"
                                  >
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
                              <p className="text-muted">November 10, 2024</p>
                              <p className="text-muted">February 4, 2025</p>
                            </div>
                            <div className="my-3">
                              <Nouislider
                                range={{ min: 0, max: 100 }}
                                start={[20, 80]}
                                connect
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="mb-0 text-muted">$181,318.80</p>
                              <p className="mb-0 text-dark">
                                4.32% · Underpacing by $15,490.26
                              </p>
                              <p className="mb-0 text-muted">$198,000</p>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                      <CardFooter>
                        <Button color="light" className="text-muted">
                          Show completed goals
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <div className="d-flex align-items-center justify-content-between">
                          <h4 className="mb-0">Monthly growth</h4>
                          <select
                            className="form-select mb-0"
                            aria-label="Default select example"
                            style={{ maxWidth: "200px" }}
                          >
                            <option>Select your Status </option>
                            <option defaultValue="1">Declined Payment</option>
                            <option defaultValue="2">Delivery Error</option>
                            <option defaultValue="3">Wrong Amount</option>
                          </select>
                        </div>
                      </CardHeader>
                      <CardBody>Chart</CardBody>
                    </Card>
                    <div className="bg-light p-2 d-flex align-items-center gap-2 mb-3">
                      <Button
                        className="btn btn-primary d-flex align-items-center gap-2"
                        onClick={() => setmodal_grid(true)}
                      >
                        <i className=" bx bx-plus"></i>Set goal
                      </Button>
                      <p className="mb-0 text-muted">
                        Set goals for your business and track your progress
                        toward them!
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        isOpen={modal_grid}
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
          Set Quick Ratio goal

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
                  <i className=" bx bxs-right-arrow-alt"/>
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
                  <i className=" bx bxs-right-arrow-alt"/>
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
                  <Button color="light" onClick={() => setmodal_grid(false)}>
                    Close
                  </Button>
                  <Button color="primary">Submit</Button>
                </div>
              </Col>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default StatsIndex;
