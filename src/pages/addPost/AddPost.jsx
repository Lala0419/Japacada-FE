import "./AddPost.scss";
import React, { useState } from "react";
import Thumbnail from "../../assets/images/upload-thumnail-placeholder.jpeg";
import Publish from "../../assets/images/publish.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import "./AddPost.scss";
import { CalendarViewMonth, Close } from "@mui/icons-material";
import AsyncSelect from "react-select/async";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import { Header } from "../../components/header/Header";

export const AddPost = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [bedroom, setBedroom] = useState("");
	const [bathroom, setBathroom] = useState("");
	const [price, setPrice] = useState("");
	const [img, setImg] = useState("");
	const [hasErrorMessage, setHasErrorMessage] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [isCalenderIconClicked, setIsCalenderIconClicked] = useState(false);
	const [date, setDate] = useState(new Date());

	const navigate = useNavigate();

	const [posts, setPosts] = useState([]);

	const handleCalender = () => {
		setIsCalenderIconClicked((prev) => !prev);
	};

	const handleSelect = (date) => {
		setDate(date);
		console.log("date", date);
	};

	const formattedDate = format(new Date(date), "dd MMMM yyyy");
	// console.log(formattedDate);

	const options = [
		{ value: "vancouver", label: "Vancouver" },
		{ value: "richmond", label: "Richmond" },
		{ value: "burnaby", label: "Burnaby" },
		{ value: "surrey", label: "Surrey" },
	];

	const handleOption = (selectedOptions) => {
		console.log("selectedOption", selectedOptions);
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

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			!title ||
			!desc ||
			!img ||
			!bathroom ||
			!bedroom ||
			!price ||
			!selectedOption
		) {
			setHasErrorMessage(true);
			setTimeout(() => {
				setHasErrorMessage(false);
			}, 2000);
		} else {
			setHasErrorMessage(false);
			setPosts({
				title,
				desc,
				img,
				bathroom,
				bedroom,
				price,
				location: selectedOption.value,
				calender: formattedDate,
			});

			axios
				.post(`japanada-b-production.up.railway.app/api/posts/`, {
					userId: "638d4012e94cfc5e412b56c2",
					title,
					desc,
					img,
					bathroom,
					bedroom,
					price,
					location: selectedOption.value,
					calender: formattedDate,
				})
				.then((response) => {
					setPosts(posts, response.data);
				});

			navigate("/");
		}
	};

	const uploader = Uploader({
		apiKey: "free",
	});

	return (
		<>
			<Header />
			<section className="upload">
				<div className="upload__top">
					<h1 className="upload__top-title">New Post</h1>
					<Link to="/">
						<Close fontSize="large" className="upload__top-close" />
					</Link>
				</div>
				<div className="upload__middle">
					<div className="upload__middle-img-container">
						<img
							src={img ? img : Thumbnail}
							alt="bycle"
							className="upload__middle-img"
						/>
						<div className="upload__middle-button">
							<UploadButton
								uploader={uploader} // Required.
								options={options} // Optional.
								onComplete={(files) => {
									// Optional.
									if (files.length === 0) {
										console.log("No files selected.");
									} else {
										setImg(files[0].fileUrl);
									}
								}}
							>
								{({ onClick }) => (
									<button onClick={onClick}>Upload a image...</button>
								)}
							</UploadButton>
						</div>
					</div>
					<div className="upload__middle-disc-box">
						<form onSubmit={handleSubmit} className="upload__middle-form">
							<div className="upload__middle-list-container">
								<div className="upload__middle-list">
									<label htmlFor="name" className="upload__middle-form-label">
										title your post
									</label>
									<input
										type="text"
										placeholder="Add a title to your post"
										className="upload__middle-form-input"
										id="name"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
								<div className="upload__middle-list">
									<label htmlFor="name" className="upload__middle-form-label">
										price
									</label>
									<input
										type="text"
										placeholder="Add a price"
										className="upload__middle-form-input"
										id="price"
										value={price}
										onChange={(e) => setPrice(e.target.value)}
									/>
								</div>
								<div className="upload__middle-list">
									<label htmlFor="name" className="upload__middle-form-label">
										bedroom(s)
									</label>
									<input
										type="text"
										placeholder="Add a # of bedroom(s)"
										className="upload__middle-form-input"
										id="bedroom"
										value={bedroom}
										onChange={(e) => setBedroom(e.target.value)}
									/>
								</div>
								<div className="upload__middle-list">
									<label htmlFor="name" className="upload__middle-form-label">
										bathroom(s)
									</label>
									<input
										type="text"
										placeholder="Add a # of bathroom(s)"
										className="upload__middle-form-input"
										id="bathroom"
										value={bathroom}
										onChange={(e) => setBathroom(e.target.value)}
									/>
								</div>
								<div className="upload__location-calender-box">
									<div className="upload__middle-list upload__location-box">
										<label htmlFor="name" className="upload__middle-form-label">
											location
										</label>
										<div className="upload-location">
											<AsyncSelect
												defaultValue={selectedOption}
												onChange={handleOption}
												loadOptions={loadOptions}
												defaultOptions
												className="upload-location-icon"
											/>
										</div>
									</div>
									<div className="upload__middle-list upload__calender-box">
										<label htmlFor="name" className="upload__middle-form-label">
											move in avail date
										</label>
										<div className="search-item-box_icons search-item-box_icons--calender">
											<CalendarViewMonth
												color="white"
												fontSize="large"
												onClick={handleCalender}
												className="search-item-box_icons-icon"
											/>
										</div>

										{/* <input
type="text"
placeholder="starting available date"
className="upload__middle-form-input"
id="calender"
value={calender}
onChange={(e) => setCalender(e.target.value)}
/> */}
									</div>
								</div>
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
								<div className="upload__middle-list">
									<label
										htmlFor="comment"
										className="upload__middle-form-label"
									>
										description
									</label>
									<textarea
										id="desc"
										name="desc"
										placeholder="Add a description to your post"
										className="upload__middle-form-input upload__middle-form-input--comment"
										minLength="5"
										value={desc}
										onChange={(e) => setDesc(e.target.value)}
									></textarea>
								</div>
							</div>
							{hasErrorMessage && (
								<p className="text__error">This field can not be empty!</p>
							)}
							<div className="upload__bottom">
								<button id="comment__button" className="upload__bottom-button">
									PUBLISH
									<img
										className="upload__bottom-publish"
										src={Publish}
										alt="publish"
									/>
								</button>

								<h2 className="upload__bottom-cancel upload__bottom-cancel-link">
									<Link to="/home" className="upload__bottom-cancel-link">
										CANCEL
									</Link>
								</h2>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};
