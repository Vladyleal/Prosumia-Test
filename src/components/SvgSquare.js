import React from 'react';

const SvgSquare = ({color, wallHeight, relation}) => {
  const newArray = Array(relation.waterMeter).fill(0);
    return(
      <svg width="60" height="400" transform="rotate(180)" >
          {newArray.map((e, index) => {
            return <rect x="0" y={30*(index+wallHeight)} width="30" height={30} fill={color} stroke="white" key={index}/>
          }
          )}
      </svg>
    )

}

export default SvgSquare;