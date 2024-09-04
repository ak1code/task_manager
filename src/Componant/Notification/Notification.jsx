import { CheckCircle, XCircle } from "lucide-react";

const Notification = ({ message, type }) => {
  const isSuccess = type === "success";

  return (
    <div
      className={`flex items-center p-4 mb-4 rounded-lg ${
        isSuccess ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {isSuccess ? (
        <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
      ) : (
        <XCircle className="w-5 h-5 mr-2 text-red-600" />
      )}
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Notification;
