

const secret = async () => {
    const result = await fetch("http://localhost:4000/secrets", {
        "method": "GET",
        "headers": {
            "Authorzation": "Bearer " + accessToken
        }
    })
}

const Secrets = () => {
    return ( 
        <main>
            <h1>Secrets</h1>
        </main>
     );
}
 
export default Secrets;