import React from 'react';

const SvgRectangle = ({color, wallHeight,children}) => {
    return(
      <svg width="40" height="400" transform="rotate(180)" >
        <rect x="0" y="0" width="30" height={wallHeight*30} fill={color}/>
        {children}
      </svg>
    )

}

export default SvgRectangle;