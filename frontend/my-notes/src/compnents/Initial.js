
import  '../styles.css';
import { useEffect, useState } from 'react';


import MyContext from './MyContext';
import { useNavigate } from 'react-router-dom';

export default function Initial  (props)  {
const navigate=useNavigate()
  const [showSignup, setShowSignup] = useState(true);
 
 const [name9,setname9]=useState('');
 const [name7, setName7] = useState('');
  const [warning, setWarning] = useState('');
  const [warning1, setWarning1] = useState('');

  // useEffect(()=>{
  //   handleSignIn();
  //   handleRegister();
  // })
  
 

  const handleSignInClick = () => {
    setShowSignup(false);
    
  
  };

  const handleSignUpClick = () => {
    setShowSignup(true);

  };
 

  const handleRegister = () => {
    const name0 = document.getElementById('name').value;
    const name1 = document.getElementById('supemail').value;
    const name2 = document.getElementById('suppassword').value;

    if (name0 === '' || name1 === '' || name2 === '') {
      alert('Fill in all the details');
    } 
    else if(name1.search('@gmail.com')===-1 || name1.length<10){
      setWarning("Enter a valid mail");
      setTimeout(() => {
        setWarning('');
      }, 3000);

    }
    else if(name2.length<6){
      
      setWarning("password should be of atleast 6 letters");
      setTimeout(() => {
        setWarning('');
      }, 3000);

    }
    else if (!/[@$&_]/.test(name2)) {
      setWarning("Password should contain at least one special character ");
      setTimeout(() => {
        setWarning('');
      }, 3000);
    }
    
    
    else {
      const pd = { name: name0, mail: name1, password: name2 };

      fetch('http://localhost:8000/putData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pd),
      })
        .then(response => response.text())
        .then(result => {
          if (result === 'Entry already exists') {
            setWarning(result);

          } else {
            console.log(result);
            setWarning('Registered successfully');
          }
        })
        .catch(error => {
          console.error('Error making POST request:', error);
        });
    }
  };


  // const handleSignIn = () => {
  //    var xx=document.getElementById('sinemail').value;
  //    setname9(xx);
  //   const name8 = document.getElementById('sinpassword').value;
   
  //   if (xx === '' || name8 === '') {
  //     alert('Fill in all the details');
  //   } else {
       
  //     fetch('http://localhost:8000/getData')
  //       .then(response => response.json())
  //       .then(data => func(data));
  
  //     function func(data) {
       
  //       data.map((x) => {
  //         if (x.mail === xx && x.password === name8) {
  //           console.log(x.mail);
          
  //           setWarning1('');
          
  //          localStorage.clear();
  //          localStorage.setItem('name9',xx)
  //          localStorage.setItem('name7',x.name)
  //          navigate('/Home')
            
           
  //         }
  //       });
  //       if (name7 === '') {
  //         setWarning1('Wrong credentials');
              
        
  //       }
  //     }
  //   }
  // };

  const handleSignIn = () => {
    var xx = document.getElementById('sinemail').value;
    setname9(xx);
    const name8 = document.getElementById('sinpassword').value;
  
    if (xx === '' || name8 === '') {
      alert('Fill in all the details');
    } else {
      fetch('http://localhost:8000/getData')
        .then(response => response.json())
        .then(data => func(data));
  
      function func(data) {
        let credentialsMatch = false;
  
        data.forEach(x => {
          if (x.mail === xx && x.password === name8) {
            console.log(x.mail);
            setWarning1('');
           const  tdata={"name":x.name,"mail":xx}

    //         fetch('http://localhost:8000/droptemp').then((response)=>response.text()).then(result=>{console.log(result)});
    //         ////
    //         fetch('http://localhost:8000/savetemp', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(tdata),
    // }).then(response => response.text()).then(result => {console.log(result)});
            ////
            localStorage.clear();
            localStorage.setItem('name9', xx);
            localStorage.setItem('name7', x.name);
            navigate('/Home');
            credentialsMatch = true;
          }
        });
  
        if (!credentialsMatch) {
          setWarning1('Wrong credentials');
  
          // Set a timeout to clear the warning after 3 seconds
          setTimeout(() => {
            setWarning1('');
          }, 3000);
        }
      }
    }
  };
  

  
  return (
    
    <MyContext.Provider value={{name7,name9,showSignup,handleRegister,handleSignInClick,warning,handleSignUpClick,handleSignIn,warning1}}>
    <div>
    <div style={{color:"white"}}>

      {props.children}
        {/* <div className="entire" id="entire">
           {showSignup ?(
         <Signup handleSignInClick={handleSignInClick} handleRegister={handleRegister} warning={warning}/>) :

            (<Signin warning1={warning1} handleSignUpClick={handleSignUpClick} handleSignIn={handleSignIn} />)}
         
        </div>  */}
        
      
    </div>
    </div>
    </MyContext.Provider>
    
  );
};



