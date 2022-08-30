import dollarIcon from "../assets/images/icon-dollar.svg";

const BillAmount = ({ amount, setAmount }) => {
	return (
		<div className="">
			<label
				htmlFor="bill-amount"
				className="text-base text-gray-cyan-800"
			>
				Bill
			</label>
			<div className="relative">
				<img
					src={dollarIcon}
					alt="dollar icon"
					className="absolute left-4 top-4"
				/>
				<input
					value={amount}
					onChange={setAmount}
					type="number"
					className="w-full text-secondary bg-gray-cyan-50 m-1 py-1 px-3 rounded-md text-right focus:rounded-md focus:outline-2 focus:outline-primary"
				/>
			</div>
		</div>
	);
};

export default BillAmount;
