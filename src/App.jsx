import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/profile/Profile";
import { ItemDetail } from "./components/itemDetail/ItemDetail";
import { AddPost } from "./components/addPost/AddPost";
import { FilteredList } from "./pages/filteredlist/FilteredList";
import { useState } from "react";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp";

function App() {
	const [filter, setFilter] = useState();
	const [modalp, setModalp] = useState(false);

	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route
					path="/home"
					element={
						<Home setFilter={setFilter} modalp={modalp} setModalp={setModalp} />
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/profile/:username" element={<Profile />} />
				<Route path="/:postId" element={<ItemDetail />} />
				<Route path="/newpost" element={<AddPost filter={filter} />} />
				<Route
					path="/result"
					element={
						<FilteredList
							filter={filter}
							modalp={modalp}
							setModalp={setModalp}
						/>
					}
				/>
			</Routes>
		</>
	);
}
export default App;
