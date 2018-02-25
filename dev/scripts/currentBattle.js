import React from 'react';

class Currentbattle extends React.Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <p>{this.props.battle.Title}</p>
                <p>{this.props.battle.Prelude}</p>
                <p>{this.props.battle.Events}</p>
                <p>{this.props.battle.afterMath}</p>
            </div>
        );
    }
}

export default Currentbattle;