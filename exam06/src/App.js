
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState([]);

  // 의존성 배열에 변화가 발생하면, 발생하는 시점에 특정 코드를 실행해주는 hook 함수
  useEffect(() => {
    axios.request({
      url: "/data/selectAll"
    }).then((resp) => {         //성공
      setMovies(resp.data);
    }).catch((error) => {        //실패
      console.log(error);
    });
  }, []);

  // useEffect 함수의 두번째 파라미터에 대하여
  // 생략 시 : rerendering 시점 마다 callback 이 실행 된다.
  // 빈 배열 [] 전달 시 : mount 시점을 감지하여 callback을 실행.
  // [a,b,c] 의존성 배열에 요소를 담아 전달 할 시 : 배열 안에 있는 요소에 변화가 생길 때마다 callback

  

  const insert = () => {
    console.log("동작 확인");
    axios.request({
      url: "/data/insert",
      method: "post",
      params: {
        id: 1001,
        title: "movie01",
        genre: "action"
      }
    }).then((resp) => {
      setMovies(prev => [...prev, resp.data]);
    })
  }

  const update = () => {
    console.log("동작 확인");
    axios.request({
      url: "/data/update/1",
      method: "put",
      params: {
        title: "zzz"
      }
    })
  }

  const del = () => {
    axios.request({
      url:"/data/delete/1",
      method:"post"
    }).then((resp) => {
      setMovies(prev => {
        return prev.filter(movie => movie.id != 1)
      });
    })
  }

  return (
    <>
      <div>

        <button onClick={insert}>
          Insert
        </button>

        <button onClick={update}>
          Update
        </button>
        <button onClick={del}>
          Delete
        </button>
        <input type='text' placeholder='수정하거나 삭제할 번호'></input>
      </div>
      <fieldset>
        <legend>Movie List</legend>
        {
          movies.map(e => (
            <div>{`${e.id} ${e.title} ${e.genre}`}</div>
          ))
        }
      </fieldset>
    </>
  );
}

export default App;
