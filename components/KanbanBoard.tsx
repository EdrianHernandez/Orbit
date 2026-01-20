import React from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';
import TaskCard from './TaskCard';
import { Task, Status, ColumnData } from '../types';

interface KanbanBoardProps {
  tasks: Task[];
}

const COLUMNS: Status[] = ['To Do', 'In Progress', 'Done'];

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
  
  const getTasksByStatus = (status: Status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="kanban-board-container flex-1 overflow-x-auto overflow-y-hidden bg-gray-50/50">
      <div className="h-full flex p-6 gap-6 min-w-max">
        {COLUMNS.map((status) => {
          const columnTasks = getTasksByStatus(status);
          const taskCount = columnTasks.length;

          return (
            <div 
              key={status} 
              className="kanban-column flex flex-col w-80 max-h-full"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                    {status}
                  </h2>
                  <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {taskCount}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-1 text-gray-400 hover:bg-gray-200 rounded transition">
                        <Plus className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:bg-gray-200 rounded transition">
                        <MoreHorizontal className="w-4 h-4" />
                    </button>
                </div>
              </div>

              {/* Column Content */}
              <div className="flex-1 bg-gray-100/50 rounded-xl p-2 border border-gray-100/50 flex flex-col gap-3 overflow-y-auto custom-scrollbar">
                {columnTasks.length > 0 ? (
                    columnTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                    ))
                ) : (
                    <div className="h-24 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                        No tasks
                    </div>
                )}
                
                {/* Add Card Ghost Button */}
                <button className="flex items-center gap-2 text-gray-500 hover:text-gray-800 hover:bg-gray-200/50 p-2 rounded-lg text-sm font-medium transition-colors mt-1 text-left">
                    <Plus className="w-4 h-4" />
                    <span>New Task</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;