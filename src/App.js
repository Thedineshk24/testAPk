import "./App.css";

// component
import Header from "./Components/Header";
import AddComp1 from "./Parts/AddComp1";
import AddComp2 from "./Parts/AddComp2";
import Banner from "./Parts/Banner";

function App() {
  const images = [
    "https://static.wixstatic.com/media/885c0e_8d0d8a4426c7476c84d9b5d7c7a34fc0~mv2.jpg/v1/fill/w_259,h_245,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%204-01.webp",
    "https://static.wixstatic.com/media/885c0e_2420973663a04a4bb9a04f9ca88d8dcd~mv2.jpg/v1/fill/w_260,h_245,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%205-01-01.webp",
    "https://static.wixstatic.com/media/885c0e_093db876134f47a7bf15d6ed448ccfb7~mv2.jpg/v1/fill/w_259,h_245,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%203-01.webp",
    "https://static.wixstatic.com/media/885c0e_023e1a30e19e40398527e8dd258dc69d~mv2.jpg/v1/fill/w_260,h_250,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%201-01.webp",
    "https://static.wixstatic.com/media/885c0e_064ea72ca3244e16ba1b7805bd78bcf0~mv2.jpg/v1/fill/w_260,h_249,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%202-01.webp",
    "https://static.wixstatic.com/media/885c0e_0be74917661446c29c7f0fb74fc2d309~mv2.jpg/v1/fill/w_259,h_249,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%206-01.webp",
  ];
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* ADD1 */}
      <AddComp1 />
      {/* ADD2 */}
      {images.map((item, i) => (
            <AddComp2 imgUrl={item} items={item} id={i} />
      ))}
    </div>
  );
}

export default App;
