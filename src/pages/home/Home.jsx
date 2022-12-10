import { FilterAltRounded } from "@mui/icons-material";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { ItemList } from "../../components/itemList/ItemList";
import { SearchBar } from "../../components/searchBar/SearchBar";
import "./Home.scss";
import { format } from "date-fns";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const Home = ({ setFilter }) => {
	const [isSearchClick, setIsSearchClick] = useState(false);
	const [posts, setPosts] = useState([]);

	const formattedDate = format(new Date(filter.calender), "dd MMMM yyyy");

	const handleSearchBar = () => {
		setIsSearchClick((prev) => !prev);
	};

	const fetchPosts = useCallback(async () => {
		const { data } = await axios.get(`${BASE_URL}/api/posts/timeline/all`);
		setPosts(data);
	}, []);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	return (
		<div className="main">
			<Header />
			<div className="search-icon" onClick={handleSearchBar}>
				<FilterAltRounded fontSize="large" />
			</div>
			{isSearchClick && (
				<div className="search-mobile">
					<SearchBar setFilter={setFilter} posts={posts} setPosts={setPosts} />
				</div>
			)}
			<div className="search-tablet">
				<SearchBar setFilter={setFilter} posts={posts} setPosts={setPosts} />
			</div>
			<ItemList posts={posts} />

			<Footer />
		</div>
	);
};
