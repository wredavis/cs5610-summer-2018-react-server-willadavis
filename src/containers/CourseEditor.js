import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import CourseService from '../services/CourseService'

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            course: '',
            courseId: ''
        };

        this.selectCourse = this.selectCourse.bind(this);
        this.setCourse = this.setCourse.bind(this);
        this.courseService = CourseService.instance;
    }

    // componentDidMount() {
    //     this.selectCourse(this.props.match.params.courseId);
    // }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    setCourse(course) {
        this.setState({course: course});
    }

    render() { return(
        <div>
            <h2>Editing course: {this.state.courseId}</h2>
            <div className="row">
                <div className="col-4">
                    <ModuleList courseId={this.state.courseId}/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                </div>
            </div>
        </div>
    );}}