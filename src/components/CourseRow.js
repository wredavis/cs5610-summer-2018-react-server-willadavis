import React from 'react';
import {Link} from 'react-router-dom';
import CourseService from '../services/CourseService'

export default class CourseRow
    extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <tr><td>
                <Link to= {`/course/${this.props.course.id}/edit`}>
                {this.props.course.title}
                </Link>
                </td>
                <td>
                <button onClick= {() => this.props.deleteCourse(this.props.course.id)}
                        className="btn btn-primary">Delete</button>
            </td>
            </tr>
        )
    }
}