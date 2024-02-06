/* eslint-disable react/prop-types */
// import React from "react";
// import Booklists from "./Booklist";
// import Books from "./Books";

// const UserContextProvider = () => {
//   return (
//     <div className=" flex flex-col justify-center items-center gap-8">
//       {Booklists.map((book) => {
//         const { author, title, img } = book;
//         // eslint-disable-next-line react/jsx-key
//         return <Books author={author} title={title} img={img} />;
//       })}
//     </div>
//   );
// };
// export default UserContextProvider;
import { useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider=({children})=> {
  const [user,setUser]=useState(null)
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

