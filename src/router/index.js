import React, { lazy, Suspense } from "react"
import { withRouter, Route, Switch } from "react-router-dom"
import { Spin } from "antd"

import notFoundPage from "../../components/screens/404/404"
import PublicRoute from "./publicRoute"
import PrivateRoute from "./privateRoute"
import { storageService } from "../services/storageService"
import { scrollTop } from "../utils/commonUtils"
import DashboardRouter from "./dashboardRouter"

const Login = lazy(() => import("../../containers/login/loginContainer"))
const ForgotPassword = lazy(() => import("../../containers/forgotPassword"))
const ResetPasswordContainer = lazy(() =>
  import("../../containers/resetPassword")
)

export function WaitingComponent(Component) {
  const fallback = (
    <div className="loading-wrapper">
      <Spin />
    </div>
  )

  return props => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )
}

class AppRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={WaitingComponent(DashboardRouter)} />
        <Route exact path="/404" component={notFoundPage} />
      </Switch>
    )
  }
}

export default withRouter(AppRoute)
