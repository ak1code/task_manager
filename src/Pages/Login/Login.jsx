import React, { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Image,
  Input,
  InputNumber,
  Row,
  Typography,
} from "antd";
import { FormWrapper, MainDiv, FromButton, ImageCol, FormCol } from "./style";
import taskManager from "../../Image/taskManager.png";

const Login = () => {
  const [form] = Form.useForm();
  const [formType, setFormType] = useState("register");
  const handleSubmit = (value) => {
    console.log("🚀 ~ handleSubmit ~ value:", value);
  };
  const handleFailed = (value) => {
    console.log("🚀 ~ handleFailed ~ value:", value);
  };
  const handleCancle = () => {
    console.log("cancle");
    form.resetFields();
  };

  const handleMove = (value) => {
    setFormType(value);
  };
  return (
    <MainDiv>
      <FormWrapper>
        <ImageCol>
          <Image src={taskManager} preview={false} />
        </ImageCol>
        {formType === "register" ? (
          <FormCol>
            <Typography.Title style={{ marginBottom: "2rem" }}>
              Registration
            </Typography.Title>
            <Form
              form={form}
              onFinish={handleSubmit}
              onFinishFailed={handleFailed}
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 12 }}
            >
              <Form.Item
                label="First Name"
                name={"firstName"}
                rules={[{ required: true }]}
              >
                <Input name="firstName" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name={"lastName"}
                rules={[{ required: true }]}
              >
                <Input name="lastName" />
              </Form.Item>
              <Form.Item
                label="Email Id"
                name={"emailId"}
                rules={[{ required: true }]}
              >
                <Input name="emailId" />
              </Form.Item>
              <Form.Item
                label="Passward"
                name={"passward"}
                rules={[{ required: true }]}
              >
                <Input name="passward" />
              </Form.Item>
              <Form.Item
                label="Date of birth"
                name={"birthDate"}
                rules={[{ required: true }]}
              >
                <DatePicker name="birthDate" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="Mobile No."
                name={"mobileNo"}
                rules={[{ required: true }]}
              >
                <InputNumber
                  min={0}
                  name="mobileNo"
                  style={{ width: "100%" }}
                />
              </Form.Item>

              <Row gutter={[10, 10]} align={"center"} style={{ width: "100%" }}>
                <Col>
                  <FromButton htmlType="primary">Submit</FromButton>
                </Col>
                <Col>
                  <FromButton onClick={handleCancle}>Cancle</FromButton>
                </Col>
              </Row>
              <Row align={"end"}>
                <a onClick={() => handleMove("login")}>Login here</a>
              </Row>
            </Form>
          </FormCol>
        ) : (
          <FormCol>
            <Typography.Title style={{ marginBottom: "2rem" }}>
              Login
            </Typography.Title>
            <Form
              form={form}
              onFinish={handleSubmit}
              onFinishFailed={handleFailed}
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 12 }}
            >
              <Form.Item
                label="Email Id"
                name={"emailId"}
                rules={[{ required: true }]}
              >
                <Input name="emailId" />
              </Form.Item>
              <Form.Item
                label="Passward"
                name={"passward"}
                rules={[{ required: true }]}
              >
                <Input name="passward" />
              </Form.Item>

              <Row gutter={[10, 10]} align={"center"} style={{ width: "100%" }}>
                <Col>
                  <FromButton htmlType="primary">Submit</FromButton>
                </Col>
                <Col>
                  <FromButton onClick={handleCancle}>Cancle</FromButton>
                </Col>
              </Row>
            </Form>
            <Row align={"end"}>
              <a onClick={() => handleMove("register")}>Register here</a>
            </Row>
          </FormCol>
        )}
      </FormWrapper>
    </MainDiv>
  );
};

export default Login;
