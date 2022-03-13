import React, {useEffect, useState} from 'react'
import "./style.css"
export default function TextForm(props) {
  const [text , setText] = useState('');
  const handleUpClick = () =>{
    console.log("clicked." + text);
    let NewText = text.toUpperCase();
    setText(NewText);
  }
  
  const [seconds, setSeconds] = useState(0);
        const [ontime, setOn] = useState(false);
        const [intervalid, setIntervalid] = useState(null);
       // const [grade, setGrade] = useState(0);
        const handleOnChange = (event) =>{
          console.log("clicked.");
          setText(event.target.value);
        }
        useEffect(()=>{
        
          if(ontime){
          const time = setInterval(()=>{
              setSeconds(prev => prev + 1);}
              ,1000);
              setIntervalid(time);
      }
          else
                  {
              clearInterval(intervalid);
          }
      },[ontime])
      const composed = () =>{
        setSeconds(0);
        setOn(false);
      }
      var word = text.split(" ").length;
      var char = text.length;
      var sentences = text.split(".").length-1;
      var wpm=((word-1) * 60)/seconds;
      var L = (char / (word + 1)) * 100 ;
  var S = (sentences / (word + 1)) * 100 ;
  var index = 0.0588 * L - 0.296 * S - 15.8 ;
  var x;
  if(char === 0)
  {
    x=0;
  }
  else if(char < 10)
  {
    <h1>Write more...</h1>
  }
  else
  {
     x = Math.round(index);
  }
  const action = () => {
  const tbodyEl = document.querySelector("tbody");
  const fullname = document.getElementById("fullname").value;
        const speed = document.getElementById("wpm").value;
        const grade = document.getElementById("grade").value;
          tbodyEl.innerHTML += `
          <tr>
              <td>${fullname}</td>
              <td>${speed}</td>
              <td>${grade}</td>
          </tr>
      `;
      
  }
  return (
    <>
    <div className='top'>
    <h1 className='space'>Tester</h1>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='/logo.jpeg' alt=''/>
    <h1 className='primary'>{props.heading}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timer: {seconds} seconds</h1>
    <h1 className='secondary'></h1>
    <div className="mb-3">
      
    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
  </div>
  
  
  <div className="container my-3">
<h1 className='primary1'>Text Summary</h1>
<p className='font'>{word-1} words, {char-word+1} characters and {sentences} sentences.</p>
<button className='btn' onClick={() => setOn(false)}>Stop</button>
&nbsp;&nbsp; <button className='btn btn-start' onClick={() => setOn(true)}>Start</button>
            &nbsp;&nbsp;<button className='btn btn-reset' onClick={() => composed()}>Reset</button>
<h1 className='primary'>Words per Minute(WPM): {wpm}</h1>
<h1 >Grade: {x}</h1>
  </div>
    <input className='box'
       type="text"
       name='fullname'
       id='fullname'
       required='required'
       placeholder='Enter the name'
       />
      
       <input className='box'
       type="numeric"
       name='wpm'
       id='wpm'

       required='required'
       placeholder='Enter the words per minute'
     
       />
       <input className='box'
       type="numeric"
       name='grade'
       id='grade'
       placeholder='Enter the grade'
       />
       &nbsp;<button id='submit' className="btn" onClick={action}>Add</button>
       &nbsp;
  <div>
     <table className='table'>
       <thead>
       <tr>
         <th>Name</th>
         <th>WPM</th>
         <th>Grade</th>
       </tr>
       </thead>
       <tbody></tbody>
     </table>
     </div>
     </div>
  </>
  
  )
  }
