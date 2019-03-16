import axios from 'axios'

export const fetchCourseData = function() {
    return axios.get('http://saral.navgurukul.org/api/courses')
        // .then(res => {
        //     const courses = res.data.availableCourses
        //     // console.log(courses)
        //     return courses
        // })
        // .catch(error => console.log("There is an error in API call",error))
} 