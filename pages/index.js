import React from 'react';
import '../src/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Courses from '../src/components/courses';
import axios from 'axios'

class Home extends React.Component {
    constructor(){
        super()
            this.state = {
                courses : []
            }
    }

    async componentDidMount(){
       await axios.get('http://saral.navgurukul.org/api/courses')
        .then(res => {
            const courses = res.data.availableCourses
            this.setState({courses})
        })
        .catch(error => console.log("There is an error in API call",error))
      }

    render(){
        const { courses } = this.state;
        // console.log(courses)
        return(
            <div>
                <Header />
                <Courses courses={courses} />
            </div>
        )
    }
}

export default Home