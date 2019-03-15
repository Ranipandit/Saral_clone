import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

class Courses extends React.Component {
  render() {
    const { courses } = this.props
    console.log(courses)
    return (
      <div className="course_root">
          {courses.map((data,index) => {
            <Card body className="courses_card" key={index}>
            <CardTitle>{data.name}</CardTitle>
            <CardText>
             {data.shortDescription}
            </CardText>
          </Card>
          })}
      </div>
    );
  }
}

export default Courses 
