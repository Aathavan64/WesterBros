import React from 'react';

class Rebelhouses extends React.Component {
    render () {
        return (
            <div className="housesBanner">
                {this.props.rebelHouses.map((rebelHouse, i) => {
                    // console.log(rebelHouse)
                    return (<div className={`sigil${rebelHouse} sigil`} key={i}></div>) 
                })}
            </div>
        )
    }
}

export default Rebelhouses;