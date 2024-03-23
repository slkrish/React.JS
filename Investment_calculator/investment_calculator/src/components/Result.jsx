export default function({results})
{

    return(
        <table align="center">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
             {results.map((object, index)=>
             <tr key={index}>
              <td>{object.year}</td>
              <td>{object.investment}</td>
              <td>{object.interest}</td>
              <td>{object.TotalInterest}</td>
              <td>{object.investeCapital}</td>
             </tr>)}
            </tbody>
        </table>
    );
}