import './App.css';
import styled from 'styled-components';
import { MyButton, MyDiv } from './components/styled';

function App() {

  // const str1 = 'Hello\nWorld';
  // const str2 = "React\nWorld";
  // const str3 = `Hello
  // World`;

  //  const name ="Tom";
  //   const phone = "0100040434234";
  //   console.log(`My name is ${name}. My phone number is ${phone}`); 

  // 전개(spread) 연산자
  // const arr1 = ["Apple", "Orange", "Mango"];
  // const arr2 = [...arr1, "Grape"];
  // console.log(arr2);

  // const obj1 = { name: "Tom", phone: "01012341234" };  // JSON : javascript의 객체
  // const obj2 = { ...obj1, name2: "zzz", phone2: "01000001111" };
  // console.log(obj2);

  // // 해제 (Destruct) 연산자
  // const [a, b, c] = arr1;
  // console.log(`${a},${b}.${c}`);

  // const { name, phone } = obj1;
  // console.log(`${name},${phone}`);

  // map 함수 - forEach

  const arr1 = [
    {seq:1,writer:"test1",title:"ABC1"},
    {seq:2,writer:"test2",title:"ABC2"},
    {seq:3,writer:"test3",title:"ABC3"}

  ];
  const result = arr1.map((e,index)=>{
    return <div>{`${e.seq} : ${e.writer} : ${e.title}`}</div>;
  });

  console.log(result);

  const className = "container";
  return (
    <div className={className}>
      <MyButton>임의의 버튼</MyButton>
      <MyDiv>임의의 DIV</MyDiv>
      {result}
    </div>
  );
}

export default App;
