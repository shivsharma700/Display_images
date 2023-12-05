
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./componenets/Card";

function App() {

  const [data, setData] = useState([]);

  async function getData(){
    const response = await axios.get("https://api.punkapi.com/v2/beers")
    console.log(response);
    setData(response?.data);
    console.log(data)
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center" }} >
      <div className="search" >
         <input style={{width:"14rem", height:"2rem", borderRadius:"1rem" }} placeholder='Search'  type="text" />
      </div>
      
      <div className="cards" style={{display:"flex", flexWrap:"wrap", gap:"5rem", marginTop:"2rem"}} >
         {data.map((user,index) => (
             <Card key={index} img={user.image_url} name={user?.name} />
         ))}
      </div>
    </div>
  )
}

export default App
