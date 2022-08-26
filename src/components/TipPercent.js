const TipPercent = () => {
	return (
		<div className="">
			<p className="text-base text-gray-cyan-800">Select tip %</p>
			<div className="grid grid-cols-2 grid-rows-3 gap-4 my-2">
				<input
					className="tip-choice-btn"
					value="5%"
					type="button"
				/>
				<input
					className="tip-choice-btn"
					value="10%"
					type="button"
				/>
				<input
					className="tip-choice-btn"
					value="15%"
					type="button"
				/>
				<input
					className="tip-choice-btn"
					value="25%"
					type="button"
				/>
				<input
					className="tip-choice-btn"
					value="50%"
					type="button"
				/>
				<input
					className="bg-gray-cyan-50 text-gray-cyan-800 focus:outline-2 focus:outline-primary rounded-md py-1 text-center"
					placeholder="Custom"
					type="number"
				/>
			</div>
		</div>
	);
};

export default TipPercent;
