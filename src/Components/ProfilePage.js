// import '@fortawesome/fontawesome-free/css/all.min.css';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ProfilePage.css';

// const ProfilePage = () => {
//    const [isOpen, setIsOpen] = useState(false);
//    const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//    };

//   return (
//     <div className='Container'>
//         <img src="./assets/images/lakshmi.jpg" alt="User Avatar" className='user-pic'  onClick={toggleDropdown}/>
//         {isOpen &&(
//             <div className='sub-menu-wrap'>
//                 <div className='sub-menu'>
//                     <div className='user-info'>
//                         <img src='./assets/images/lakshmi.jpg' alt="User Avatar"/>
//                         <h3>Lakshmi</h3>
//                     </div>
//                     <hr/>
//                     <p><Link to="/profile"><i className="fas fa-user"></i> Profile</Link></p>
//                     <p><Link to="/your stars"><i className="fas fa-star"></i>Your Stars</Link></p>
//                     <p><Link to="/Bookmarks"><i className="fas fa-bookmark"></i>Bookmarks</Link></p>
//                     <p><Link to="/techercommunity"><i className="fas fa-users"></i> Teacher and Community</Link></p>
//                     <p><Link to="/Notification"><i className="fas fa-bell"></i> Notifications</Link></p>
//                     <p><Link to="/support"><i className="fas fa-question-circle"></i> Support & FAQs</Link></p>
//                     <p><Link to="/settings"><i className="fas fa-cog"></i>Settings</Link></p>
//                     <p><Link to="/Logout"><i className="fas fa-sign-out-alt"></i>Logout</Link></p>
                    
                    
    
        
//                 </div>
//             </div>
//         )}
//     </div>
//   );
// };

  
// export default ProfilePage;


















// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';  // Use 'useNavigate' here
// import './ProfilePage.css';

// const ProfilePage = () => {
//    const [isOpen, setIsOpen] = useState(false);
//    const [user, setUser] = useState({
//       name: 'Lakshmi', // Dynamic data, could be fetched from an API
//       avatar: './assets/images/lakshmi.jpg', // Dynamic avatar path
//    });
   
//    const navigate = useNavigate(); // Replace useHistory with useNavigate

//    const toggleDropdown = () => {
//       setIsOpen(!isOpen);
//    };

//    const handleLogout = () => {
//       // Clear user session or token (if any)
//       // Redirect to login page after logout
//       setUser(null); // For now, just clearing user data
//       navigate('/login'); // Use 'navigate' to redirect
//    };

//   return (
//     <div className='container'>
//         <img src={user.avatar} alt="User Avatar" className='user-pic' onClick={toggleDropdown}/>
//         {isOpen &&(
//             <div className='sub-menu-wrap'>
//                 <div className='sub-menu'>
//                     <div className='user-info'>
//                         <img src={user.avatar} alt="User Avatar"/>
//                         <h3>{user.name}</h3>
//                     </div>
//                     <hr/>
//                     <p><Link to="/profile"><i className="fas fa-user"></i> Profile</Link></p>
//                     <p><Link to="/your-stars"><i className="fas fa-star"></i> Your Stars</Link></p>
//                     <p><Link to="/bookmarks"><i className="fas fa-bookmark"></i> Bookmarks</Link></p>
//                     <p><Link to="/teacher-community"><i className="fas fa-users"></i> Teacher and Community</Link></p>
//                     <p><Link to="/notifications"><i className="fas fa-bell"></i> Notifications</Link></p>
//                     <p><Link to="/support"><i className="fas fa-question-circle"></i> Support & FAQs</Link></p>
//                     <p><Link to="/settings"><i className="fas fa-cog"></i> Settings</Link></p>
//                     <p onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Logout</p>
//                 </div>
//             </div>
//         )}
//     </div>
//   );
// };

// export default ProfilePage;








// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './ProfilePage.css';

// const ProfilePage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [user, setUser] = useState({
//     name: 'Lakshmi', // Replace with dynamic data if needed
//     avatar: './assets/images/Lakshmi.jpg', // Replace with dynamic avatar if needed
//   });

//   const navigate = useNavigate();

//   const toggleDropdown = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleLogout = () => {
//     // Clear user session (localStorage, cookies, etc.)
//     localStorage.removeItem('user'); // Example of clearing saved user data
//     setUser(null); // Clear user state
//     setIsOpen(false); // Close the dropdown menu
//     navigate('/login'); // Redirect to login page
//   };

