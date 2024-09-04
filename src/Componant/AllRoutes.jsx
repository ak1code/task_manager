import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "../Pages/TaskList";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}>
        Login
      </Route>
      <Route
        path="/taskList"
        element={
          <PrivateRoute>
            <TaskList />
          </PrivateRoute>
        }
      >
        TaskList
      </Route>
    </Routes>
  );
};

export default AllRoutes;
