import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toggleShow from "./../actionCreators/toggleShow";

class EventModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    console.log(this.props);
    return this.state.show === true ? (
      <Modal.Dialog {...this.props} style={{ ...this.props.style }}>
        <Modal.Header onClick={this.handleClose} closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    ) : null;
  }
}

export default EventModal;
