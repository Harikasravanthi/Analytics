import {  useState } from "react";
import {
  Button,
  Col,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

const AddGoalCard = ({title} : any) => {
  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);
  function tog_grid() {
    setShowGoalModal(!showGoalModal);
  }

  return (
    <>
      <div className="bg-light p-2 d-flex align-items-center gap-2 mb-3">
        <Button
          className="btn btn-primary d-flex align-items-center gap-2"
          onClick={() => setShowGoalModal(true)}
        >
          <i className=" bx bx-plus"></i>Set goal
        </Button>
        <p className="mb-0 text-muted">
          Set goals for your business and track your progress toward them!
        </p>
      </div>
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
    </>
  );
};

export default AddGoalCard;
