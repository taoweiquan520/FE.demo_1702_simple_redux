import React from 'react';
import Header from '../components/header';
import Body from '../components/body';

class App extends React.Component {
    render() {
        const { listState, onAddClick, onRemoveClick } = this.props;

        return(
            <div>
                <Header 
                    onAddClick    = { onAddClick } 
                />
                <Body 
                    listState = { listState } 
                    onRemoveClick = { onRemoveClick }
                />
            </div>
        );
    };
};

export default App;
