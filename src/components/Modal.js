import React from 'react';
import Confirm from '../assests/Confirm.svg';

function Modal({handleModalOpenState}) {
    return (
        <div className='modal'>
            <div className='modal-inner'>
                <div className='modal-header'>
                  <img src={Confirm} alt=""/>
                  &nbsp;CONFIRM
                  <span onClick={handleModalOpenState} className='close'/>
                </div>
                <div className='modal-content'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to make?
                </div>
            </div>
        </div>
    )
}

export default Modal;