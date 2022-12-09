import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/profile/Profile";
import { ItemDetail } from "./components/itemDetail/ItemDetail";
import { AddPost } from "./components/addPost/AddPost";
import { FilteredList } from "./pages/filteredlist/FilteredList";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* <Route path="/login" element={<Home />} />
			<Route path="/signup" element={<Home />} /> */}
			<Route path="/profile/:username" element={<Profile />} />
			<Route path="/:postId" element={<ItemDetail />} />
			<Route path="/newpost" element={<AddPost />} />
			<Route path="/search/result" element={<FilteredList />} />
		</Routes>
	);

	/*
			<div className="components">
				<Routes>
					<Route path="/" element={<Navigate to="/warehouse" />} />
					<Route path="/inventory" element={<InventoryList />} />{" "}
					<Route path="/inventory/add" element={<AddNewInventoryItem />} />
					<Route
						path="/inventory/:inventoryID"
						element={<InventoryItemDetails />}
					/>
					<Route
						path="/inventory/:inventoryID/edit"
						element={<EditInventoryItem />}
					/>
					<Route path="/warehouse" element={<WarehouseList />} />
					<Route path="/warehouse/add" element={<AddWarehouse />} />
					<Route
						path="/warehouse/:warehouseID"
						element={<WarehouseDetailsComponent />}
					/>
					<Route
						path="/warehouse/:warehouseID/edit"
						element={<EditWarehouse />}
					/>
					<Route
						path="*"
						element={
							<>
								<h1>Page not found</h1>
							</>
						}
					/>
				</Routes>{" "}
				<ToastContainer />
			</div> */

	/* <div className="footer"> */

	// </div>
}
export default App;
