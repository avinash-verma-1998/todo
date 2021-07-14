// import {useEffect, useState} from 'react';
// import {auth} from './firebase';
// export function useProfile() {
//     const [profile,setProfile] = useState(null);
//     const [isLoading,setIsLoading] = useState(true);

//   useEffect(() => {
//     const authUnsub = auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         const profile = {
//           uid: user.uid,
//           email: user.email,
//           displayName: user.displayName,
//           photoURL:user.photoURL,
//           phoneNumber: user.phoneNumber
//         }
//         setProfile(profile)
//         setIsLoading(false)
//       } else {
//         setProfile(null)
//         setIsLoading(false)
//     }
//     });
//     return () => {
//       authUnsub();
//     };
//   }, []);
//   return [profile,isLoading];
// }
