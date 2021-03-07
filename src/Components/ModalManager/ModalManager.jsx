import React from 'react'
import { connect } from 'react-redux'
import ErrorModal from '../ErrorModal/ErrorModal'
import TestModal from '../TestModal/TestModal'


var modalLookUp = {
    testModal: TestModal,
    errorModal: ErrorModal
}

const ModalManager = ({modal}) => {
    var renderedModal = null;
    if(modal) {
        var {modalType, modalProps} = modal;
        var ModalComponent = modalLookUp[modalType];
        renderedModal = <ModalComponent {...modalProps} />
    }
    return (
        <div>
            {renderedModal}
        </div>
    )
}

var mapState = (state) => ({
    modal: state.modal
})

export default connect(mapState)(ModalManager)
