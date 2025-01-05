import { useState } from "react";
import Modal from "./Modal";

export default function ManageCategory({ categories, setCategories }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [editCategory, setEditCategory] = useState(null);

  // Function to add a new category
  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      setCategories([
        ...categories,
        { id: categories.length + 1, name: newCategoryName },
      ]);
      setNewCategoryName("");
      setShowAddModal(false);
    }
  };

  // Function to update an existing category
  const handleEditCategory = () => {
    if (editCategory && editCategory.name.trim()) {
      setCategories(
        categories.map((category) =>
          category.id === editCategory.id ? editCategory : category
        )
      );
      setShowEditModal(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-4">
        <h2 className="text-xl font-semibold">Manage Category</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 text-sm rounded"
          onClick={() => setShowAddModal(true)}
        >
          Add Category
        </button>
      </div>

      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">#</th>
            <th className="px-4 py-2 border-b text-left">Name</th>
            <th className="px-4 py-2 border-b text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id}>
              <td className="px-4 py-2 border-b">{index + 1}</td>
              <td className="px-4 py-2 border-b">{category.name}</td>
              <td className="px-4 py-2 border-b">
                <button
                  className="bg-yellow-400 text-white px-4 py-2 text-xs rounded mr-2"
                  onClick={() => {
                    setEditCategory({ ...category });
                    setShowEditModal(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 text-xs rounded"
                  onClick={() =>
                    setCategories(categories.filter((c) => c.id !== category.id))
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Category Modal */}
      <Modal show={showAddModal} onClose={() => setShowAddModal(false)} title="Add Category">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddCategory();
          }}
        >
          <label className="block mb-2 text-sm">Category Name</label>
          <input
            type="text"
            name="cat_name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 mt-2 rounded"
          >
            Add Category
          </button>
        </form>
      </Modal>

      {/* Edit Category Modal */}
      {editCategory && (
        <Modal show={showEditModal} onClose={() => setShowEditModal(false)} title="Edit Category">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditCategory();
            }}
          >
            <label className="block mb-2 text-sm">Category Name</label>
            <input
              type="text"
              value={editCategory.name}
              onChange={(e) =>
                setEditCategory({ ...editCategory, name: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 mt-2 rounded"
            >
              Update Category
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
