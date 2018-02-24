import React from 'react';

class Nextbattle extends React.Component {
    render() {
        return (
            <button className="battleArrow nextBattleArrow" onClick={this.props.onClick}>Next
            </button>
        );
    }
}

export default Nextbattle;