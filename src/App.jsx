import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
    return <main className="flex w-screen h-screen bg-gray-800">
        <div className="w-1/5 h-full border-white border-r-2 flex flex-col items-center justify-center align-middle">
            {/* Sidebar */}
            <div className="bg-zinc-700 w-[85%] h-[95%] rounded-lg flex flex-col">
                <div className="flex flex-col items-center w-full h-fit border-b-2 border-white p-4">
                    <h1 className="text-left self-start text-lg font-bold">Calendars</h1>
                </div>
                <div className="flex flex-col items-center w-full h-fit p-4">
                    <h1 className="text-left self-start text-lg font-bold">Task Lists</h1>
                </div>
            </div>
        </div>
        <div className="w-1/5 h-full border-white border-r-2 flex flex-col items-center justify-center align-middle">
            {/* Tasks */}
            <div className="bg-zinc-700 w-[85%] h-[95%] rounded-lg flex flex-col">
                <div className="flex flex-col items-center w-full h-fit border-b-2 border-white p-4">
                    <div>
                        <input type="text" name="name" id="name" placeholder="Add task" />
                        {/* TODO: add create button */}
                    </div>
                </div>
                <div className="flex flex-col items-center w-full h-fit border-b-2 border-white p-4">
                    <div className="w-full flex flex-row items-center justify-between">
                        <h1 className="text-left self-start text-lg font-bold">Todo</h1>
                        <FontAwesomeIcon icon={faCaretDown} className="cursor-pointer" onClick={() => {
                            // TODO: collapse/expand div
                        }} />
                    </div>
                </div>
                <div className="flex flex-col items-center w-full h-fit border-b-2 border-white p-4">
                    <div className="w-full flex flex-row items-center justify-between">
                        <h1 className="text-left self-start text-lg font-bold">Done</h1>
                        <FontAwesomeIcon icon={faCaretDown} className="cursor-pointer" onClick={() => {
                            // TODO: collapse/expand div
                        }} />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-3/5 h-full flex flex-col items-center justify-center align-middle">
            {/* Calendar */}
            <div className="bg-zinc-700 w-[95%] h-[95%] rounded-lg">
            </div>
        </div>
    </main>;
}