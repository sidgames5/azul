import { motion } from "motion/react";

export default function TaskCard({ task }) {
    return <motion.div className="flex flex-row items-center justify-between w-full h-fit bg-slate-500 bg-opacity-50 border-slate-300 border-4 rounded-lg p-2 cursor-pointer" initial={{ scale: 1 }} whileHover={{ scale: 1.02, rotateZ: 1 }}>
        <div className="flex flex-col items-start justify-start">
            <h1 className="text-left self-start text-lg font-bold">{task.name}</h1>
            <p className="text-left self-start text-sm">{task.status}</p>
        </div>
        <div className="flex flex-col items-end justify-end">
            <p className="text-right self-end text-sm">{task.startDate.toLocaleDateString()}</p>
            <p className="text-right self-end text-sm">{task.endDate.toLocaleDateString()}</p>
        </div>
    </motion.div>;
}