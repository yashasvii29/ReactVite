import React, { useState } from 'react'

const Effect = () => {
     
    let [d,setD] = useState(null);

    fetch("https://api.tvmaze.com/search/shows?q=girls").then(async function(res){
      let data = await res.json();
    //   console.log(data,"yashu");
    setD(data);
    })


  return (
    <div>Effect - {JSON.stringify(d)}</div>
  )
}

export default Effect