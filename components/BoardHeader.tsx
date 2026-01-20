import React from 'react';
import { Search, Bell, Settings, Filter, Users, UserPlus } from 'lucide-react';
import { USERS } from '../constants';

const BoardHeader: React.FC = () => {
  return (
    <header className="board-header bg-white border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-10">
      
      {/* Left: Title and Project Info */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
            <span className="text-white font-bold text-xl">O</span>
        </div>
        <div>
            <h1 className="text-xl font-bold text-gray-900 leading-none">Orbit Design System</h1>
            <p className="text-xs text-gray-500 mt-1">Updated 10 mins ago</p>
        </div>
        <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>
        <div className="hidden sm:flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-gray-600">On Track</span>
        </div>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
        
        {/* Search */}
        <div className="relative group hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
            <input 
                type="text" 
                placeholder="Search tasks..." 
                className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-48 transition-all"
            />
        </div>

        {/* User Stack & Invite */}
        <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
                {USERS.slice(0, 3).map(user => (
                    <img key={user.id} src={user.avatar} className="w-8 h-8 rounded-full border-2 border-white" alt={user.name} />
                ))}
                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                    +4
                </div>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-blue-600/20">
                <UserPlus className="w-4 h-4" />
                <span className="hidden sm:inline">Invite</span>
            </button>
        </div>

        {/* Icon Actions */}
        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Filter className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
        </div>
      </div>
    </header>
  );
};

export default BoardHeader;