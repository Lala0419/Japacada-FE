import { FilterAltRounded } from "@mui/icons-material";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { ItemList } from "../../components/itemList/ItemList";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import "./Home.scss";
import { Profile } from "../../components/profile/Profile";
import "../../components/modal/Modal.scss";
import { Message } from "../../components/message/Message";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const Home = ({ setFilter, modalp, setModalp, modalm, setModalm }) => {
	const [isSearchClick, setIsSearchClick] = useState(false);
	const [posts, setPosts] = useState([]);

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
		<>
			{modalp && <Profile modalp={modalp} setModalp={setModalp} />}

			{modalm && <Message modalm={modalm} setModalm={setModalm} />}

			<Header modalp={modalp} setModalp={setModalp} />
			<div className="main">
				<div className="search-icon" onClick={handleSearchBar}>
					<FilterAltRounded fontSize="large" />
				</div>
				{isSearchClick && (
					<div className="search-mobile">
						<SearchBar
							setFilter={setFilter}
							posts={posts}
							setPosts={setPosts}
						/>
					</div>
				)}
				<div className="search-tablet">
					<SearchBar setFilter={setFilter} posts={posts} setPosts={setPosts} />
				</div>
				<ItemList
					posts={posts}
					modalp={modalp}
					setModalp={setModalp}
					modalm={modalm}
					setModalm={setModalm}
				/>
			</div>
			<Footer />
		</>
	);
};
