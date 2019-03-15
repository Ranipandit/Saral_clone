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

    componentDidMount(){
        axios.get('http://saral.navgurukul.org/api/courses')
        .then(res => {
            const courses = res.data
            this.setState({courses})
        })
        .catch(error => console.log("There is an error in API call",error))
      }

    render(){
        const { courses } = this.state;
        console.log(courses)
        return(
            <div>
                <Header />
                <Courses />
            </div>
        )
    }
}

export default Home