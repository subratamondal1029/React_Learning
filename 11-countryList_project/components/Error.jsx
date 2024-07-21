import { useRouteError } from "react-router-dom"
import Styles from "./Errorpage.module.css"

const Error = () => {
    const errorDetail = useRouteError()
    console.log(errorDetail);
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>{errorDetail.status}</h1>
      <p className={Styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <button className={Styles.button} onClick={() =>{ window.location.href = '/'}}>
        Go Home
      </button>
    </div>
  )
}

export default Error