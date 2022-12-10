// import { useRouter } from "next/router";
import React from "react";
// import { Footer } from "../../components/footer/Footer";
// import { Header } from "../../components/header/Header";
import { format } from "date-fns";
// import { SearchBar } from "../../components/searchBar/SearchBar";

export const FilteredList = ({ filter }) => {
	const formattedDate = format(new Date(filter.calender), "dd MMMM yyyy");

	console.log(formattedDate);
	console.log("filter", filter);

	return (
		<div>
			<main className="flex">
				<section className="flex-grow pt-14 px-6">
					<p className="text-sm">
						300+ places for {filter.bedroom} bedroom, {filter.bathroom} bathroom
						open from {formattedDate}
					</p>
					<h1 className="text-3xl font-semibold mt-2 mb-6">
						in {filter.location}
					</h1>
				</section>
			</main>
		</div>
	);
};
