import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';

const Index = () => {
  return (
    <div className='container'>
      <table border="1" align='center'>
        <thead>
          <tr>
            <th colSpan={3}>Index</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/input">toInput</Link>
            </td>
            <td>
              <Link to="/output">toOutput</Link>
            </td>
            <td>
              <Link to="/sub">toSub</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const Input = () => {
  return (
    <div className='container'>
      <table border={1} align='center'>
        <thead>
          <tr>
            <th>Input message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type='text' placeholder='Input wirter' />
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' placeholder='Input message' />
            </td>
          </tr>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <button onClick={() => { console.log("Writer Click!") }}>write</button>
              <Link to={"/"}><button>back</button></Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const Output = () => {

  const messages = [
    { seq: 1, writer: "Jane", message: "React Router" },
    { seq: 2, writer: "Ryan", message: "Router Practice" },
    { seq: 3, writer: "Tom", message: "Practice Hard" },
  ];

  const result = messages.map((e) => {
    return <tr key={e.seq}>
      <td>{`${e.seq}`}</td>
      <td>{`${e.writer}`}</td>
      <td>{`${e.message}`}</td>
    </tr>
  });

  return (
    <div className='container'>
      <table border={1} align='center'>
        <thead>
          <tr>
            <th colSpan={3}>Message List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seq</td>
            <td>Writer</td>
            <td>Message</td>
          </tr>
          {result}
          <tr>
            <td colSpan={3} align='center'>
              <Link to={"/"}>
                <button>back</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const Sub = () => {
  return (
    <div className='container'>
      <table border={1} align='center'>
        <thead>
          <tr>
            <th colSpan={3}>Sub Page</th>
          </tr>
          <tr>
            <th>
              <Link to={"/sub/red"}>Red</Link>
            </th>
            <th>
              <Link to={"/sub/green"}>Green</Link>
            </th>
            <th>
              <Link to={"/sub/blue"}>Blue</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3} width={200} height={200}>
                <Outlet></Outlet>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const Red = () => {
  return (
    <div className='container' style={{ width: "100%", height: "100%", backgroundColor: "red" }}>
      Red
    </div>
  );
}

const Green = () => {
  return (
    <div className='container' style={{ width: "100%", height: "100%", backgroundColor: "green" }}>
      Green
    </div>
  );
}

const Blue = () => {
  return (
    <div className='container' style={{ width: "100%", height: "100%", backgroundColor: "blue" }}>
      Blue
    </div>
  );
}

function App() {
  // React SPA 에서 페이지를 전환하는 방법
  // Browser의 주소창을 활용한다는 측면에선 기존 방식과 다르지 않음.
  // - location.href , a 도 여전히 활용 가능하나 추천되지 않는 방식 ( 서버에 불필요한 리퀘스트 전송 )
  // - React에서는 일반적으로 react-router-dom 라이브러리를 활용하여 전환한다.


  return (
    <BrowserRouter>
      <Index></Index>
      <Routes>
        <Route path='/Input' element={<Input />} />
        <Route path='/Output' element={<Output />} />
        <Route path='/sub/*' element={<Sub />} >
          <Route path='red' element={<Red />} />
          <Route path='green' element={<Green />} />
          <Route path='blue' element={<Blue />} />
        </Route>
        <Route path='*' element={<index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
