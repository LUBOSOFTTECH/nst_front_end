import { IoAddCircle } from "react-icons/io5";

function AdminCategories() {
  return (
    <div className='max-w-screen-xl bg-green-500l'>
      <h3 className='text-2xl font-semibold'>Categories</h3>
      <div className='flex gap-10'>
        <div className='grow'>
          <h4 className='mt-12 text-xl font-medium'>Main Category</h4>
          <div className='flex gap-2'>
            <input
              className='p-2 mt-3 border-2 rounded-lg w-[80%]'
              type='text'
            />
            <div className='flex flex-col justify-center mt-3'>
              <IoAddCircle size={40} />
            </div>
          </div>

          <table className='mt-5 w-[100%]'>
            <thead>
              <tr className='text-left '>
                <th className='p-2 border-2'>Main Category Name</th>
                <th className='p-2 border-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-1 pl-2 border-2'>col 1 value</td>
                <td className='p-1 pl-2 border-2'>col 2 value</td>
              </tr>
              <tr>
                <td className='p-1 pl-2 border-2'>col 1 value</td>
                <td className='p-1 pl-2 border-2'>col 2 value</td>
              </tr>
              <tr>
                <td className='p-1 pl-2 border-2'>col 1 value</td>
                <td className='p-1 pl-2 border-2'>col 2 value</td>
              </tr>
              <tr>
                <td className='p-1 pl-2 border-2'>col 1 value</td>
                <td className='p-1 pl-2 border-2'>col 2 value</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='grow'>
          <h4 className='mt-12 text-xl font-medium'>Sub Category</h4>
          <div className='flex gap-2'>
            <input
              className='p-2 mt-3 border-2 rounded-lg w-[80%]'
              type='text'
            />
            <div className='flex flex-col justify-center mt-3'>
              <IoAddCircle size={40} />
            </div>
          </div>
          <table className='mt-5  w-[100%]'>
            <thead>
              <tr className='text-left'>
                <th className='p-2 border-2'>Sub Category Name</th>
                <th className='p-2 border-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-1 pl-2 border-2'>col 1 value</td>
                <td className='p-1 pl-2 border-2'>col 2 value</td>
              </tr>
              <tr>
                <td className='p-1 pl-2 border-2'>col 1 value</td>
                <td className='p-1 pl-2 border-2'>col 2 value</td>
              </tr>
              <tr>
                <td className='p-1 pl-2 border-2'>col 1 value</td>
                <td className='p-1 pl-2 border-2'>col 2 value</td>
              </tr>
              <tr>
                <td className='p-1 pl-2 border-2'>col 1 value</td>
                <td className='p-1 pl-2 border-2'>col 2 value</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminCategories;
