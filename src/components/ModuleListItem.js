import React, {Component} from 'react';


export default class ModuleListItem
    extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={"list-group-item"}>
                {/*{this.props.module.title}*/}
                Module 1
                <span className="float-right">
                <i className="fa fa-trash"></i>
                <i className="fa fa-pencil"></i>
                    </span>
            </li>
        );
    }
}
