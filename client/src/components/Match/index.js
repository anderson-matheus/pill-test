import React from "react";
import './styles.css'
import Load from "../Load";

function Match() {
    return (
        <div className="match">
            <Load />
            <h2>Rodada 5</h2>
            <table>
                <tr>
                    <td>logo</td>
                    <td><b>Time 1</b></td>
                    <td className="result">0</td>
                    <td className="vs">x</td>
                    <td className="result">0</td>
                    <td><b>Time 2</b></td>
                    <td>logo</td>
                </tr>
            </table>

            <p>10 jogos da quinta rodada</p>
        </div>
    )
}

export default Match