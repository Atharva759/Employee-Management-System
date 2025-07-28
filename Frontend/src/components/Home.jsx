import { useState, useEffect } from "react";

import { getUsers, createUser, updateUser, deleteUser } from "../service/api";

const Home = () => {
  const form = useState({
    name: "",
    email: "",
    company: "",
  });

  const [users, setUsers] = useState([]);

  const savedata = () => {};

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const editUser = () => {};

  return (
    <>
      <div className="grid m-10 gap-5 justify-center items-center">
        <h1 className="font-medium text-center text-xl ">
          CRUD APP
        </h1>
        <div className="m-5 border p-5 rounded-lg bg-gray-200">
          <form className=" flex gap-2">
            <input
              className="p-2 border-gray-700 border-2 rounded-md "
              type="text"
              placeholder="Enter full name"
            />
            <input
              className="p-2 border-gray-700 border-2 rounded-md "
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="p-2 border-gray-700 border-2 rounded-md "
              type="text"
              placeholder="Enter your company"
            />
            <button
              onClick={savedata}
              className="p-3 bg-gray-700 text-white font-semibold rounded-md"
            >
              Save
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center min-h-screen ">
          <table className="table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Sr No</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Company</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-100 border-t">
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.company}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={editUser}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={deleteUser}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
