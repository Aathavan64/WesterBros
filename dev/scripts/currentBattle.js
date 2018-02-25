import React from 'react';

class Currentbattle extends React.Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <p>{this.props.battle.Title}</p>
                
            </div>
        );
    }
}

export default Currentbattle;