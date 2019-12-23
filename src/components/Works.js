import React, { Component } from "react";
import { Tab, Tabs } from "react-mdl";

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Projects</Tab>
          <Tab>TED Talks</Tab>
        </Tabs>
      </div>
    );
  }
}

export default Works;
