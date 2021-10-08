import React, { useState, useEffect } from 'react';

const Network = () =>{
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: 'csssaswe1234@udhfh.cos', 
                password: '5dxdsg3s4as845564' })
        };
        fetch('http://localhost:3000/api/users', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));

    }, []);

    return (
        <div className="card text-center m-3">   
                Returned Id: {postId}
        </div>
    );
}

export { Network };





// export const Network = async (url, method, body) => {
//     console.log(url, method, body);
//   let token = "";
//   await AsyncStorage.getItem('token').then((value) => {token = value})
//   return fetch(`localhost:3000/api/${url}`, {
//     method: method,
//     headers: {
//       "Content-Type": "application/json",
//       access_token: token
//     },
//     body: body ? JSON.stringify(body) : null,
//   })
//     .then((response) => {               //проверка токена. Нет токена -> Auth
//         console.log(111, response);
//         //response.status == 401 ? navigation.navigate('Auth') : response

//     })
// };
