export default function Log({turns})
{
    return <ol id="log">
        {turns.map((playerInfo) => 
        <li>
            Player Symbol = {playerInfo.activePlayer}
        </li> )}
    </ol>
}

