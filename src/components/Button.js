import React from 'react';

const Button = ({styleName, name, onclick, disabled}) => {
  return(
    <button type='button' disabled={disabled} onClick={onclick} className={`button ${styleName}`}>
      {name}
    </button>
  )
}

export default Button;