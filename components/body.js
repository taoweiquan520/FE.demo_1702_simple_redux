import React from 'react';
import Item from './item';

class Body extends React.Component {
    render() {
        const { listState, onRemoveClick } = this.props;

        return(
            <ul>
                { listState.map((tmpState, index) => (
                    <Item 
                        key           = { index } 
                        listItem      = { tmpState }  
                        onRemoveClick = { onRemoveClick }
                    />
                )) }
            </ul>
        );
    };
};

export default Body;