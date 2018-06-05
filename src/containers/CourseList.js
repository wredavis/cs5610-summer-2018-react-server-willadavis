import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";
import CourseEditor from "./CourseEditor";

export default class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {course: "New Course",
            courses: []};
    }



    componentDidMount() {
     this.findAllCourses()
    }

    renderCourseRows() {
        let courses = null;

        console.log("render course rows")
        console.log(this.state)
        if (this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseRow key={course.id}
                                      course={course}/>
                }
            )
        }
    }

    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        });
    }



    updateCourse(){
        return this.courseService.updateCourse(this.state.edit)
            .then(()=>{
                this.findAllCourses();
            })
    }

    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                console.log(courses);
                this.setState({courses: courses});
            });
    }

    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(() => {
                this.findAllCourses();
            });
    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                    <tr><th>Title</th></tr>
                    <tr>
                        <th><input onChange={this.titleChanged}
                                   className="form-control" id="titleFld"
                                   placeholder="cs101"/></th>
                        <th><button onClick={this.createCourse}
                                    className="btn btn-primary">
                            Add</button></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

