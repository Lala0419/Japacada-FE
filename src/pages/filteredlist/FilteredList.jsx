import React, { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { ItemList } from "../../components/itemList/ItemList";
import axios from "axios";
import "./FilteredList.scss";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const FilteredList = ({ filter }) => {
	const [posts, setPosts] = useState([]);
	const formattedDate = format(new Date(filter.calender), "dd MMMM yyyy");

	console.log(formattedDate);
	console.log("filter", filter);

	const fetchPosts = useCallback(async () => {
		const { data } = await axios.get(`${BASE_URL}/api/posts/timeline/all`);
		console.log("data", data);
		const searchResult = data.filter((item) => item.bedroom === filter.bedroom);

		setPosts(searchResult);
	}, []);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	return (
		<div>
			<Header />
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
			<Footer />
		</div>
	);
};
