import { CalendarViewMonth, CompassCalibration } from "@mui/icons-material";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import AsyncSelect from "react-select/async";
import "./SearchBar.scss";
import { Link, useNavigate } from "react-router-dom";

export const SearchBar = ({ posts, setPosts, setFilter }) => {
	const [noOfBeds, setNoOfBeds] = useState("1");
	const [noOfBaths, setNoOfBaths] = useState("1");
	const [date, setDate] = useState(new Date());
	const [selectedOption, setSelectedOption] = useState(null);
	const [isCalenderIconClicked, setIsCalenderIconClicked] = useState(false);
	const [isLocationClicked, setIsLocationClicked] = useState(false);

	const navigate = useNavigate();

	const handleCalender = () => {
		setIsCalenderIconClicked((prev) => !prev);
	};
	const handleLocation = () => {
		setIsLocationClicked((prev) => !prev);
	};

	const handleSelect = (date) => {
		setDate(date);
		console.log("date", date);
	};

	const options = [
		{ value: "vancouver", label: "Vancouver" },
		{ value: "richmond", label: "Richmond" },
		{ value: "burnaby", label: "Burnaby" },
		{ value: "surrey", label: "Surrey" },
	];

	const handleOption = (selectedOptions) => {
		console.log("handleOption", selectedOptions);
		setSelectedOption(selectedOptions);
	};

	const loadOptions = (searchValue, callback) => {
		setTimeout(() => {
			const filteredOptions = options.filter((option) =>
				option.label.toLowerCase().includes(searchValue.toLowerCase())
			);
			console.log("loadOptions", searchValue, filteredOptions);
			callback(filteredOptions);
		}, 2000);
	};

	const search = async () => {
		navigate("/result");
		const locations = selectedOption?.map((i) => i.value).join(", ") || "";
		console.log(locations);
		console.log("selectedOption", selectedOption);

		// ['vancouver', 'richmond]
		setFilter({
			bedroom: noOfBeds,
			bathroom: noOfBaths,
			location: locations || "",
			calender: date.toISOString(),
		});

		console.log("post", posts);
		console.log("location", locations);

		const searchResult = posts.filter((post) => {
			return post.bedroom === noOfBeds && post.bathroom === noOfBaths;
		});

		// TODO add func for location and calender

		setPosts(searchResult);
		setIsCalenderIconClicked(false);
		setIsLocationClicked(false);

		console.log("serchresult", searchResult);
	};

	return (
		<>
			<div className="search-box">
				<div className="search-item-box">
					<div className="search-item-box_icons">
						<input
							value={noOfBeds}
							onChange={(e) => setNoOfBeds(e.target.value)}
							type="number"
							min={1}
							className="search-item-box_icons-input"
						/>
						<h3 className="search-item-box_text">Bedrooms</h3>
					</div>
				</div>

				<div className="search-item-box">
					<div className="search-item-box_icons">
						<input
							value={noOfBaths}
							onChange={(e) => setNoOfBaths(e.target.value)}
							type="number"
							min={1}
							className="search-item-box_icons-input"
						/>
						<h3 className="search-item-box_text">Bathrooms</h3>
					</div>
					{/* <Bathroom fontSize="large" className="search-item-box_icons-icon" /> */}
				</div>

				<div className="search-item-box">
					<h3 className="search-item-box_text">Location</h3>
					<div
						onClick={handleLocation}
						className="search-item-box_icons search-item-box_icons--location"
					>
						<CompassCalibration
							fontSize="large"
							className="search-item-box_icons-icon search-item-box_icons-icon--location"
						/>
					</div>
				</div>

				<div className="search-item-box">
					<h3 className="search-item-box_text">Start Date</h3>
					<div className="search-item-box_icons search-item-box_icons--calender">
						<CalendarViewMonth
							color="white"
							fontSize="large"
							onClick={handleCalender}
							className="search-item-box_icons-icon"
						/>
					</div>
				</div>

				<div className="search-button-box">
					<button className="search-button search-button--cancel">
						Cancel
					</button>
					<Link to="/result" className="search-button--search-link">
						<button
							onClick={search}
							className="search-button search-button--search search-button--search-text"
						>
							Search
						</button>
					</Link>
				</div>
			</div>
			{isLocationClicked && (
				<div className="search-location">
					<AsyncSelect
						defaultValue={selectedOption}
						onChange={handleOption}
						loadOptions={loadOptions}
						defaultOptions
						isMulti
					/>
				</div>
			)}
			{isCalenderIconClicked && (
				<div className="search-calender">
					<Calendar
						date={date}
						minDate={new Date()}
						onChange={handleSelect}
						dateDisplayFormat={date}
					/>
				</div>
			)}
		</>
	);
};
