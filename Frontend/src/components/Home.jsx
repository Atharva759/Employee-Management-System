import { useState, useEffect } from "react";

import { getUsers, createUser, updateUser, deleteUser } from "../service/api";

const Home = () => {
  const [form,setform] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [users, setUsers] = useState([]);
  const [editing,setediting] = useState(false);
  const [editId,seteditId] = useState(null);

  const handlesubmit = async(e) => {
    e.preventDefault();
    
  if(editing){
    await updateUser(editId,form)
      .then(()=>{
        setediting(false);
        seteditId(null);
        setform({name:"",email:"",company:""});
        showdata();
      })
      .catch((err)=> console.error(err));
  }else{
    await createUser(form)
    .then(()=>{
        setform({name:"",email:"",company:""});
        showdata();
      })
      .catch((err)=> console.error(err));
    }
  };

  const showdata = () =>{
    getUsers().then(users => {
      const sorteddata = users.sort((a,b)=> a.name.localeCompare(b.name));
      setUsers(sorteddata);
    });
  }

  useEffect(() => {
    showdata();
  }, []);

  const editUser = (id,user) => {
    setform({...user})
    console.log(form);
    setediting(true);
    seteditId(id);
  };

  const deletedata = (id,user) =>{
    deleteUser(id,user)
      .then(()=>showdata())
      .catch((err)=> console.error(err));
  };


  return (
    <>
      <div className="grid m-10 gap-5 justify-center items-center">
        <h1 className="font-medium text-center text-xl ">
          CRUD APP
        </h1>
        <div className="m-5 border p-5 rounded-lg bg-gray-200">
          <form onSubmit={handlesubmit} className=" flex gap-2">
            <input
              value={form.name}
              onChange={(e)=> setform({...form,name:e.target.value})}
              className="p-2 border-gray-700 border-2 rounded-md "
              type="text"
              placeholder="Enter full name"
            />
            <input
            value={form.email}
            onChange={(e)=> setform({...form,email:e.target.value})}
              className="p-2  border-gray-700 border-2 rounded-md "
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={form.company}
              onChange={(e)=> setform({...form,company:e.target.value})}
              className="p-2 border-gray-700 border-2 rounded-md "
              type="text"
              placeholder="Enter your company"
            />
            <input type="submit"
              className="p-3 bg-gray-700 text-white font-semibold rounded-md cursor-pointer"
              value={editing ? "Update":"Save"}
            />
              
            
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
            
              {  users.length===0 ? (<tr><td colSpan="5" className="text-center py-4">Loading...</td></tr>) :  (

                users.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-100 border-t">
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.company}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={()=>editUser(user.id,user)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
                        >
                        Edit
                      </button>
                      <button
                        onClick={()=>deletedata(user.id,user)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
                        >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                      )
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
