import React, { useState,useEffect } from 'react'
import '../styles.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {


  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
    //https://imgs.search.brave.com/DhZ08alk6eRZuS4j5NkvQTGR9ENMJvCqYfdM9L0QqQg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dGFubmVkLXNhbmQt/ZHVuZXMtc3Vycm91/bmRlZC1hbi1vcGVu/LXJlc2Vydm9pci5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w
    backgroundImage: 'url(logo192.png)',
    background: 'linear-gradient(to right, black, lightblue)',
    
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    color: 'white', 
  };
  const navigate=useNavigate();
 
  const name7=localStorage.getItem('name7')
 
  const Adding=()=>{
    navigate('/AddNotes')
  }
  const About=()=>{
    navigate('/About')
  }
const homepage=()=>{
  navigate('/Home')
}
  const mynotes=()=>{
    navigate('/MyNotes')
  }
  const logout=()=>{
    const y=prompt("type logout to logout")
    if(y==='logout'){
    navigate('/')}
    else{
      alert('logout bola tha bhutiye')
    }
  }
  //
  const imageContainerStyle = {
    position: 'relative',
  };

  const addIconStyle = {
    position: 'absolute',
    bottom: '0',
    right: '0',
    cursor: 'pointer',
    fontSize:'20px'
  };
 
  const [imageURL, setImageURL] = useState(() => localStorage.getItem('imageURL') || "data:image/png;base64,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");

 

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can upload the image to a server here and get the URL
      // For simplicity, we'll use a FileReader to read the image locally
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result;
        setImageURL(url);
        localStorage.setItem('imageURL', url);
        // You can save the URL to a database or use it as needed
        // For now, we'll just log it to the console
      

      };
      reader.readAsDataURL(file);
    }
  };


const[option,setoption]=useState(false)
const[longimage,setlongimage]=useState(true)
  const handleClickImage = () => {
    // Trigger the file input when the image is clicked
    setoption(true)
  };
  const upload=()=>{
    const xx=document.getElementById('imageInput');
    xx.click();
    setoption(false)
  }
  const delimage=()=>{

    const url2="data:image/png;base64,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"
  setoption(false)
  setImageURL("data:image/png;base64,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")
  localStorage.setItem('imageURL', url2);}
  
  return (
    <div style={containerStyle} >

    <nav className="navbar">
      {/* <img style={{width:"80px",height:"80px",marginLeft:"60px"}} src='logo192.png' /> */}
      {/* <h1 style={{ color: 'white',textAlign:'center',width:'300px',fontSize:'25px'}}>{name7}</h1> */}
      
      
        <div >
         
          <img src={imageURL} alt="Uploaded" style={{ width:"80px",height:"80px",marginLeft:"60px",borderRadius:"25px"}} onClick={handleClickImage}/>
       
        </div>
      
      <ul className="ull">
        <li className="hide">
          <button  className="text-button" onClick={homepage}>Home</button>
        </li>
        <li className="hide">
          <a>
            <button id="aboutmel" className="text-button" onClick={Adding}>
              Add Notes
            </button>
          </a>
        </li>
        <li className="hide">
          <a>
            <button id="skills" className="text-button" onClick={mynotes}>
              My Notes
            </button>
          </a>
        </li>

        <li className="hide">
          <a>
            <button id="resume" className="text-button" onClick={About}>
              About
            </button>
          </a>
        </li>
        <li className="hide">
          <a>
            <button id="contact" className="text-button" onClick={logout}>
             Logout
            </button>
          </a>
        </li>
      </ul>
    </nav>
    

    { !option && <div><h1 style={{color:'black'}}>Hello {name7}!   Welcome to  <span  style={{color:'red', fontFamily: "Brush Script MT"}}>  CLOTES</span></h1> <h2 style={{paddingLeft:'200px'}}>Your Notes on the cloud</h2></div>}
  
   <input type="file"
        id="imageInput"
        style={{ display: 'none' }}
        onChange={handleImageUpload} /> 
        {
          option &&
          <div style={{marginTop:'50px' ,width:'500px',height:'90px',border:'2px solid black',borderRadius:'30px',backgroundColor:'black',opacity:'0.8',border:'5px solid black'}}>
          
          <button style={{marginTop:'25px',marginRight:'140px',marginLeft:'100px',borderRadius:'30px',width:'80px',border:'2px solid rgb(255, 215, 0)',backgroundColor:'black',color:'white'}} onClick={upload}    >upload</button>
           
          <button style={{borderRadius:'30px',width:'80px',border:'2px solid rgb(255, 215, 0)',backgroundColor:'black',color:'white'}} onClick={delimage}  >delete</button>
          </div>
          
        }
   
  </div>
  )
}
