import React from 'react';
import '../src/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Courses from '../src/components/courses';

class Home extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Courses />
            </div>
        )
    }
}

export default Home