import React, { useEffect } from 'react'

const ApiPage = () => {

    //https://jsonplaceholder.typicode.com/users

    let API ="https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{

        const fetchApiData = async(link)=>{
            try{
                const response =await fetch(link);
                const data = await response.json();
                console.log(data)
    
            } catch(error){
                console.log(error);
                
            }
        }

        fetchApiData(API);
    },[API])

  return (
    <div>
      <h2>API</h2>
      
    </div>
  )
}

export default ApiPage
