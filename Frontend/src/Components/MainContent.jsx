import { useEffect } from "react";

export default function Modal({ show, onClose, title, children }) {
  if (!show) return null;

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Close modal on background click
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <div className="modal-header flex justify-between items-center p-4 border-b">
          <h5 className="text-lg font-semibold">{title}</h5>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="modal-body p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
