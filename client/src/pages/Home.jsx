import Navbar from "../Components/Navbar.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold text-black">Aryaman Ramchandran</h1>
        <p className="text-2xl text-black mt-3">portfolio</p>
      </div>
    </>
  )
}

export default Home
