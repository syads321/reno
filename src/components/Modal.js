import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react"
import { useCallback } from "react"
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

const useKeyboardHandler = (callback) => {
    const checkClickOutsideElement = useCallback((evt) => {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
          isEscape = evt.key === "Escape" || evt.key === "Esc";
        } else {
          isEscape = evt.keyCode === 27;
        }
        if (isEscape) {
           callback()
        }
       
    },[callback])

    useEffect(() => {
        if (document) {
            document.addEventListener('keydown', checkClickOutsideElement)
        }
       

        return () => {
            if (document) {
                document.removeEventListener('keydown', checkClickOutsideElement)
            }
        }
    }, [checkClickOutsideElement])
}


const Modal = forwardRef(({ children, header, footer }, ref) => {
    const [modal, setModal] = useState(false)
    const [opacity, setOpacity] = useState(false)
    useKeyboardHandler(() => {
        closeModal()
    })
    const closeModal = async () => {
        setOpacity(false)
        await delay(200)
        setModal(false)
    }
    const toggleModalHandler = async (key) => {
        if (modal === true) {
            closeModal()
            if (document) {
                document.body.classList.remove('modal-active')
            }
            return
        }
        setModal((elm) => !elm)
        if (document) {
            document.body.classList.add('modal-active')
        }
        await delay(200)
        setOpacity((elm) => !elm)
    }
    useImperativeHandle(ref, () => ({
        async toggleModal(key) {
            toggleModalHandler(key)
        }
    }));

    return (
        <>
            {modal ? <div
                className={`modal modal-wrapper ${!opacity ? 'opacity-0' : ''}`}
                id="modal-wrapper"
            >
                <div className="modal-overlay" onClick={toggleModalHandler}></div>
                <div className="modal-container">
                    <div className="modal-content">
                        <div className="modal-content-wrapper">
                            {header}
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="footer">
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
                : null}

        </>
    )
})

export default Modal