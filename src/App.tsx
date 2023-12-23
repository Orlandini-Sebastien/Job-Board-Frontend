import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Board from "./assets/Board";
import "./App.css";
import Layout from "./assets/Layout";


function App() {
	return (
		<Layout>
			<Header title="Jobs Board" />
			<Board/>
			<Footer foot="Made by Orlandini Sebastien" />
		</Layout>
	);
}

export default App;
