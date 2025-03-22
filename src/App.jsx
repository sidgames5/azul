import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskCard from "./components/TaskCard";
import Task from "./models/Task";
import { useEffect, useState } from "react";
import * as dav from "dav";

export default function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadFromDav() {
            // load the tasks from caldav

            // TODO: replace this with data from like a settings menu
            const calDavUrl = "https://corsproxy.io/?url=" + process.env.REACT_APP_DAV_URL;
            console.log(calDavUrl);

            const credentials = new dav.Credentials({
                username: process.env.REACT_APP_DAV_USERNAME,
                password: process.env.REACT_APP_DAV_PASSWORD,
            });

            const client = new dav.Client(new dav.transport.Basic(credentials));

            try {
                const account = await dav.createAccount({
                    server: calDavUrl,
                    xhr: new dav.transport.Basic(credentials),
                    accountType: 'caldav',
                });

                const calendars = account.calendars;
                console.log('Lists:', calendars);
            } catch (error) {
                console.error('Error fetching lists:', error);
            }
        }
        loadFromDav();
    }, []);

    return <main className="flex w-screen h-screen bg-gray-800">
        <div className="w-[20%] h-full border-white border-r-2 flex flex-col items-center justify-center align-middle">
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
        <div className="w-[30%] h-full border-white border-r-2 flex flex-col items-center justify-center align-middle">
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
                    <div className="flex flex-col w-full gap-4">
                        <TaskCard task={new Task("Develop the app", "something", new Date("2025-03-17"), new Date("2025-03-18"), 2, 1, null)} />
                        <TaskCard task={new Task("Finish developing the app", "something", new Date("2025-03-17"), new Date("2025-03-18"), 3, 1, null)} />
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
        <div className="w-[50%] h-full flex flex-col items-center justify-center align-middle">
            {/* Calendar */}
            <div className="bg-zinc-700 w-[95%] h-[95%] rounded-lg">
                {/* TODO: implement calendars */}
            </div>
        </div>
    </main>;
}