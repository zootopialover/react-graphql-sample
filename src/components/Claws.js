import React, {  useState } from 'react';
import ClawsBottom from '../assests/ClawsBottom.svg';
import ClawsUpper from '../assests/ClawsUpper.svg';

function Claws({handleModalOpenState}) {
    const [hovered, setHovered] = useState(false);

    const toggleHovered = () => {
        setHovered(!hovered)
    };

    const handleModalOpen = () => {
      handleModalOpenState();
      setHovered(false);
    };

    return (
        <div onClick={handleModalOpenState} onTouchStart={toggleHovered} onTouchEnd={handleModalOpen} className={`claws-wrapper`} onMouseEnter={toggleHovered} onMouseLeave={toggleHovered}>
          <img className={`claws-upper ${hovered ? 'hovered' : ''}`} src={ClawsUpper} alt=""/>
          <img src={ClawsBottom} alt=""/>
        </div>
    )
}

export default Claws;