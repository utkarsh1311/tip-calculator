import BillAmount from "./components/BillAmount";
import NumberOfPeople from "./components/NumberOfPeople";
import Results from "./components/Results";
import TipPercent from "./components/TipPercent";

const App = () => {
	return (
		<div className="bg-gray-cyan-100 text-2xl h-screen w-screen font-space-mono">
			<div className="h-[15%] py-14  flex flex-col justify-center text-center w-fit mx-auto ">
				<h1 className="tracking-[10px] text-gray-cyan-800">
					SPLI
					<br />
					TTER
				</h1>
			</div>
			<div className="h-full gap-5 grid grid-rows-3 bg-white rounded-t-3xl p-8 lg:grid-cols-2 lg:grid-rows-1 lg:w-3/5 lg:h-fit lg:mx-auto lg:rounded-3xl lg:gap-y-0 lg:gap-x-8">
				<div className="row-span-2 justify-evenly flex flex-col gap-5 lg:justify-center">
					<BillAmount />
					<TipPercent />
					<NumberOfPeople />
				</div>
				<Results />
			</div>
		</div>
	);
};

export default App;
