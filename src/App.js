import "./styles/app.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddWord from "./components/AddWord/AddWord";
import TestPage from "./components/TestPage/TestPage";
import Result from "./components/Result/Result";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import { useSelector } from "react-redux";

function App() {
    const result = useSelector((state) => state.resultSlice.resultItems);
    return (
        <div className="wrapper">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/addword" element={<AddWord />} />
                    <Route
                        path="/testpage"
                        element={result.length < 10 ? <TestPage /> : <Result />}
                    />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
