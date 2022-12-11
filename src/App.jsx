import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/profile/Profile";
import { ItemDetail } from "./components/itemDetail/ItemDetail";
import { AddPost } from "./components/addPost/AddPost";
import { FilteredList } from "./pages/filteredlist/FilteredList";
import { useState } from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
	const [filter, setFilter] = useState();
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home setFilter={setFilter} />} />
				{/* <Route path="/login" element={<Home />} />
    <Route path="/signup" element={<Home />} /> */}
				<Route path="/profile/:username" element={<Profile />} />
				<Route path="/:postId" element={<ItemDetail />} />
				<Route path="/newpost" element={<AddPost />} />
				<Route
					path="/search/result"
					element={<FilteredList filter={filter} />}
				/>
			</Routes>
			<Footer />
		</>
	);
}
export default App;
