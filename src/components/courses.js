import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { fetchCourseData } from "../api";

class Courses extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    fetchCourseData().then(res => {
      const courses = res.data.availableCourses;
      // console.log(courses)
      this.setState({courses});
    });
  }
  render() {
    const { courses } = this.state;
    // console.log(courses)
    // console.log(courses)
    if(courses.length>0){
      console.log(courses)
    }else{
      console.log("nothing")
    }
    return (
      <div className="course_root">
        {courses.length>0 ? courses.map((data,index) => {
            <Card body className="courses_card" key={index}>
            <CardTitle>{data.name}</CardTitle>
            <CardText>
             {data.shortDescription}
            </CardText>
          </Card>
          }) : null }
      </div>
    );
  }
}

export default Courses;
