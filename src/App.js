import React, { useRef } from 'react';
import Modal from './components/Modal'

function App() {
  const [modal, modalTwo] = [useRef(), useRef()]
  return (
    <div>
      <button onClick={() => { modal.current.toggleModal() }}>
        show Modal
      </button>
      <Modal ref={modal} header={<>
        <p className="modal-title">Simple Modal!</p>
        <div className="modal-close" onClick={() => { modal.current.toggleModal() }}>
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            ></path>
          </svg>
        </div>
      </>} footer={<>

        <div className="footer">
          <button className="modal-close" onClick={() => { modal.current.toggleModal() }}>
            Close
          </button>
        </div>
      </>}>
        <h2>Scroll Me</h2>
        <img src="https://via.placeholder.com/468x800" alt="placeholder" style={{ width: '100%' }} />
      </Modal>
      <button onClick={() => { modalTwo.current.toggleModal() }}>
        show Modal dua
      </button>
      <Modal ref={modalTwo} header={<>
        <p className="modal-title">Simple Modal Dua!</p>
        <div className="modal-close" onClick={() => { modalTwo.current.toggleModal() }}>
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            ></path>
          </svg>
        </div>
      </>} footer={<>

        <div className="footer">
          <button className="modal-close" onClick={() => { modalTwo.current.toggleModal() }}>
            Close
          </button>
        </div>
      </>}>
        <h2>Scroll Me Modal 2</h2>
        <img src="https://via.placeholder.com/468x800" alt="placeholder" style={{ width: '100%' }} />
      </Modal>
    </div>
  );
}

export default App;
