const Results = () => {
	return (
		<div className="grid grid-rows-3 bg-secondary rounded-xl p-6 gap-6">
			<div className="flex justify-between">
				<div className="">
					<p className="text-sm text-gray-cyan-50 ">Tip amount</p>
					<p className="text-xs text-gray-cyan-500">/ person</p>
				</div>
				<p className="text-primary ">$4.27</p>
			</div>
			<div className="flex justify-between">
				<div className="">
					<p className="text-sm text-gray-cyan-50 ">Total</p>
					<p className="text-xs text-gray-cyan-500">/ person</p>
				</div>
				<p className="text-primary ">$32.79</p>
			</div>
			<button className="bg-primary text-lg text-secondary rounded-md">
				RESET
			</button>
		</div>
	);
};

export default Results;
