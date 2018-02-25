import React from 'react';

class Previousbattle extends React.Component {
    render() {
        return (
            <button className="battleArrow prevBattleArrow" onClick={this.props.onClick}>Previous
            </button>
        );
    }
}

export default Previousbattle;