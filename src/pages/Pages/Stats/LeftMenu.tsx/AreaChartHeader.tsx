import { Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown } from "reactstrap";

const AreaChartHeader = () => {
  return (
    <div className="d-flex gap-2">
      <Button className="btn btn-outline-dark">Compare Plans</Button>
      <Button className="btn btn-outline-dark">Compare Segments</Button>
      <Button className="btn btn-outline-dark">Compare Dates</Button>
      <UncontrolledButtonDropdown id="btnGroupDrop1">
        <DropdownToggle className="btn btn-outline-dark" caret>
          TreadLines
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem> Linear </DropdownItem>
          <DropdownItem> Logarithmic </DropdownItem>
          <DropdownItem> Polynomial </DropdownItem>
          <DropdownItem> Power </DropdownItem>
          <DropdownItem> Exponential </DropdownItem>
          <DropdownItem> Moving Average </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <Button className="btn btn-outline-dark">Annotations</Button>
      <Button className="btn btn-outline-dark">Benchmark</Button>
      <Button className="btn btn-danger">Reset</Button>
    </div>
  );
};

export default AreaChartHeader;
