import { Button } from "antd";
import React, { useState } from "react";
import TaskModal from "../Componant/TaskModal/TaskModal";

const TaskList = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    setShowModal(true);
  };
  const getTaskList = () => {};
  return (
    <div>
      <Button onClick={handleShow}>Add Task</Button>
      {showModal && (
        <TaskModal setShowModal={setShowModal} showModal={showModal} />
      )}
    </div>
  );
};

export default TaskList;
