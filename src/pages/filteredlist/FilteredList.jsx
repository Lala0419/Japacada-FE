import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { ItemList } from "../../components/itemList/ItemList";
import axios from "axios";
import "./FilteredList.scss";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { AddPost } from "../../components/addPost/AddPost";
import { Profile } from "../profile/Profile";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const FilteredList = ({
	filter,
	modal,
	setModal,
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
			const searchResult = data.filter(
				(item) =>
					item.bedroom === filter.bedroom && item.bathroom === filter.bathroom
			);
			console.log("searchResult", searchResult);

			setPosts(searchResult);
			if (searchResult.length === 0) {
				setResult(false);
			}
		};
		fetchPosts();
	}, []);

	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	if (modalp) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	console.log("result", result);

	return (
		<div>
			{modal && <AddPost modal={modal} setModal={setModal} />}

			{modalp && <Profile modalp={modalp} setModalp={setModalp} />}
			<Header
				modal={modal}
				setModal={setModal}
				modalp={modalp}
				setModalp={setModalp}
			/>
			{result ? (
				<dev className="fList">
					<section className="fList-box">
						<p className="fList-text">
							300+ places for {filter.bedroom} bedroom, {filter.bathroom}{" "}
							bathroom open from {formattedDate}
						</p>
						<h1 className="fList-location">in {filter.location}</h1>
					</section>
				</dev>
			) : (
				<div className="fList-box">
					<h1 className="fList-location">No post was found :( </h1>
				</div>
			)}
			<ItemList posts={posts} />
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
