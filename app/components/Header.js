import LoginStatus from "./LoginStatus";

const Header = () => {

    return (
            <header className="border-b flex justify-between p-6">
                <h1 className="font-bold">My app</h1>
                <LoginStatus />
            </header>
     );
}
 
export default Header;