import Header from "./components/Header.tsx";

function App() {
  return (
    <main className="min-h-screen flex justify-center items-center flex-col relative">
      <div className="gradient-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <Modal isOpen={isOpen}>
        <form>
          <h1>Contact me</h1>
          <p>
            <label htmlFor="Email">Your Email</label>
            <input type="email" placeholder="Your email" />
          </p>
          <p>
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" />
          </p>
        </form>
      </Modal> */}
      <Header />
    </main>
  );
}

export default App;
