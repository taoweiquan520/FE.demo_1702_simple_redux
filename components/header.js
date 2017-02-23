import React from 'react';

class Header extends React.Component {
    onAddClick(e) {
        const node = this.refs.newToAdd,
              text = node.value.trim() + '【click to remove】';
        
        this.props.onAddClick(text);
        node.value = '';
    };

    render() {
        return (
            <div>
                <input
                    type        = 'text'  
                    ref         = 'newToAdd' 
                    placeholder = 'type sth to add'
                />
                <button
                    type    = 'button' 
                    onClick = { (e) => this.onAddClick(e) }
                > Add </button>
            </div>
        );
    };
};

export default Header;
