import personIcon from "../assets/images/icon-person.svg";
const NumberOfPeople = () => {
	return (
		<div className="">
			<p className="text-base text-gray-cyan-800">Number of People</p>
			<div className="relative">
				<img
					src={personIcon}
					alt="person icon"
					className="absolute top-4 left-4"
				/>
				<input
					type="number"
					className="w-full text-secondary bg-gray-cyan-50 m-1 py-1 px-3 rounded-md text-right focus:rounded-md focus:outline-2 focus:outline-primary"
				/>
			</div>
		</div>
	);
};

export default NumberOfPeople;