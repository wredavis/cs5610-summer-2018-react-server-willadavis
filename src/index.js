import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CourseManager from './containers/CourseManager'
import ModuleList from './containers/ModuleList'

import '../node_modules/bootstrap/dist/css/bootstrap.css'



ReactDOM.render(
    <CourseManager/>,
    document.getElementById('root')
);