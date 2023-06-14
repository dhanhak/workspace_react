import './App.css';
import image from './assets/img.jpg';

// Functional Component 제작
// function ULBox() {
//   return (
//     <div className="ulBox">
//       <ul>
//         <li>Angular</li>
//         <li>React</li>
//         <li>Vue</li>
//       </ul>
//     </div>
//   );
// }
//

const ULBox = () => (
    <div className="ulBox">
      <ul>
        <li>Angular</li>
        <li>React</li>
        <li>Vue</li>
      </ul>
    </div>
  );

function TableBox() {
  return (
    <div className="tableBox">
      <table>
        <thead>
          <tr>
            <th>Seq</th>
            <th>Writer</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001</td>
            <td>Tom</td>
            <td>Hello React</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>1002</td>
            <td>Jack</td>
            <td>React Practice</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function ImageBox() {
  return (
    <div className="imageBox">
      <img src={image}></img>
    </div>
  );
}

function App() {
  return (

    <div className="container">
      <ULBox></ULBox>
      <TableBox></TableBox>
      <ImageBox></ImageBox>
    </div>
  );
}

export default App;
