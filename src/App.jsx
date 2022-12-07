// import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { ItemDetail } from "./components/itemDetail/ItemDetail";
// import { ItemList } from "./components/itemList/ItemList";
// import { SearchBar } from "./components/searchBar/SearchBar";

function App() {
	return (
		<div className="main">
			<Header />
			{/* <SearchBar />
			<ItemList /> */}
			<ItemDetail />
			{/*
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
			</div> */}
			{/* <div className="footer"> */}
			<Footer />
		</div>
		// </div>
	);
}
export default App;
