import { motion } from "motion/react";
import { useState } from "react";

export default function TaskCard({ task }) {
    const [status, setStatus] = useState(task.status);

    const getStatusColor = () => {
        switch (task.status) {
            case 1:
                return "red";
            case 2:
                return "yellow";
            case 3:
                return "green";
            default:
                return "gray";
        }
    };

    const getPriorityColor = () => {
        switch (task.priority) {
            case 1:
                return "red";
            case 2:
                return "amber";
            case 3:
                return "slate";
            default:
                return "gray";
        }
    }

    return <motion.div className={`flex flex-row items-center justify-between w-full h-fit border-${getPriorityColor()}-300 border-4 rounded-lg p-2 cursor-pointer bg-${getPriorityColor()}-500`} initial={{ scale: 1 }} whileHover={{ scale: 1.02, rotateZ: 1 }}>
        <h1 className="text-left self-start text-lg">{task.name}</h1>
        <select className={`text-sm bg-${getStatusColor()}-500 border-${getStatusColor()}-300 border-2 rounded-md`} value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value={1}>Todo</option>
            <option value={2}>Doing</option>
            <option value={3}>Done</option>
        </select>
    </motion.div>;
}