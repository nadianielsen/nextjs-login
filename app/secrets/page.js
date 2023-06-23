import { cookies } from "next/headers";

const getSecrets = async () => {
    const token = cookies().get("token")
    const result = await fetch("http://localhost:4000/secrets", {
        headers: {
            Authorization: `Bearer ${token.value}`,
        }
    })
    return result.json();
}

const Secrets = async () => {

    const secrets = await getSecrets()

    // console.log(secrets)

    return (
        <main className="my-2">
            <h1>Secrets</h1>
            {secrets.map(secret => (
                <div key={secret.id}>
                    <h2>{secret.quote}</h2>
                    <p>{secret.author}</p>
                </div>
            ))}
        </main>
    );
}

export default Secrets;