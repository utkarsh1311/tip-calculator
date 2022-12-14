const Results = ({ data, setData }) => {
	return (
		<div className="grid grid-rows-3 bg-secondary rounded-xl p-6 gap-6 lg:grid-rows-4 lg:p-8">
			<div className="flex justify-between">
				<div className="">
					<p className="text-sm text-gray-cyan-50 ">Tip amount</p>
					<p className="text-xs text-gray-cyan-500">/ person</p>
				</div>
				<p className="text-primary md:text-4xl">${data.tipAmount}</p>
			</div>
			<div className="flex justify-between">
				<div className="">
					<p className="text-sm text-gray-cyan-50 ">Total</p>
					<p className="text-xs text-gray-cyan-500">/ person</p>
				</div>
				<p className="text-primary md:text-4xl">${data.total}</p>
			</div>
			<button onClick={setData} className="bg-primary text-lg text-secondary rounded-md lg:row-start-4">
				RESET
			</button>
		</div>
	);
};

export default Results;
