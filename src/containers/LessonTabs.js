import React from 'react'

export default class LessonTabs
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moduleId: '',
            courseId: '',
            lessons: [],
            lesson: {title: ""}
        }
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item"><a
                    className="nav-link active"
                    href="#">Active Tab</a></li>
                <li className="nav-item"><a
                    className="nav-link"
                    href="#">Another Tab</a></li>
            </ul>
        );
    }
}