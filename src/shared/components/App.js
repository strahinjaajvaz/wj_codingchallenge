import React from "react";
import routes from "../routes";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./NoMatch";
import Header from "./Header";

import { injectGlobal } from "styled-components";
import Container from "../container/Container";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
    html, body {
        margin: 0px;
        padding: 0px;
        font-size: 62.5%;
        font-family: "Roboto";
    }
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Switch>
            {routes.map(({ path, exact, component: C, ...rest }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={props => <C {...props} {...rest} />}
              />
            ))}
            <Route render={props => <NoMatch {...props} />} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
