
export const Table = ({ cols, data}) => {
    return (
        <div >
        <table>
            <thead>
                <tr>
                    {cols.map((headerItem, index) => (
                        <th key={index}> {headerItem}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
            { data.map(category => {
                return <tr>{ cols.map(col => <td>{category[col]}</td>) }</tr>
              })
            }
            </tbody>
        </table>
    </div>
    )
}
