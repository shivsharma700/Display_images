
const Card = ({img,name}) => {
  return (
    <div
      style={{ borderRadius:"1rem",
               backgroundColor:"rgb(241 245 249)",
               display:"flex", flexDirection:"column",
               alignItems:"center",
               gap:"1rem",
               padding:"0.5rem",
               boxShadow:"3px 3px 5px 1px #888888"
            }}
    >

        <div className="image" style={{width:"8rem", height:"15rem"}} >
            <img style={{width:"100%", height:"100%"}} src={img} alt="" />
        </div>
        <div className="name">
            {name}
        </div>
    </div>
  )
}

export default Card