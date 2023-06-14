function TableBox() {
    return (
      <div className='TableBox'>
        <table>
          <thead>
            <th>Seq</th>
            <th>Writer</th>
            <th>Message</th>
          </thead>
          <tbody>
            <td>1001</td>
            <td>Tom</td>
            <td>Hello React</td>
          </tbody>
          <tfoot>
            <td>1002</td>
            <td>Jack</td>
            <td>React Practice</td>
          </tfoot>
        </table>
      </div>
    );
  }

  export default TableBox;