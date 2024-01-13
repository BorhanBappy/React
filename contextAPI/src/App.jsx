import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <h1 className="bg-green-900 inline-block md:ml-96">Hello Bappy</h1>
     <UserContextProvider/>
    </>
  );
}

export default App;
