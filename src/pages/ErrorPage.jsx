import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <div className="error-page">
      <h1>Opss!</h1>
      <p>Sorry, an unexpected error has ocurred.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage