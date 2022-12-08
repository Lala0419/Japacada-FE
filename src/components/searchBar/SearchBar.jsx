import {
	Bathroom,
	Bed,
	CalendarViewMonth,
	CompassCalibration,
} from "@mui/icons-material";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import AsyncSelect from "react-select/async";
import "./SearchBar.scss";

export const SearchBar = () => {
	const [noOfBeds, setNoOfBeds] = useState(1);
	const [noOfBaths, setNoOfBaths] = useState(1);
	const [date, setDate] = useState(new Date());
	const [selectedOption, setSelectedOption] = useState(null);
	const [isCalenderIconClicked, setIsCalenderIconClicked] = useState(false);
	const [isLocationClicked, setIsLocationClicked] = useState(false);

	// const router = useRouter();

	const handleCalender = () => {
		setIsCalenderIconClicked((prev) => !prev);
	};
	const handleLocation = () => {
		setIsLocationClicked((prev) => !prev);
	};

	const handleSelect = (date) => {
		setDate(date);
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

	const search = () => {
		// router.push({
		// 	pathname: "/itemSearch",
		// 	query: {
		// 		bedroom: noOfBeds,
		// 		bathroom: noOfBaths,
		// 		location: locations,
		// 		calender: date.toISOString(),
		// 	},
		// });
	};

	return (
		<>
			<div className="search-box">
				<div className="search-item-box">
					<h3 className="search-item-box_text">Bedrooms</h3>
					<div className="search-item-box_icons">
						<Bed fontSize="large" className="search-item-box_icons-icon" />
						<input
							value={noOfBeds}
							onChange={(e) => setNoOfBeds(e.target.value)}
							type="number"
							min={1}
							className="search-item-box_icons-input"
						/>
					</div>
				</div>

				<div className="search-item-box">
					<h3 className="search-item-box_text">Bathrooms</h3>
					<div className="search-item-box_icons">
						<Bathroom fontSize="large" className="search-item-box_icons-icon" />
						<input
							value={noOfBaths}
							onChange={(e) => setNoOfBaths(e.target.value)}
							type="number"
							min={1}
							className="search-item-box_icons-input"
						/>
					</div>
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
					<button
						onClick={search}
						className="search-button search-button--search"
					>
						Search
					</button>
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