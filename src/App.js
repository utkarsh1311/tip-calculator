const App = () => {
	return (
		<div className="bg-gray-cyan-100 h-full w-screen ">
			<div className="h-[15%] py-14  flex flex-col justify-center text-center w-fit mx-auto ">
				<h1 className="tracking-[10px] text-gray-cyan-800">
					SPLI
					<br />
					TTER
				</h1>
			</div>
			<div className="h-full flex flex-col gap-6 bg-white rounded-t-3xl p-8">
				<div>
					<label
						htmlFor="bill-amount"
						className="text-base text-gray-cyan-800"
					>
						Bill
					</label>
					<div className="relative">
						<p className="absolute left-4 top-2 text-gray-cyan-800">
							$
						</p>
						<input
							type="number"
							className=" text-secondary bg-gray-cyan-50 m-1 py-1 px-3 rounded-md text-right focus:rounded-md focus:outline-2 focus:outline-primary"
						/>
					</div>
				</div>
				<div>
					<p className="text-base text-gray-cyan-800">Select tip %</p>
					<div className="grid grid-cols-2 grid-rows-3 gap-4 my-2">
						<input
							className="bg-secondary active:bg-primary active:text-gray-cyan-800 text-gray-cyan-100 rounded-md py-1 "
							value="5%"
							type="button"
						/>
						<input
							className="bg-secondary active:bg-primary active:text-gray-cyan-800 text-gray-cyan-100 rounded-md py-1 "
							value="10%"
							type="button"
						/>
						<input
							className="bg-secondary active:bg-primary active:text-gray-cyan-800 text-gray-cyan-100 rounded-md py-1 "
							value="15%"
							type="button"
						/>
						<input
							className="bg-secondary active:bg-primary active:text-gray-cyan-800 text-gray-cyan-100 rounded-md py-1 "
							value="25%"
							type="button"
						/>
						<input
							className="bg-secondary active:bg-primary active:text-gray-cyan-800 text-gray-cyan-100 rounded-md py-1 "
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
			</div>
		</div>
	);
};

export default App;
