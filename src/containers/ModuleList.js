import React from 'react'
import ModuleService from '../services/ModuleService';
import ModuleListItem from "../components/ModuleListItem";

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: 123,
            moduleId: 345,
            module: {title: ''},
            modules: [
                {title: 'Module1', id: 123},
                {title: 'Module2', id: 234},
                {title: 'Module3', id: 345},
                {title: 'Module4', id: 456},
                {title: 'Module5', id: 567},
                {title: 'Module6', id: 678},
            ]
        };

        this.createModule = this.createModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.setModules = this.setModules.bind(this);
        this.moduleService = ModuleService.instance;

    }

    createModule() {
        console.log('Hello');
        console.log(this.state.modules);
        console.log(this.props.moduleId);
        this.moduleService.createModule(this.props.courseId, this.state.module)
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId})
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setModules(modules)
            });
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    renderListOfModules() {
        let modules = this.state.modules.map((module) => {
                return <ModuleListItem
                    courseId={this.state.courseId}
                    module={module}
                    key={module.id}
                    deleteModule={this.deleteModule}/>
            }
        );
        return modules;
    }

    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(this.state.courseId, moduleId)
            .then(() => {
                return this.findAllModulesForCourse(this.state.courseId);
            })
    }

    render() {
        return (
            <div>
                <h3>Module List for course: {this.state.courseId}</h3>
                {/*<input onChange={this.titleChanged}*/}
                       {/*value={this.state.module.title}*/}
                       {/*placeholder="title"*/}
                       {/*className="form-control"/>*/}
                <button onClick={this.createModule} className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>
                <br/>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}