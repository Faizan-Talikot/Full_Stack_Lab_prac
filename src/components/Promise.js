import React from 'react'

const Promise = () => {
    function getUser(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log("Fetched User from DB");
                resolve({id:1,name:"faizan"});
            }, 3000)
        });
    }

    function getPost(userID){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log(`Fetched post from Db ${userID}`);
                resolve([{id:1,title:'Post1', userID}])
            },3000);
        })
    }
    getUser.then(user=>{
        return getPost(user.id);
    })
    .then(posts => [
        console.log("User Post:",posts)
    ])
  return (
    <div>Promise</div>
  )
}

export default Promise