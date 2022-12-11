import React, { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import { ItemList } from "../../components/itemList/ItemList";
import axios from "axios";
import "./FilteredList.scss";
import { SearchBar } from "../../components/searchBar/SearchBar";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const FilteredList = ({ filter }) => {
	const [posts, setPosts] = useState([]);
	const formattedDate = format(new Date(filter.calender), "dd MMMM yyyy");

	console.log(formattedDate);
	console.log("filterConditions", filter);

	const fetchPosts = useCallback(async () => {
		const { data } = await axios.get(`${BASE_URL}/api/posts/timeline/all`);
		// console.log("data", data);
		const searchResult = data.filter(
			(item) =>
				item.bedroom === filter.bedroom && item.bathroom === filter.bathroom
		);
		console.log("searchResult", searchResult);

		setPosts(searchResult);
	}, []);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	// const handleOption = (selectedOptions) => {
	// 	console.log("handleOption", selectedOptions);
	// };

	return (
		<div>
			{/* <SearchBar handleOption={handleOption} /> */}
			<main className="fList">
				<section className="fList-box">
					<p className="fList-text">
						300+ places for {filter.bedroom} bedroom, {filter.bathroom} bathroom
						open from {formattedDate}
					</p>
					<h1 className="fList-location">in {filter.location}</h1>
				</section>
			</main>
			<ItemList posts={posts} />
		</div>
	);
};
