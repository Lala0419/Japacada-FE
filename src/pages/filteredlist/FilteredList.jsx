import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { ItemList } from "../../components/itemList/ItemList";
import axios from "axios";
import "./FilteredList.scss";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Profile } from "../profile/Profile";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const FilteredList = ({
	filter = { calender: new Date(), location: "vancouver" },
	modalp,
	setModalp,
}) => {
	const [posts, setPosts] = useState([]);
	const [result, setResult] = useState(true);
	const formattedDate = format(new Date(filter.calender), "dd MMMM yyyy");

	console.log(formattedDate);
	console.log("filterConditions", filter);

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get(`${BASE_URL}/api/posts/timeline/all`);
			const searchResult = data.filter((item) => {
				return (
					item.bedroom === filter.bedroom &&
					item.bathroom === filter.bathroom &&
					item.location.toLowerCase() === filter.location.toLowerCase()
				);
			});
			console.log("searchResult", searchResult);

			setPosts(searchResult);

			if (searchResult.length === 0) {
				setResult(false);
			}
			// setFilter();
		};
		fetchPosts();
	}, []);

	console.log("result", result);

	return (
		<div>
			{modalp && <Profile modalp={modalp} setModalp={setModalp} />}

			<Header modalp={modalp} setModalp={setModalp} />
			{result ? (
				<div className="fList">
					<section className="fList-box">
						<p className="fList-text">
							300+ places for {filter.bedroom} bedroom, {filter.bathroom}{" "}
							bathroom open from {formattedDate}
						</p>
						<h1 className="fList-location">
							in{" "}
							{filter.location.charAt(0).toUpperCase() +
								filter.location.slice(1)}
						</h1>
					</section>
				</div>
			) : (
				<div className="fList-box">
					<h1 className="fList-location">No post was found :( </h1>
				</div>
			)}
			<ItemList posts={posts} modalp={modalp} setModalp={setModalp} />
			<Link to="/">
				<div className="fList-button">
					<span className="detail-box-right-bottom_button detail-box-right-bottom_button--back ">
						HOME
					</span>
				</div>
			</Link>
			<Footer />
		</div>
	);
};
