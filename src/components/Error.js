import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status, statusText } = error;
  console.log(error);
  return (
    <div className="flex justify-center pt-5">
      <h1>
        {status} - {statusText}
      </h1>
    </div>
  );
};

export default Error;
