import React from 'react';
import { MessageSquare, Paperclip, Clock } from 'lucide-react';

/**
 * Determines the CSS classes for the priority badge based on the priority level.
 */
const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-700 border-red-200';
    case 'Medium':
      return 'bg-amber-100 text-amber-700 border-amber-200';
    case 'Low':
      return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const TaskCard = ({ task }) => {
  return (
    <div 
      className="task-item-card group relative bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-[0.99]"
      draggable="true"
    >
      {/* Priority Badge */}
      <div className="flex justify-between items-start mb-2">
        <span className={`priority-badge text-xs font-medium px-2 py-1 rounded-full border ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
        {task.dueDate && (
            <div className={`flex items-center text-xs ${task.dueDate === 'Today' ? 'text-red-500 font-medium' : 'text-gray-400'}`}>
                <Clock className="w-3 h-3 mr-1" />
                {task.dueDate}
            </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
        {task.title}
      </h3>

      {/* Description Preview (Optional) */}
      {task.description && (
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Meta Data & Assignees */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
        <div className="flex items-center space-x-3 text-gray-400">
          {(task.commentsCount > 0) && (
            <div className="flex items-center text-xs hover:text-gray-600">
              <MessageSquare className="w-3.5 h-3.5 mr-1" />
              <span>{task.commentsCount}</span>
            </div>
          )}
          {(task.attachmentsCount > 0) && (
            <div className="flex items-center text-xs hover:text-gray-600">
              <Paperclip className="w-3.5 h-3.5 mr-1" />
              <span>{task.attachmentsCount}</span>
            </div>
          )}
        </div>

        {/* Assignees Stack */}
        <div className="flex -space-x-2 overflow-hidden">
          {task.assignees.map((user) => (
            <img
              key={user.id}
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
              src={user.avatar}
              alt={user.name}
              title={user.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
