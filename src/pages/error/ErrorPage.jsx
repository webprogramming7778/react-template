import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1 className="mt-5 text-lg font-bold lg:text-3xl">
        {error.status === 404
          ? "This page doesn't exist!"
          : error.status === 401
          ? "You aren't authorized to see this"
          : "Something went wrong"}{" "}
      </h1>
      {import.meta.env.MODE === "development" && (
        <pre>
          <code>{error?.data}</code>
        </pre>
      )}
      <Link to="/">Go back</Link>
    </>
  );
};

export default ErrorPage;
