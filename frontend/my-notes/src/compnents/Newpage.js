import React, { useContext ,useEffect} from 'react'
import { useState } from 'react';
import MyContext from './MyContext';
import'../styles.css'
import { useNavigate } from 'react-router-dom';
import Home from './Home';



export default function Newpage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
    backgroundImage: 'url(https://imgs.search.brave.com/DhZ08alk6eRZuS4j5NkvQTGR9ENMJvCqYfdM9L0QqQg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dGFubmVkLXNhbmQt/ZHVuZXMtc3Vycm91/bmRlZC1hbi1vcGVu/LXJlc2Vydm9pci5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w)',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    color: 'white',
    height: '100vh', background: 'linear-gradient(to right, black, lightblue)'
  };
  const navigate=useNavigate();
//////
const [imageURL, setImageURL] = useState(() => localStorage.getItem('imageURL') || "data:image/png;base64,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");
const name7=localStorage.getItem('name7')
const name9=localStorage.getItem('name9')

  const Adding=()=>{
    navigate('/AddNotes')
  }
const homepage=()=>{
  navigate('/Home')
}
const About=()=>{
  navigate('/About')
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
//////
// const yy='';
//   const [tname,settname]=useState();
//   const [tmail,settmail]=useState();
//     useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/gettemp');
//         const result = await response.json();
//         settname(result.name);
//         settmail(result.mail)
       
//         console.log(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     fetchData();
//   }, []); // Empty dependency array ensures this effect runs only once on mount



 
  // const navigate=useNavigate();
//  const{name9}=useContext(MyContext);

  const [added, setAdded] = useState('');
  const handleAddNotes = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;

    const title1 = document.getElementById('title').value;
    const notes1 = document.getElementById('notes').value;
    const date1 = formattedDate;
    ///
    
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format the time as a string
  const formattedTime = `${hours}:${minutes}:${seconds}`;

const time1=formattedTime;
  ///
 if(title1==='' || notes1===''){
  alert('fill the details');
 }
 else{
    const notesdata = { notes: notes1, title: title1, date: date1, time:time1,usermail:name9};
 

    fetch('http://localhost:8000/sendInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notesdata),
    }).then(response => response.text()).then(result =>   setAdded('Record added'));

    setTimeout(() => {
      setAdded('');
    }, 1000);



  };
  }

  return (
    <div style={containerStyle}>
      
{/* //// */}

<nav className="navbar">
{imageURL && (
        <div>
         
          <img src={imageURL} alt="Uploaded" style={{ width:"80px",height:"80px",marginLeft:"60px",borderRadius:"25px"}} />
        </div>
      )}

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
    

    <div className="newpage" >
      
          <h1 style={{   textAlign:'center',marginTop:'-30px' ,paddingRight:'190px'}} id="final">
            Addnotes
          </h1>
          <div>Title :<input style={{ marginLeft: '26px', borderRadius: '5px', color: 'white', backgroundColor: 'rgb(95, 87, 87)' }} id="title" required /></div>
          <div>Notes :</div>
          <textarea id="notes" name="w3review" rows="4" cols="50" style={{ color: 'white', backgroundColor: 'rgb(95, 87, 87)', marginLeft: '66px', borderRadius: '5px', marginBottom: '10px', marginTop: '-15px' }} required />
          <button id="notesbutton" className='submitnotes'  onClick={handleAddNotes}>Submit Notes</button>
          <p style={{ color: 'white' }} id="added">{added}</p>
         
        </div>
        </div>  












      
    
      
    
  )
}
