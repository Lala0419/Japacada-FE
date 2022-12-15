import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { AddPost } from "./pages/addPost/AddPost";
import { FilteredList } from "./pages/filteredlist/FilteredList";
import { useState } from "react";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp";

function App() {
	const [filter, setFilter] = useState();
	const [modalp, setModalp] = useState(false);
	const [modalm, setModalm] = useState(false);

	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route
					path="/home"
					element={
						<Home
							setFilter={setFilter}
							modalp={modalp}
							setModalp={setModalp}
							modalm={modalm}
							setModalm={setModalm}
						/>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/newpost" element={<AddPost filter={filter} />} />
				<Route
					path="/result"
					element={
						<FilteredList
							filter={filter}
							modalp={modalp}
							setModalp={setModalp}
							modalm={modalm}
							setModalm={setModalm}
						/>
					}
				/>
			</Routes>
		</>
	);
}
export default App;
