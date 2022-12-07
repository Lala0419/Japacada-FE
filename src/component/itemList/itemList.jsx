import "./itemList.scss";

export const ItemList = ({ img, location, title, desc, price }) => {
	return (
		<div className="item-list">
			<div style={{ transition: "all .5s ease" }} className="item-list-box">
				<div style={{ backfaceVisibility: "none" }} className="item-list-box2">
					{/* <Image
							src={img}
							layout="fill"
							objectFit="cover"
							style={{ transition: "all 3s ease" }}
							className=" scale-[1.2] group-hover:scale-[1]  rounded-2xl transition transform duration-300 ease-in"
						/> */}
				</div>

				<div className="item-list-box3">
					<div className="item-list_right-top-box">
						<h4 className="item-list_title-text">title</h4>
						<p className="item-list_price-text">price</p>
					</div>

					<div className="item-list-box4"></div>
					<p className="item-list_location-text">location</p>
					<p className="item-list_desc-text">desc</p>
				</div>
			</div>
		</div>
	);
};
