import React, { useState } from 'react';
import { PanelRightClose, PanelRightOpen } from 'lucide-react';
import BoardHeader from './components/BoardHeader';
import KanbanBoard from './components/KanbanBoard';
import ActivitySidebar from './components/ActivitySidebar';
import { INITIAL_TASKS, RECENT_ACTIVITY } from './constants';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 overflow-hidden text-gray-900 font-sans">
      {/* Top Header */}
      <BoardHeader />

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Kanban Board Area */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
            <KanbanBoard tasks={INITIAL_TASKS} />
            
            {/* Sidebar Toggle (Floating on Mobile, Fixed on Desktop) */}
            <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className={`absolute bottom-6 right-6 z-30 bg-white p-3 rounded-full shadow-lg border border-gray-200 text-gray-600 hover:text-blue-600 transition-all hover:scale-105 ${isSidebarOpen ? 'md:hidden' : 'flex'}`}
                title="Toggle Activity Feed"
            >
                {isSidebarOpen ? <PanelRightClose className="w-5 h-5" /> : <PanelRightOpen className="w-5 h-5" />}
            </button>
        </main>

        {/* Right Sidebar */}
        <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 ease-in-out relative border-l border-gray-200 bg-white flex-shrink-0 hidden md:block`}>
           <div className="absolute inset-0 w-80">
                <ActivitySidebar 
                    activities={RECENT_ACTIVITY} 
                    isOpen={true} 
                    onClose={() => setIsSidebarOpen(false)} 
                />
           </div>
        </div>

        {/* Mobile Overlay Sidebar */}
         <div className={`md:hidden fixed inset-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
            <ActivitySidebar 
                activities={RECENT_ACTIVITY} 
                isOpen={isSidebarOpen} 
                onClose={() => setIsSidebarOpen(false)} 
            />
         </div>

      </div>
    </div>
  );
};

export default App;
