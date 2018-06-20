import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged}) => {

    let selectElem
    let inputElem

    return(
        <div>
            <div hidden={preview}>
                <h2> Heading {widget.size}</h2>
                <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       ref={node => inputElem = node}/>
                <select onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <h3>Preview</h3>
            </div>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>
    )
};

const HeadingContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Heading);

const dispatchToPropsMapper = dispatch => ({

    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),

    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),

    widgetChangeName: (widgetId, newName) =>
        actions.widgetChangeName(dispatch, widgetId, newName),

    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),

    listTextChanged: (widgetId, newText) =>
        actions.listTextChanged(dispatch, widgetId, newText),

    listTypeChanged: (widgetId, newList) =>
        actions.listTypeChanged(dispatch, widgetId, newList),

    imageUrlChanged: (widgetId, newImage) =>
        actions.imageUrlChanged(dispatch, widgetId, newImage),

    linkUrlChanged: (widgetId, newUrl) =>
        actions.linkUrlChanged(dispatch, widgetId, newUrl),

    linkTextChanged: (widgetId, newText) =>
        actions.linkTextChanged(dispatch, widgetId, newText)
}
);

const stateToPropsMapper = state => ({
    preview: state.preview
});


const Paragraph = ({widget, preview, paragraphTextChanged, paragraphNameChanged}) => {

    let inputElem
    let nameElem

    return(
        <div>
            <div hidden={preview}>
                <h2> Paragraph Widget </h2>

                <textarea className="form-control" onChange={() => paragraphTextChanged(widget.id, inputElem.value )}
                          value={widget.text}
                          ref={node => inputElem = node}
                          placeholder="Paragraph text"/>

                <input className="form-control" onChange={() => paragraphNameChanged(widget.id, nameElem.value)}
                       value={widget.name}
                       ref={node => nameElem = node}
                       placeholder="Widget name"/>
                <h3>Preview</h3>

            </div>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
    </div>
    )
};

const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph);


const Image = ({widget, preview, widgetChangeName, imageUrlChanged}) => {

    let inputElem
    let nameElem

    return (
        <div id="image">
            <form>
                <div hidden={preview} className="form-group">
                    <h2>Image Widget</h2>

                    <div className="form-group">
                        <input className="form-control"
                               onChange={() => imageUrlChanged(widget.id, inputElem.value)}
                               value={widget.text}
                               ref={node => inputElem = node}
                               placeholder="Image URL"/>
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                               onChange={() => widgetChangeName(widget.id, nameElem.value)}
                               value={widget.name}
                               ref={node => nameElem = node}
                               placeholder="Widget name"/>
                    </div>

                    <h3>Preview</h3>
                </div>
            </form>
            <img className="img-responsive img-thumbnail" src={widget.text}></img>
            <br/>
        </div>
    )
};

const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image);

const List = ({widget, preview, listTextChanged, listTypeChanged, widgetChangeName}) => {

    let listElem
    let inputElem
    let nameElem

    return (
        <div id="list">
            <form>
                <div hidden={preview} className="form-group">
                    <h2>List Widget</h2>

                    <div className="form-group">
                <textarea className="form-control"
                          onChange={() => listTextChanged(widget.id, inputElem.value)}
                          value={widget.text}
                          ref={node => inputElem = node}
                          placeholder="Enter one list item per line"/>
                    </div>

                    <div className="form-group">
                        <select className="form-control"
                                onChange={() => listTypeChanged(widget.id, listElem.value)}
                                value={widget.listType}
                                ref={node => listElem = node}>
                            <option>Unordered List</option>
                            <option>Ordered List</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                               onChange={() => widgetChangeName(widget.id, nameElem.value)}
                               value={widget.name}
                               ref={node => nameElem = node}
                               placeholder="Heading text"/>
                    </div>

                    <h3>Preview</h3>
                </div>
            </form>

            {widget.listType == 'Unordered List' &&
            <ul>{widget.text.split("\n").map(item => (
                <li>{item}</li>
            ))}</ul>}

            {widget.listType == 'Ordered List' && <ol>{widget.text.split("\n").map(item => (
                <li>{item}</li>
            ))}</ol>}

            <br/>
        </div>
    )
};

const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List);


const Link = ({widget, preview, linkUrlChanged, linkNameChanged, linkTextChanged}) => {

    let inputElem;
    let nameElem;
    let urlElem;
    
    return (
        <div>
            <div hidden={preview}>
                <h2>Link Widget</h2>

                <input className="form-control" onChange={() => linkUrlChanged(widget.id, urlElem.value)}
                       value={widget.href}
                       ref={node=> urlElem = node}
                       placeholder="Link URL"/>

                <input className="form-control" onChange={() => linkTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       ref={node=> inputElem = node}
                       placeholder="Link text"/>

                <input className="form-control" onChange={() => linkNameChanged(widget.id, nameElem.value)}
                       value={widget.name}
                       ref={node=> nameElem = node}
                       placeholder="Widget name"/>

                <h3>Preview</h3>
            </div>
            <h2><a href={widget.href} target="_blank">{widget.text}</a></h2>
            <br/>
        </div>
    )
};

const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link);


export const Widget = ({widget, preview, dispatch}) => {
    let selectElement
    return(
        <li>
            <div hidden={preview}>
                {widget.id} {widget.widgetType}

                <select value={widget.widgetType}
                        onChange={e =>
                            dispatch({
                                type: 'SELECT_WIDGET_TYPE',
                                id: widget.id,
                                widgetType: selectElement.value
                            })} ref={node => selectElement = node}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option>Link</option>
                </select>

                <button onClick={e => (
                    dispatch({type: DELETE_WIDGET, id: widget.id})
                )}>Delete</button>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph' && <Paragraph/>}
                {widget.widgetType==='List' && <List/>}
                {widget.widgetType==='Image' && <Image/>}
                {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
            </div>
        </li>
    )
};

const WidgetContainer = connect(state => ({
    preview: state.preview
}))
(Widget)

export default WidgetContainer