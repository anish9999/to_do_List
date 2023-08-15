import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  // To check if the check box is checked or not
  handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === 'checkbox') {
      // For checkbox, use e.target.checked
      this.setState((prevState) => ({
        activeItem: {
          ...prevState.activeItem,
          [name]: e.target.checked,
        },
      }));
    } else {
      this.setState((prevState) => ({
        activeItem: {
          ...prevState.activeItem,
          [name]: value,
        },
      }));
    }
  };

  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Task Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange} // Corrected attribute name
                placeholder="Enter Task Title"
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange} // Corrected attribute name
                placeholder="Enter Task Description"
              />
            </FormGroup>

            <FormGroup>
              <Label for="due_date">Due Date</Label> {/* Updated label text */}
              <Input
                type="text"
                name="due_date"
                value={this.state.activeItem.due_date}
                onChange={this.handleChange} // Corrected attribute name
                placeholder="Enter Due Date"
              />
            </FormGroup>

            <FormGroup check>
              <Label for="completed">Completed</Label>
              <Input
                type="checkbox" // Use checkbox type for completed
                name="completed"
                checked={this.state.activeItem.completed}
                onChange={this.handleChange} // Corrected attribute name
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default CustomModal;
