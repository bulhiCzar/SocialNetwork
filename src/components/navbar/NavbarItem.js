import React from 'react'

const NavbarItem = ({item}) => {
    return (
        <div style={blockItem}>
            <img src={item.icon} alt="i" width="18px" style={itemImg}/>
            <span>{item.title}</span>
        </div>
    )
}

const blockItem = {
    margin: 6,
    fontSize: 18,
    display:'flex',
    // justifyContent: 'end',
    alingItems: 'center',
    marginLeft: '50%'
}
const itemImg = {
    marginRight: 6
}

export default NavbarItem