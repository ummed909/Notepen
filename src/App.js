import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import classes from "./App.css";
import ContextProvider from "./Store/ContextProvider";


function App() {
  return (
    <ContextProvider>
      <header>
          <Header />
      </header>
      <body>
          <Body />
      </body>
      <footer>
        <Footer></Footer>
      </footer>
    </ContextProvider>
  );
}

export default App;
