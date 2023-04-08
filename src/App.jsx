import TopBar from "./components/TopBar/TopBar"
import SideBar from "./components/SideBar/SideBar"
import './App.css'

function App() {


  return (
    <div className="App">
       <TopBar />
       <div className="container">
        <SideBar />
        <main>
          Other
        </main>
       </div>
    </div>
  )
}

export default App
