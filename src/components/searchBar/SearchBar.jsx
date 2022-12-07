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
		// 		location: selectedOption,
		// 		calender: date.toISOString(),
		// 	},
		// });
	};

	return (
		<>
			<div className="md:grid md:grid-cols-5 p-4">
				<div className="flex items-center border-b md:border-none pb-1 md-4 justify-between md:justify-center">
					<h3 className="">Bedrooms</h3>
					<div className="flex my-1">
						<Bed className="ml-4" />
						<input
							value={noOfBeds}
							onChange={(e) => setNoOfBeds(e.target.value)}
							type="number"
							min={1}
							className=" w-10 pl-2 text-lg outline-none  ml-2 rounded bg-gray-100 "
						/>
					</div>
				</div>

				<div className="flex items-center border-b md:border-none pb-1 md-4 justify-between md:justify-center">
					<h3 className="">Bathrooms</h3>
					<div className="flex my-1">
						<Bathroom className="ml-4" />
						<input
							value={noOfBaths}
							onChange={(e) => setNoOfBaths(e.target.value)}
							type="number"
							min={1}
							className=" w-10 pl-2 text-lg outline-none bg-gray-100  ml-2 rounded"
						/>
					</div>
				</div>

				<div className="flex items-center border-b md:border-none pb-1 md-4 justify-between md:justify-center">
					<h3 className="">Location</h3>
					<div onClick={handleLocation} className="flex my-1">
						<CompassCalibration className="ml-4" />
					</div>
				</div>

				<div className="flex items-center border-b md:border-none pb-1 md-4 justify-between md:justify-center">
					<h3 className="">Start Date</h3>
					<div className="flex flex-col">
						<CalendarViewMonth
							onClick={handleCalender}
							className="m-1   bg-green-600 p-1 pl-2 pr-2  text-3xl rounded"
						/>
					</div>
				</div>

				<div className="flex pt-4 md:p-2">
					<button className="flex-grow ml-1 mr-1 text-gray-500 button">
						Cancel
					</button>
					<button
						onClick={search}
						className="flex-grow text-white ml-1 mr-1 bg-green-600 button"
					>
						Search
					</button>
				</div>
			</div>
			{isLocationClicked && (
				<div className="flex justify-center">
					<AsyncSelect
						defaultValue={selectedOption}
						onChange={handleOption}
						loadOptions={loadOptions}
						isMulti
					/>
				</div>
			)}
			{isCalenderIconClicked && (
				<div className="flex justify-center">
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