//   return (
//     <div className="container">
//       <img
//         src={user.avatar}
//         alt="User Avatar"
//         className="user-pic"
//         onClick={toggleDropdown}
//       />
//       {isOpen && (
//         <div className="sub-menu-wrap">
//           <div className="sub-menu">
//             <div className="user-info">
//               <img src={user.avatar} alt="User Avatar" />
//               <h3>{user.name}</h3>
//             </div>
//             <hr />
//             <p>
//               <Link to="/profile">
//                 <i className="fas fa-user"></i> Profile
//               </Link>
//             </p>
//             <p>
//               <Link to="/your-stars">
//                 <i className="fas fa-star"></i> Your Stars
//               </Link>
//             </p>
//             <p>
//               <Link to="/bookmarks">
//                 <i className="fas fa-bookmark"></i> Bookmarks
//               </Link>
//             </p>
//             <p>
//               <Link to="/teacher-community">
//                 <i className="fas fa-users"></i> Teacher and Community
//               </Link>
//             </p>
//             <p>
//               <Link to="/notifications">
//                 <i className="fas fa-bell"></i> Notifications
//               </Link>
//             </p>
//             <p>
//               <Link to="/support">
//                 <i className="fas fa-question-circle"></i> Support & FAQs
//               </Link>
//             </p>
//             <p>
//               <Link to="/settings">
//                 <i className="fas fa-cog"></i> Settings
//               </Link>
//             </p>
//             <p onClick={handleLogout} className="logout">
//               <i className="fas fa-sign-out-alt"></i> Logout
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;











// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './ProfilePage.css';

// const ProfilePage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [user, setUser] = useState(() => {
//     return JSON.parse(localStorage.getItem('user')) || null;
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate('/login'); // Navigate only when user is null
//     }
//   }, [user, navigate]);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('user'); // Clear localStorage
//     setUser(null); // Update state
//     setIsOpen(false); // Close dropdown
//   };

//   // Prevent rendering if user is null (handled by useEffect navigation)
//   if (!user) return null;

//   return (
//     <div className="container">
//       <img
//         src={user.avatar}
//         alt="User Avatar"
//         className="user-pic"
//         onClick={toggleDropdown}
//       />
//       {isOpen && (
//         <div className="sub-menu-wrap">
//           <div className="sub-menu">
//             <div className="user-info">
//               <img src={user.avatar} alt="User Avatar" />
//               <h3>{user.name}</h3>
//             </div>
//             <hr />
//             <p>
//               <Link to="/profile">
//                 <i className="fas fa-user"></i> Profile
//               </Link>
//             </p>
//             <p>
//               <Link to="/your-stars">
//                 <i className="fas fa-star"></i> Your Stars
//               </Link>
//             </p>
//             <p>
//               <Link to="/bookmarks">
//                 <i className="fas fa-bookmark"></i> Bookmarks
//               </Link>
//             </p>
//             <p>
//               <Link to="/teacher-community">
//                 <i className="fas fa-users"></i> Teacher and Community
//               </Link>
//             </p>
//             <p>
//               <Link to="/notifications">
//                 <i className="fas fa-bell"></i> Notifications
//               </Link>
//             </p>
//             <p>
//               <Link to="/support">
//                 <i className="fas fa-question-circle"></i> Support & FAQs
//               </Link>
//             </p>
//             <p>
//               <Link to="/settings">
//                 <i className="fas fa-cog"></i> Settings
//               </Link>
//             </p>
//             <p onClick={handleLogout}>
//               <i className="fas fa-sign-out-alt"></i> Logout
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;

























import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || {
      name: "User",
      avatar: null,
    };
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsOpen(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedUser = { ...user, avatar: reader.result };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) return null;

  return (
    <div className="container">
      <label htmlFor="file-upload">
        <img
          src={user.avatar || "https://via.placeholder.com/150"}
          alt="pic"
          className="user-pic"
          onClick={toggleDropdown}
        />
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
      {isOpen && (
        <div className="sub-menu-wrap">
          <div className="sub-menu">
            <div className="user-info">
              <img
                src={user.avatar || "https://via.placeholder.com/150"}
                alt="User Avatar"
              />
              <h3>{user.name}</h3>
            </div>
            <hr />
            <p>
              <Link to="/profile">
                <i className="fas fa-user"></i> Profile
              </Link>
            </p>
            <p>
              <Link to="/your-stars">
                <i className="fas fa-star"></i> Your Stars
              </Link>
            </p>
            <p>
              <Link to="/bookmarks">
                <i className="fas fa-bookmark"></i> Bookmarks
              </Link>
            </p>
            <p>
              <Link to="/teacher-community">
                <i className="fas fa-users"></i> Teacher and Community
              </Link>
            </p>
            <p>
              <Link to="/notifications">
                <i className="fas fa-bell"></i> Notifications
              </Link>
            </p>
            <p>
              <Link to="/support">
                <i className="fas fa-question-circle"></i> Support & FAQs
              </Link>
            </p>
            <p>
              <Link to="/settings">
                <i className="fas fa-cog"></i> Settings
              </Link>
            </p>
            <p onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;