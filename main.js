import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/app';
import listApp from './reducers';
import {
    addAction, 
    removeAction
} from './actions';

const store  = createStore(listApp);
const appDom = document.getElementById('app');

var render = () => {
    ReactDOM.render(
        <Provider store = { store }>
            <App 
                listState     = { store.getState() } 
                onAddClick    = { (text) => store.dispatch(addAction(text)) }
                onRemoveClick = { (index) => store.dispatch(removeAction(index)) }
            />
        </Provider>, 
        appDom
    );
};

render();
store.subscribe(render);