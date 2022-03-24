import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Translation from "./components/Translate/translationView";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/translate" element={<Translation />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
