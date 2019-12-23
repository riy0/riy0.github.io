import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Cell,
  Grid,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="works-grid">
          {/* project */}
          <Card shallow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "13rem",
                background:
                  "url(https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/236688/27d3d72b-4767-7b9a-f945-56cffde4cf89.png) center / cover"
              }}
            >
              My Project
            </CardTitle>
            <CardText>aiueo</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* project */}
          <Card shallow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "13rem",
                background:
                  "url(https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/236688/27d3d72b-4767-7b9a-f945-56cffde4cf89.png) center / cover"
              }}
            >
              My Project
            </CardTitle>
            <CardText>aiueo</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* project */}
          <Card shallow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "13rem",
                background:
                  "url(https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/236688/27d3d72b-4767-7b9a-f945-56cffde4cf89.png) center / cover"
              }}
            >
              My Project
            </CardTitle>
            <CardText>aiueo</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shallow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "13rem",
              background:
                "url(https://i1.wp.com/weblion303.net/wp-content/uploads/2019/02/1_3SVfBkNZI2f-sspiq59xcw.png?fit=391%2C321&ssl=1) center / cover"
            }}
          >
            My Project
          </CardTitle>
          <CardText>aiueo</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    }
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

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()} </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Works;
