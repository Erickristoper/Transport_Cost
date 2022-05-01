
const Footer = (props) => {
    const items =props.default;

    return (
        <div className="card-footer">
            <table className="table">
                <thead>
                    <tr>
                        <th>Cost Item</th>
                        <th>Percentage</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map( (i) => {
                        return (
                            <tr key={i.name}>
                            <td>{i.name}</td>
                            <td>{i.percentage} %</td>
                            <td>{i.cost.toLocaleString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Footer;