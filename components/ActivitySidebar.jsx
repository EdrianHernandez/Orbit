import React from 'react';
import { X, Zap, ArrowRight } from 'lucide-react';

const ActivitySidebar = ({ activities, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <aside className="activity-sidebar w-80 bg-white border-l border-gray-200 flex flex-col h-full flex-shrink-0 absolute right-0 top-0 bottom-0 z-20 md:relative shadow-xl md:shadow-none">
      
      {/* Header */}
      <div className="p-5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-800">
            <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h2 className="font-semibold text-base">Activity Feed</h2>
        </div>
        <button 
            onClick={onClose}
            className="md:hidden p-1 hover:bg-gray-100 rounded text-gray-500"
        >
            <X className="w-5 h-5" />
        </button>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
        <div className="relative border-l border-gray-200 ml-3.5 space-y-8">
            {activities.map((activity) => (
                <div key={activity.id} className="relative pl-6 group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-300 ring-4 ring-white group-hover:bg-blue-500 transition-colors"></div>
                    
                    {/* Content */}
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 mb-1">
                             <img 
                                src={activity.user.avatar} 
                                alt={activity.user.name} 
                                className="w-6 h-6 rounded-full object-cover"
                            />
                            <span className="text-sm font-semibold text-gray-900">
                                {activity.user.name}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {activity.action} <span className="font-medium text-gray-800">"{activity.target}"</span>
                        </p>
                        <span className="text-xs text-gray-400 mt-1">{activity.timestamp}</span>
                    </div>
                </div>
            ))}
        </div>
        
        <button className="w-full mt-8 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-2 group">
            View all history
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </aside>
  );
};

export default ActivitySidebar;
