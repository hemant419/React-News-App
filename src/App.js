import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_DAILYNEWS_API;
  
  state = { progress: 0 };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.state.setProgress}
                apiKey={this.apiKey}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.state.setProgress}
                apiKey={this.apiKey}
                key="businnes"
                pageSize={this.pageSize}
                country="in"
                category="businnes"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.state.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.state.setProgress}
                apiKey={this.apiKey}
                key="sport"
                pageSize={this.pageSize}
                country="in"
                category="sport"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.state.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.state.setProgress}
                apiKey={this.apiKey}
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.state.setProgress}
                apiKey={this.apiKey}
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
