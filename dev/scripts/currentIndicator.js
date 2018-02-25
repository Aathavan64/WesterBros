import React from 'react';

class Currentindicator extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>{this.props.battle.battleOrder}</p>
                
            </div>
        );
    }
}

export default Currentindicator;