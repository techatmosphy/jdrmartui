import { Table } from 'react-bootstrap';
export const Table1 = ({ cols, data},handleEdit) => {
    return (
        <div >
        <Table>
            <thead>
                <tr>
                    {cols.map((headerItem, index) => (
                        <th key={index}> {headerItem}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
            { data.map(category => {
                return <tr  onClick={() => handleEdit(category)}>{ cols.map(col => <td>{category[col]}</td>) }</tr>
              })
            }
            </tbody>
        </Table>
    </div>
    )
}

function testEdit(){
    alert("hiiii ")
}