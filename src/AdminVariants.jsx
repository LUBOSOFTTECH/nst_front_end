import { useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";

function AdminVariants() {
  const subVariantInputRef = useRef();
  const [mainVariants, setMainVariants] = useState([]);
  const [subVariants, setSubVariants] = useState([]);
  const [mainVariantInput, setMainVariantInput] = useState("");
  const [subVariantInput, setSubVariantInput] = useState("");
  const [selectedMainVariantId, setSelectedMainVariantId] = useState("");

  function handleAddMainVariant() {
    if (!mainVariantInput) return;
    setMainVariants((prev) => [
      ...prev,
      { name: mainVariantInput, id: crypto.randomUUID() },
    ]);
    setMainVariantInput("");
  }

  function handleFocusSubVariantInput(mainVariantId) {
    console.log(mainVariantId);
    subVariantInputRef.current?.focus();
  }
  function handleUpdateMainVariant(mainVariantId) {
    console.log(mainVariantId);
  }
  function handleDeleteMainVariant(mainVariantId) {
    console.log(mainVariantId);
  }

  const selectedSubVariants = subVariants.filter(
    (subVariant) => subVariant.mainVariantId === selectedMainVariantId
  );

  // Sub Variant
  function handleAddSubVariant() {
    setSubVariants((prev) => [
      ...prev,
      {
        mainVariantId: selectedMainVariantId,
        subVariantName: subVariantInput,
      },
    ]);
    setSubVariantInput("");
  }
  function handleEditSubVariant() {}
  function handleDeleteSubVariant() {}

  console.log(subVariants, selectedSubVariants, selectedMainVariantId);
  return (
    <div className='max-w-screen-xl bg-green-500l'>
      <h3 className='text-2xl font-semibold'>Variants</h3>
      <div className='flex flex-wrap gap-10'>
        <div className='grow'>
          <h4 className='mt-12 text-xl font-medium'>Main Variant</h4>
          <div className='flex gap-2'>
            <input
              onChange={(e) => setMainVariantInput(e.currentTarget.value)}
              value={mainVariantInput}
              className='p-2 mt-3 border-2 rounded-md min-w-60 w-[80%]'
              type='text'
            />
            <div className='flex flex-col justify-center mt-3'>
              <IoAddCircle
                onClick={handleAddMainVariant}
                size={40}
                className='cursor-pointer fill-blue-500 hover:fill-blue-600'
              />
            </div>
          </div>

          {mainVariants.length ? (
            <table className='mt-5 w-[100%]'>
              <thead>
                <tr className='text-left '>
                  <th className='p-2 border-2 min-w-52'>Main Variant Name</th>
                  <th className='p-2 border-2 '>Action</th>
                </tr>
              </thead>
              <tbody>
                {mainVariants.map((variant) => (
                  <tr
                    key={variant.id}
                    className={`${
                      variant.id === selectedMainVariantId ? "bg-sky-100" : ""
                    }`}
                    onClick={() => setSelectedMainVariantId(variant.id)}
                  >
                    <td className='p-1 pl-2 border-2 min-w-52'>
                      {variant.name}
                    </td>
                    <td className='p-1 pl-2 border-2'>
                      <div className='flex flex-wrap gap-1'>
                        <button
                          onClick={() => handleFocusSubVariantInput(variant.id)}
                          className='px-2 py-1 text-sm font-medium bg-green-500 border rounded-md text-green-50 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300'
                        >
                          Add
                        </button>
                        <button
                          onClick={() => handleUpdateMainVariant(variant.id)}
                          className='px-2 py-1 text-sm font-medium border rounded-md bg-amber-500 text-amber-50 hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300 '
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDeleteMainVariant(variant.id)}
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
          {selectedMainVariantId ? (
            <>
              <h4 className='mt-12 text-xl font-medium'>Sub Variant</h4>
              <div className='flex gap-2'>
                <input
                  ref={subVariantInputRef}
                  className='p-2 mt-3 border-2 rounded-md min-w-60  w-[80%]'
                  type='text'
                  onChange={(e) => setSubVariantInput(e.currentTarget.value)}
                  value={subVariantInput}
                />
                <div className='flex flex-col justify-center mt-3'>
                  <IoAddCircle
                    onClick={handleAddSubVariant}
                    size={40}
                    className='cursor-pointer fill-blue-500 hover:fill-blue-600'
                  />
                </div>
              </div>
            </>
          ) : null}
          {selectedSubVariants?.length ? (
            <table className='mt-5  w-[100%]'>
              <thead>
                <tr className='text-left'>
                  <th className='p-2 border-2 min-w-52'>Sub Variant Name</th>
                  <th className='p-2 border-2 '>Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedSubVariants.map((subCategory, i) => (
                  <tr key={i}>
                    <td className='p-1 pl-2 border-2 min-w-52'>
                      {subCategory.subVariantName}
                    </td>
                    <td className='p-1 pl-2 border-2 '>
                      <div className='flex flex-wrap gap-1'>
                        <button
                          onClick={handleEditSubVariant}
                          className='px-2 py-1 text-sm font-medium border rounded-md bg-amber-500 text-amber-50 hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300 '
                        >
                          Edit
                        </button>

                        <button
                          onClick={handleDeleteSubVariant}
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

export default AdminVariants;
