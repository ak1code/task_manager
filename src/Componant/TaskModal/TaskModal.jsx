import { Form, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";

const TaskModal = ({ setShowModal, showModal }) => {
  const form = useForm();
  return (
    <Modal
      title="Create Task"
      open={showModal}
      onCancel={() => setShowModal(false)}
    >
      <Form
        className="task-form"
        wrapperCol={{ xs: 24, md: 18 }}
        labelCol={{ xs: 24, md: 6 }}
      >
        <Form.Item label="Name" name={"name"}>
          <Input name="name" />
        </Form.Item>
        <Form.Item label="Description" name={"description"}>
          <Input.TextArea name="description" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskModal;
