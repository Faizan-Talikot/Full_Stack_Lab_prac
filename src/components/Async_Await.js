import React from 'react'

const Async_Await = () => {

    function getUser(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Fetching user data...');
                resolve({ id: 1,name: 'Vikas Yadav' });
            }, 3000);
        });
    }
    
    //Simulate fetching posts by user
    function getPosts(userID){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Fetching posts for user ID :' + userID);
                resolve([
                    { id: 1, title: 'Post 1', userID },
                    { id: 2, title: 'Post 2', userID },
                    { id: 3, title: 'Post 3', userID },
                ]);
            }, 2000);
        });
    }
    
    async function showUD(){
        try{
            const user = await getUser();
            const posts = await getPosts(user.id);
            console.log("User's Posts:", posts);
        }
        catch(error){
            console.error("Error:", error);
            
        }
    }
    
    showUD();
  return (
    <div>Async_Await</div>
  )
}

export default Async_Await