import React from 'react';

class Item extends React.Component {
    onRemoveClick(index) {
        const { onRemoveClick } = this.props;

        onRemoveClick(index);
    };

    render() {
        const { listItem } = this.props;

        return (
            <li 
                onClick = { () => this.onRemoveClick(listItem.index) }
            >
                id: { listItem.index } / text:{ listItem.text }
            </li>
        );
    };
};

export default Item;