import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Builder (props) {
  const key = Math.random() * 100000
  const { path, component, children, parentPath, parentComponent } = props
  if (children !== undefined) {
    return (<>{
      children.map((route, i) => (
        <Builder key={`${key}-${i}`} parentPath={path} parentComponent={component} {...route}  />
      ))
    }</>)
  } else {
    let escapePath = path
    if (parentPath) {
      escapePath = `${parentPath}/${path}`.replace(/\/{2,5}/g,'/')
    }
    const ChildComponent = component
    if (!parentComponent) {
      return (
        <Route
          key={key}
          path={escapePath}
          render={props => (<ChildComponent {...props} />)}
        />
      )
    } else {
      const ParentComponent = parentComponent
      return (
        <Route
          key={key}
          path={escapePath}
          render={props => (
            <ParentComponent {...props}>
              <ChildComponent {...props} />
            </ParentComponent>
          )}
        />
      )
    }
  }
}

function RouteBuilder (props) {
  const { routes } = props
  let routers = []
  const key = Math.random() * 100000
  routers = routes.map((route, i) => (
    <Builder key={`${key}-${i}`} {...route}  />
  ))
  return routers
}

export default function RouteConfig(props) {
  const { routes } = props
  return (
    <Router>
      <Switch>
        <RouteBuilder routes={routes} />
      </Switch>
    </Router>
  );
}