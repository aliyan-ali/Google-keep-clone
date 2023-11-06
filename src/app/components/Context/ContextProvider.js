// import React,{ useState } from 'react';
// import MyContext from './MyContext';
// import { useEffect } from 'react';
// import { auth, firestore,  } from "../../Firebase";
// import { doc, getDoc, onSnapshot } from "firebase/firestore";
// import { onAuthStateChanged } from 'firebase/auth';
// // import { collection, query, where, onSnapshot } from "firebase/firestore";


// const  ContextProvider = ({ children }) => {
// // // const [user,setUser]=useState('');
// const [userDisplayName, setUserName] = useState('');

// //     onAuthStateChanged(auth, (user) => {
// //     const q = query(collection(firestore, "users"), where("ownerid", "==", user.uid));
// //         // console.log(q)
// //     onSnapshot(q, (querySnapshot) => {
// //         const nameData = [];
// //         querySnapshot.forEach((doc) => {
// //             nameData.push({...doc.data(), id: doc.id});
// //             // console.log({ ...doc.data(), id: doc.id });
// //         });

// //         console.log("Current user: ", nameData);
// //     });
// //     })



//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 console.log(user);

//                 onSnapshot(doc(firestore, "users", user.uid), (doc) => {
//                     if (doc.exists) {
//                         const data = { ...doc.data(), userId: user.uid };

//                         setUserName(data);
//                     }
//                 });
//             } else {
//                 console.log("user logout...");
//             }
//         });
//     }, []);





//     console.log(userDisplayName);


// // useEffect(() => {
// //     const getUserData =  () => {
// //         onAuthStateChanged(auth, (user) => {
// //             if (user) {
// //                 console.log(user.uid)
// //                 onSnapshot(doc(firestore, "users", user.uid), (doc) => {
// //                     // console.log('slkdfjlkds')
// //                  console.log("Current data: ", doc.data());

// //                     const userData = doc.data();
// //                     // setUserName(userData.name);
// //                     // console.log(userData.name);
// //                 });
// //             } else {
// //                 console.log('error');

            
// //         }});
// //     } 
// //         getUserData();
// //     }, []);
    
//     // console.log(userDisplayName)

   
    
//     // useEffect(() => {
//     //     if (user) {
//     //         const getUserData = async () => {
//     //             const userDocRef = doc(firestore, 'users', user.uid); // Replace 'users' with the name of your Firestore collection where user data is stored.
//     //             const userDoc = await getDoc(userDocRef);

//     //             if (userDoc.exists()) {
//     //                 const userData = userDoc.data();
//     //                 // setUserName(userData);
//     //                 // const user = userData; // Replace 'displayName' with the actual field name where the user's name is stored in Firestore.
//     //                 // console.log(user);
//     //                 // console.log(userData.name); 
//     //             } else {
//     //                 console.log('error');
//     //             }
//     //         };

//     //         getUserData();
//     //         console.log(userDisplayName)
//     //     }
//     // }, []);
   
//     return (
//         <MyContext.Provider value={{userDisplayName}}>
//             {children}
//         </MyContext.Provider>
//     );
// };

// export default ContextProvider;





import React, { createContext, useContext, useState, useEffect } from "react";

import { auth, firestore } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                onSnapshot(doc(firestore, "users", user.uid), (doc) => {
                    if (doc.exists) {
                        const data = { ...doc.data(), userId: user.uid };

                        setUser(data);
                    }
                });
            } else {
                console.log("user logout...");
            }
        });
    }, []);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}