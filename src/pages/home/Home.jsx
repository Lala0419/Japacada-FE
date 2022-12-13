import { FilterAltRounded } from "@mui/icons-material";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { ItemList } from "../../components/itemList/ItemList";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import "./Home.scss";

// import React, { useState } from "react";
import Thumbnail from "../../assets/images/upload-thumnail-placeholder.jpeg";
import Publish from "../../assets/images/publish.svg";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

import { CalendarViewMonth } from "@mui/icons-material";
import AsyncSelect from "react-select/async";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "../../components/modal/Modal.scss";
import { AddPost } from "../../components/addPost/AddPost";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const Home = ({ setFilter }) => {
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

	const [modal, setModal] = useState(false);

	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	return (
		<>
			{modal && <AddPost modal={modal} setModal={setModal} />}

			<Header modal={modal} setModal={setModal} />
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
				<ItemList posts={posts} />
			</div>
			<Footer />
		</>
	);
};
