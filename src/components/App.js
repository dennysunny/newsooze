import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Articles from "./TopArticles/Articles";
import SearchBar from "./Search/SearchBar";
import TechArts from "./Tech/TechArts";
import BusinessArts from "./Business/BusinessArts";
import SportsArts from "./Sports/SportsArts";
import ScienceArts from "./Science/ScienceArts";
import HealthArts from "./Health/HealthArts";
import CovidUpdate from "./CovidUpdates/CovidUpdate"
import Keralaa from "./Kerala/Keralaa"
import EntertainmentArts from "./Entertainment/EntertainmentArts";
import NotFound from "./NotFound";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BBCArticles from "./BBCNews/BBCArticles";
import TechCrunchArticles from "./TechCrunch/TechCrunchArticles";
import "../App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <Navbar />
            <div className="row top-level">
              <div className="col-md-2">
                <SideBar />
              </div>
              <div className="col-md-10">
                <Switch>
                 
                  <Route exact path="/search" component={SearchBar} />
                  <Route exact path="/kerala" component={Keralaa} />
                  <Route exact path="/business" component={BusinessArts} />
                  <Route exact path="/health" component={HealthArts} />
                  <Route exact path="/covid" component={CovidUpdate} />
                  <Route exact path="/science" component={ScienceArts} />
                  <Route exact path="/entertainment" component={EntertainmentArts} />
                  <Route exact path="/tech" component={TechArts} />
                  <Route exact path="/sports" component={SportsArts} />
                  <Route exact path="/bbc" component={BBCArticles} />
                  <Route exact path="/tc" component={TechCrunchArticles} />
                  <Route exact path="/" component={Articles} />
                  <Route component={NotFound} />

                </Switch>
              </div>
              <Footer />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
