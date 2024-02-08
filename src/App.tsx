import './App.css'
import { RQueryPage } from "./component/RQuery.tsx";
import { AxiosPage } from "./component/Axios.tsx";

function App() {

  return (
    <>
        <div className="container">
            <div className="left">
                <AxiosPage />
            </div>
            <div className="right">
                <RQueryPage />
            </div>
        </div>
    </>
  )
}

export default App
