import React from 'react';

class Rebelhouses extends React.Component {
    render () {
        return (
            <div>
                {this.props.rebelHouses.map((rebelHouse, i) => {
                    // console.log(rebelHouse)
                   return (<p key={i}>{rebelHouse}</p>) 
                })}
            </div>
        )
    }
}

export default Rebelhouses;