import React from 'react';

class Currentbattle extends React.Component {
    render () {
        console.log(this.props)
        return (
            <div className={`centralViewer ${this.props.battle.battleOrder}`}>
                <div className={`${(this.props.battle.Title).toLowerCase().replace(/\s+/g, '')}Pic bannerSection`}>
                    
                </div>
                <div className={"centralViewerInfo"}>
                    <h1>{this.props.battle.Title}</h1>
                    <p>{this.props.battle.Prelude}</p>
                    <p>{this.props.battle.Events}</p>
                    <p>{this.props.battle.afterMath}</p>
                </div>
            </div>
        );
    }
}

export default Currentbattle;