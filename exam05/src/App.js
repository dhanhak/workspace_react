import { useState } from 'react';
import './App.css';

function App3() {

  const [writer, setWriter] = useState("");
  const [name, setName] = useState("");

  const handleWriter = (e) => {
    setWriter(e.target.value);
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleOk = () => {
    console.log(writer, name);
    setWriter("");
    setName("");
  }

  return (
    <div>
      <div>{`${writer} ${name}`}</div>
      <input type='text' placeholder='input writer' value={writer} onChange={(e) => {
        setWriter(e.target.value)
      }} /><br />
      <input type='text' placeholder='music name' value={name} onChange={handleName} /><br />
      <button onClick={handleOk}>확인</button>
    </div>
  );
}


function App4() {
  // useState : 

  const [song, setSong] = useState({ writer: "", name: "" }); //json문법 {}

  const handleWriter = (e) => {
    setSong({ ...song, writer: e.target.value });  // 스프레드 ...
  }

  const handleName = (e) => {
    setSong({ ...song, name: e.target.value });
  }

  const handleOk = () => {
    console.log(song);
    setSong({ writer: "", name: "" });
  }

  return (
    <div>
      <div>{`${song.writer} ${song.name}`}</div>
      <input type='text' placeholder='input writer' value={song.writer} onChange={handleWriter} /><br />
      <input type='text' placeholder='music name' value={song.name} onChange={handleName} /><br />
      <button onClick={handleOk}>확인</button>
    </div>
  );
}

function App5() {

  const [time, setTime] = useState(1);

  const onClick = () => {
    setTime(time + 1);
  }
  console.log(`time 업데이트 -> `, time);
  return (
    <div>
      <div>현재시간 : {time}시</div>
      <button onClick={onClick}>update</button>
    </div>
  );
}

function App6() {

  const [arr, setArr] = useState([]);
  const [str, setStr] = useState("");

  const handleChange = (e) => {
    setStr(e.target.value);
  }

  const handleAdd = () => {
    // setArr([...arr, str]);
    // setArr((prev) => {return [...prev, str]});
    setArr(prev => [...prev, str]);
    setStr("");
  }

  return (
    <div>
      <input type='text' placeholder='Input text to add' value={str} onChange={handleChange}></input>
      <button onClick={handleAdd}>Add to arry</button>
      <div>
        {
          arr.map((e, i) => (<div key={i}>{e}</div>))
        }
      </div>
    </div>
  );
}

function App07() {

  const [contacts, setContacts] = useState([
    { seq: 1, name: "Susan", contact: "01012341234" },
    { seq: 2, name: "Tom", contact: "01098764321" },
    { seq: 3, name: "Jane", contact: "01085234567" }
  ]);

  const [contact, setContact] = useState({seq:"", name:"", contact:""});

  const handleChange = (e) => {
    const { name, value } = e.target
    setContact(prev => ({ ...prev, [name]: e.target.value }));
  }

  const handleAdd = () => {
    setContacts(prev =>[...prev, contact]);
    setContact({seq:"",name:"",contact:""})
  }


  return (
    <div>
      {
        // contacts.map((e, i) => (<div key={i}>{e.seq} {e.name} {e.contact}</div>))
        contacts.map((e, i) => (<div key={i}>{`${e["seq"]} ${e.name} ${e.contact}`}</div>))
      }
      {/* {
        ["seq", "name", "contact"].map((e, i) => {
          return (
            <div key={i}>
              <input type='text' placeholder={`input ${e}`} name={`${e}`} onChange={handleChange}/>
            </div>
          );
        })
      } */}
      <input type='text' placeholder='input seq' name='seq' value={contact.seq} onChange={handleChange} /><br />
      <input type='text' placeholder='input name' name='name' value={contact.name} onChange={handleChange} /><br />
      <input type='text' placeholder='input contact' name='contact'value={contact.contact}  onChange={handleChange} /><br />
      <button onClick={handleAdd}>Add</button>

    </div>
  );
}

export default App07;
