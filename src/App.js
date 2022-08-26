import BillAmount from "./components/BillAmount";
import NumberOfPeople from "./components/NumberOfPeople";
import Results from "./components/Results";
import TipPercent from "./components/TipPercent";

const App = () => {
	return (
		<div className="bg-gray-cyan-100 text-2xl h-full w-screen font-space-mono">
			<div className="h-[15%] py-14  flex flex-col justify-center text-center w-fit mx-auto ">
				<h1 className="tracking-[10px] text-gray-cyan-800">
					SPLI
					<br />
					TTER
				</h1>
			</div>
			<div className="h-full justify-center gap-5 flex flex-col bg-white rounded-t-3xl p-8">
				<div className="flex flex-col gap-5">
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
