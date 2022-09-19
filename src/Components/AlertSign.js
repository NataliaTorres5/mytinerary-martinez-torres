import React, { useState } from 'react'

function AlertSign({ setOpenModal, setMessageError, setMessageTittle, setIconSVG }) {

    return (
        <div className="alertBackground">
            <div className="alertContainer">
                <div className="title">

                    <h2>{setMessageTittle}</h2>
                </div>
                <div className="titleCloseBtn">
                </div>
                <div className="alertBody">
                    <p> {setMessageError} !</p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="button"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AlertSign