import React from 'react';

class Previousbattle extends React.Component {
    render() {
        console.log(this.props)
        return (
            <button className="battleArrow prevBattleArrow" onClick={this.props.onClick}>Previous
            </button>
        );
    }
}

export default Previousbattle;