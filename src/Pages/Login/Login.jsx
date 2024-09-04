import React, { useState } from "react";
import { useForm } from "react-hook-form";
import apiService from "../../Componant/API/apiCall";
import { useNotification } from "../../Componant/Notification/NotificationProvider";
import EndPoints from "../../Componant/API/ApiEndPoint";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { showNotification } = useNotification();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [isLoginForm, setIsLoginForm] = useState(false);
  const navigate = useNavigate();

  const password = watch("password");

  const registerCompany = async (data) => {
    let payload = {
      name: data?.companyName,
      AspnetUser: {
        FirstName: data?.firstName,
        LastName: data?.lastName,
        Password: data?.password,
        Email: data?.email,
        PhoneNumber: data?.number,
      },
    };
    try {
      let response = await apiService.post("/api/company/create", payload);
      if (response.status === 200) {
        toast.success(response?.message);
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const loginUser = async (data) => {
    console.log({ data });
    let payload = {
      PhoneNumber: data?.number,
      Password: data?.password,
    };
    try {
      let response = await apiService.post(EndPoints.loginUser, payload);
      console.log({ response });
      if (response.status === 200) {
        localStorage.setItem("token", response?.headers?.token);
        toast.success("Login successfull !");
        navigate("/taskList");
      } else {
        showNotification(response?.data, "error");
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error?.response?.data);
      showNotification(error?.response?.data, "error");
    }
  };

  const handleLoginSubmit = (data) => {
    console.log("Login data:", data);
    loginUser(data);
    // Handle login form submission here
  };

  const handleRegisterSubmit = (data) => {
    console.log("Register data:", data);
    registerCompany(data);
    // Handle register form submission here
  };

  const toggleForm = () => {
    setIsLoginForm((prev) => !prev);
    reset(); // Clear form fields when toggling
  };

  return (
    <div className="flex items-center  m-auto  h-100vh p-4 w-full">
      {/* <div className="w-full md:w-1/2 lg:w-2/3 mb-6 md:mb-0">
        <img
          src={taskManager}
          alt="Task Manager"
          className="w-full h-auto object-contain"
        />
      </div> */}
      <div className=" w-full  sm:w-full md:w-1/2 lg:w-[40%] xl:w-[30%] m-auto items-center h-100vh">
        <div className="mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {isLoginForm ? "Login to your account" : "Create your account"}
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full h-100vh">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* Form */}
            <form
              className="space-y-3"
              onSubmit={handleSubmit(
                isLoginForm ? handleLoginSubmit : handleRegisterSubmit
              )}
            >
              {isLoginForm ? (
                <>
                  <div>
                    <label
                      htmlFor="number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="number"
                        type="tel"
                        {...register("number", {
                          required: "Mobile number is required",
                        })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.number && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.number.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        type="password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters",
                          },
                        })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.password && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="firstName"
                        type="text"
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.firstName && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="lastName"
                        type="text"
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.lastName && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="number"
                        type="tel"
                        {...register("number", {
                          required: "Mobile number is required",
                        })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.number && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.number.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message:
                              "Entered value does not match email format",
                          },
                        })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        type="password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters",
                          },
                        })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.password && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="confirmPassword"
                        type="password"
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === password || "The passwords do not match",
                        })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.confirmPassword && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="companyName"
                        type="text"
                        {...register("companyName", {
                          required: "companyName is required",
                        })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.companyName && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.companyName.message}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isLoginForm ? "Login" : "Register"}
                </button>
              </div>
            </form>

            {/* Toggle form link */}
            <div className="mt-4 text-center">
              {isLoginForm ? (
                <p className="text-sm">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="text-indigo-600 hover:text-indigo-500 focus:outline-none"
                  >
                    Register here
                  </button>
                </p>
              ) : (
                <p className="text-sm">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="text-indigo-600 hover:text-indigo-500 focus:outline-none"
                  >
                    Login here
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
