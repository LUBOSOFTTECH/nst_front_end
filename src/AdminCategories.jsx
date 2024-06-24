import { useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";

function AdminCategories() {
  const subCategoryInputRef = useRef();
  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [mainCategoryInput, setMainCategoryInput] = useState("");
  const [subCategoryInput, setSubCategoryInput] = useState("");
  const [selectedMainCategoryId, setSelectedMainCategoryId] = useState("");

  function handleAddMainCategory() {
    if (!mainCategoryInput) return;
    setMainCategories((prev) => [
      ...prev,
      { name: mainCategoryInput, id: crypto.randomUUID() },
    ]);
    setMainCategoryInput("");
  }

  function handleFocusSubCategoryInput(mainCategoryId) {
    console.log(mainCategoryId);
    subCategoryInputRef.current.focus();
  }
  function handleUpdateMainCategory(mainCategoryId) {
    console.log(mainCategoryId);
  }
  function handleDeleteMainCategory(mainCategoryId) {
    console.log(mainCategoryId);
  }

  const selectedSubCategories = subCategories.filter(
    (subCat) => subCat.mainCatId === selectedMainCategoryId
  );

  // Sub Category
  function handleAddSubCategory() {
    setSubCategories((prev) => [
      ...prev,
      { mainCatId: selectedMainCategoryId, subCategoryName: subCategoryInput },
    ]);
    setSubCategoryInput("");
  }
  function handleEditSubCategory() {}
  function handleDeleteSubCategory() {}

  console.log(subCategories, selectedSubCategories, selectedMainCategoryId);
  return (
    <div className='max-w-screen-xl bg-green-500l'>
      <h3 className='text-2xl font-semibold'>Categories</h3>
      <div className='flex flex-wrap gap-10'>
        <div className='grow'>
          <h4 className='mt-12 text-xl font-medium'>Main Category</h4>
          <div className='flex gap-2'>
            <input
              onChange={(e) => setMainCategoryInput(e.currentTarget.value)}
              value={mainCategoryInput}
              className='p-2 mt-3 border-2 rounded-md min-w-60 w-[80%]'
              type='text'
            />
            <div className='flex flex-col justify-center mt-3'>
              <IoAddCircle
                onClick={handleAddMainCategory}
                size={40}
                className='cursor-pointer fill-blue-500 hover:fill-blue-600'
              />
            </div>
          </div>

          {mainCategories.length ? (
            <table className='mt-5 w-[100%]'>
              <thead>
                <tr className='text-left '>
                  <th className='p-2 border-2 min-w-52'>Main Category Name</th>
                  <th className='p-2 border-2 '>Action</th>
                </tr>
              </thead>
              <tbody>
                {mainCategories.map((category) => (
                  <tr
                    key={category.id}
                    className={`${
                      category.id === selectedMainCategoryId ? "bg-sky-100" : ""
                    }`}
                    onClick={() => setSelectedMainCategoryId(category.id)}
                  >
                    <td className='p-1 pl-2 border-2 min-w-52'>
                      {category.name}
                    </td>
                    <td className='p-1 pl-2 border-2'>
                      <div className='flex flex-wrap gap-1'>
                        <button
                          onClick={() =>
                            handleFocusSubCategoryInput(category.id)
                          }
                          className='px-2 py-1 text-sm font-medium bg-green-500 border rounded-md text-green-50 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300'
                        >
                          Add
                        </button>
                        <button
                          onClick={() => handleUpdateMainCategory(category.id)}
                          className='px-2 py-1 text-sm font-medium border rounded-md bg-amber-500 text-amber-50 hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300 '
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDeleteMainCategory(category.id)}
                          className='px-2 py-1 text-sm font-medium bg-red-500 border rounded-md text-red-50 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300'
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
        <div className='grow'>
          <h4 className='mt-12 text-xl font-medium'>Sub Category</h4>
          <div className='flex gap-2'>
            <input
              ref={subCategoryInputRef}
              className='p-2 mt-3 border-2 rounded-md min-w-60  w-[80%]'
              type='text'
              onChange={(e) => setSubCategoryInput(e.currentTarget.value)}
              value={subCategoryInput}
            />
            <div className='flex flex-col justify-center mt-3'>
              <IoAddCircle
                onClick={handleAddSubCategory}
                size={40}
                className='cursor-pointer fill-blue-500 hover:fill-blue-600'
              />
            </div>
          </div>
          {selectedSubCategories?.length ? (
            <table className='mt-5  w-[100%]'>
              <thead>
                <tr className='text-left'>
                  <th className='p-2 border-2 min-w-52'>Sub Category Name</th>
                  <th className='p-2 border-2 '>Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedSubCategories.map((subCategory, i) => (
                  <tr key={i}>
                    <td className='p-1 pl-2 border-2 min-w-52'>
                      {subCategory.subCategoryName}
                    </td>
                    <td className='p-1 pl-2 border-2 '>
                      <div className='flex flex-wrap gap-1'>
                        <button
                          onClick={handleEditSubCategory}
                          className='px-2 py-1 text-sm font-medium border rounded-md bg-amber-500 text-amber-50 hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300 '
                        >
                          Edit
                        </button>

                        <button
                          onClick={handleDeleteSubCategory}
                          className='px-2 py-1 text-sm font-medium bg-red-500 border rounded-md text-red-50 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300'
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AdminCategories;
