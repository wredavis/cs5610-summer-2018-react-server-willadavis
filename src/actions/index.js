import * as constants from "../constants/index"


export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)

export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
);

export const save = dispatch => (
    dispatch({type: constants.SAVE})
);

export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
);

export const listTypeChanged = (dispatch, widgetId, listType) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: listType})
);

export const listTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LIST_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);

export const linkUrlChanged = (dispatch, widgetId, newLink) => (
    dispatch({
        type: constants.LINK_URL_CHANGED,
        id: widgetId,
        href: newLink})
);

export const linkTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LINK_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);

export const imageUrlChanged = (dispatch, widgetId, newImage) => (
    dispatch({
        type: constants.IMAGE_URL_CHANGED,
        id: widgetId,
        text: newImage})
);

export const widgetChangeName = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.WIDGET_CHANGE_NAME,
        id: widgetId,
        name: newName})
);

export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);
