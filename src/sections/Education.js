import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../sections/section-css/resume.css";
import "../sections/section-css/education.css";

class Education extends Component {
  state = {};
  render() {
    return (
      <div className="education" id="education">
        <Grid>
          <Cell col={1}>
            <h2>{this.props.education}</h2>
            {console.log(this.props.education)}
          </Cell>
          <Cell col={12} style={{ marginTop: "0px" }} className="resume-content">
            <h4>{this.props.schoolName}</h4>
            {console.log(this.props.schoolName)}
            <p>
              {this.props.startYear} {this.props.endYear}
            </p>
            <p>{this.props.schoolDescription}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
