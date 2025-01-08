import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";
import AreaChart from "./AreaChart";
import TimeFrameCards from "./TimeFrameCards";
import GoalsChart from "./GoalsChart";
import AddGoalCard from "./AddGoalCard";
import BoxChartCard from "./BoxChartCard";
import AreaChartHeader from "./AreaChartHeader";

interface IProps {
  title?: string;
  cards?: {
    areaChart: boolean;
    areaChartTable: boolean;
    timeFrameCards: boolean;
    goalsChart: boolean;
    monthlyGrowthChart: boolean;
    setGoalCard: boolean;
  };
}

const LeftMenu = ({ title, cards }: IProps) => {
  return (
    <>
      <Col xxl={10}>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <div className="h-100">
              {cards?.areaChart && (
                <Card className="card mb-3">
                  <CardHeader>
                    <AreaChartHeader />
                  </CardHeader>
                  <CardBody>
                    <AreaChart
                      title={title}
                      showTable={cards?.areaChartTable}
                    />
                  </CardBody>
                </Card>
              )}
              {cards?.timeFrameCards && <TimeFrameCards />}
              {cards?.goalsChart && <GoalsChart title={title}/>}
              {cards?.monthlyGrowthChart && <BoxChartCard />}
              {cards?.setGoalCard && <AddGoalCard title={title}/>}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default LeftMenu;
