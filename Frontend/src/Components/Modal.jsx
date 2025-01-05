// Modal.jsx
export default function Modal({ show, onClose, title, children }) {
    if (!show) return null;
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        role="dialog"
      >
        <div className="bg-white rounded-lg shadow-lg w-96">
          <div className="flex justify-between items-center p-4 border-b">
            <h5 className="text-xl font-semibold">{title}</h5>
            <button
              type="button"
              className="text-gray-600 hover:text-gray-800 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    );
  }
  