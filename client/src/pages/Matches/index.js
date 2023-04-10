import React from "react";
import Match from "../../components/Match";

function Matches() {
    // const [backendData, setBackendData] = useState([{}])

    // useEffect(() => {
    //     fetch("/api").then(
    //     response => response.json()
    //     ).then(
    //     data => {
    //         setBackendData(data)
    //     }
    //     )
    // }, [])

    return (
        <div>
            <Match />
            {/* {(typeof backendData.users === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                backendData.users.map((user, i) => (
                    <p key={i}>{user}</p>
                ))
            )} */}
        </div>
    )
}

export default Matches