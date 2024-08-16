import React, { useState } from "react";
import { useForm } from "react-hook-form";
import taskManager from "../../Image/taskManager.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [isLoginForm, setIsLoginForm] = useState(false); // Toggle between login and register form

  const password = watch("password");

  const handleLoginSubmit = (data) => {
    console.log("Login data:", data);
    // Handle login form submission here
  };

  const handleRegisterSubmit = (data) => {
    console.log("Register data:", data);
    // Handle register form submission here
  };

  const toggleForm = () => {
    setIsLoginForm((prev) => !prev);
    reset(); // Clear form fields when toggling
  };

  return (
    <div className="flex flex-col md:flex-row justify-between m-auto items-center h-screen p-4 w-full md:w-[90%]">
      <div className="w-full md:w-1/2 lg:w-2/3 mb-6 md:mb-0">
        <img
          src={taskManager}
          alt="Task Manager"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div className="mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {isLoginForm ? "Login to your account" : "Create your account"}
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* Form */}
            <form
              className="space-y-3"
              onSubmit={handleSubmit(
                isLoginForm ? handleLoginSubmit : handleRegisterSubmit
              )}
            >
              {/* Show email and password fields for both forms */}
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
                        message: "Entered value does not match email format",
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

              {/* Register form specific fields */}
              {!isLoginForm && (
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
