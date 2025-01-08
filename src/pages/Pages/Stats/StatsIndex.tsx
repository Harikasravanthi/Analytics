import React, { useLayoutEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import LeftMenu from "./LeftMenu.tsx/LeftMenu";

interface IChartSettings {
  areaChart: boolean;
  areaChartTable: boolean;
  timeFrameCards: boolean;
  goalsChart: boolean;
  monthlyGrowthChart: boolean;
  setGoalCard: boolean;
}

const INITIAL_STATE: IChartSettings = {
  areaChart: false,
  areaChartTable: false,
  timeFrameCards: false,
  goalsChart: false,
  monthlyGrowthChart: false,
  setGoalCard: false,
};
const StatsIndex = () => {
  const [leftMenuOptions, setLeftOptionsMenu] =
    useState<IChartSettings>(INITIAL_STATE);
  const [tabTitle, setTabTitle] = useState<string>("MRR");

  const handleTabToggle = (tab: string) => {
    let updatedState: IChartSettings = JSON.parse(
      JSON.stringify(INITIAL_STATE)
    );

    switch (tab) {
      case "MRR":
        updatedState.areaChart = true;
        updatedState.areaChartTable = true;
        updatedState.timeFrameCards = true;
        updatedState.goalsChart = true;
        updatedState.monthlyGrowthChart = true;
        break;
      case "ARR":
        updatedState.areaChart = true;
        updatedState.timeFrameCards = true;
        updatedState.goalsChart = true;
        break;
      case "Net Revenue":
        updatedState.areaChart = true;
        updatedState.timeFrameCards = true;
        updatedState.goalsChart = true;
        break;
      case "MRR Growth Rate":
        updatedState.areaChart = true;
        updatedState.timeFrameCards = true;
        updatedState.setGoalCard = true;
        break;
      case "Other Revenue":
        updatedState.areaChart = true;
        updatedState.timeFrameCards = true;
        updatedState.goalsChart = true;
        break;
      case "Quick Ratio":
        updatedState.areaChart = true;
        updatedState.timeFrameCards = true;
        updatedState.setGoalCard = true;
        break;
      case "ARPU":
        updatedState.areaChart = true;
        updatedState.timeFrameCards = true;
        updatedState.setGoalCard = true;
        break;
      case "ASP":
        updatedState.areaChart = true;
        updatedState.timeFrameCards = true;
        updatedState.setGoalCard = true;
        break;
      case "LTV":
        updatedState.areaChart = true;
        updatedState.timeFrameCards = true;
        updatedState.setGoalCard = true;
        break;
      default:
        break;
    }

    setTabTitle(tab);
    setLeftOptionsMenu(updatedState);
  };

  useLayoutEffect(() => {
    handleTabToggle("MRR");
  }, []);

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
                    className={`nav-link text-start ${
                      tabTitle === "MRR" ? "active" : ""
                    }`}
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                    onClick={() => handleTabToggle("MRR")}
                  >
                    MRR
                  </button>
                  <button
                    className={`nav-link text-start ${
                      tabTitle === "ARR" ? "active" : ""
                    }`}
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                    onClick={() => handleTabToggle("ARR")}
                  >
                    ARR
                  </button>
                  <button
                    className={`nav-link text-start ${
                      tabTitle === "Net Revenue" ? "active" : ""
                    }`}
                    id="v-pills-disabled-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-disabled"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-disabled"
                    aria-selected="false"
                    onClick={() => handleTabToggle("Net Revenue")}
                  >
                    Net Revenue
                  </button>
                  <button
                    className={`nav-link text-start ${
                      tabTitle === "MRR Growth Rate" ? "active" : ""
                    }`}
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                    onClick={() => handleTabToggle("MRR Growth Rate")}
                  >
                    MRR Growth Rate
                  </button>
                  <button
                    className={`nav-link text-start ${
                      tabTitle === "Other Revenue" ? "active" : ""
                    }`}
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                    onClick={() => handleTabToggle("Other Revenue")}
                  >
                    Other Revenue
                  </button>
                  <button
                    className={`nav-link text-start ${
                      tabTitle === "Quick Ratio" ? "active" : ""
                    }`}
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                    onClick={() => handleTabToggle("Quick Ratio")}
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
                    className={`nav-link text-start ${
                      tabTitle === "ARPU" ? "active" : ""
                    }`}
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                    onClick={() => handleTabToggle("ARPU")}
                  >
                    ARPU
                  </button>
                  <button
                    className={`nav-link text-start ${
                      tabTitle === "ASP" ? "active" : ""
                    }`}
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                    onClick={() => handleTabToggle("ASP")}
                  >
                    ASP
                  </button>
                  <button
                    className={`nav-link text-start ${
                      tabTitle === "LTV" ? "active" : ""
                    }`}
                    id="v-pills-disabled-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-disabled"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-disabled"
                    aria-selected="false"
                    onClick={() => handleTabToggle("LTV")}
                  >
                    LTV
                  </button>
                </div>
              </div>
            </Col>
            <LeftMenu title={tabTitle} cards={leftMenuOptions} />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default StatsIndex;
