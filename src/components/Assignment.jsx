// src/components/Assignment.jsx
import React from 'react';
import Card from './ui/card'; // Import the Card component

const Assignment = () => {
  return (
    <div>
      <h1>Assignments</h1>
      <Card 
        title="Assignment 1" 
        description="This is the description of Assignment 1."
        imageUrl="https://via.placeholder.com/300" 
      />
      <Card 
        title="Assignment 2" 
        description="This is the description of Assignment 2."
        imageUrl="https://via.placeholder.com/300" 
      />
    </div>
  );
};

export default Assignment;


// import React, { useState, useEffect } from 'react';
// // import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// import Card from "./ui/card";  // Adjust the relative path as per your folder structure


// const TaskListManager = () => {
//   const [tasks, setTasks] = useState([]);
//   const [statusFilter, setStatusFilter] = useState('All');
//   const [notification, setNotification] = useState(null);

//   // Fetch tasks from dummy API
//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const data = await response.json();
//         const processedTasks = data.slice(0, 20).map(task => ({
//           id: task.id,
//           title: task.title,
//           description: 'No description available',
//           status: task.completed ? 'Done' : 'To Do'
//         }));
//         setTasks(processedTasks);
//       } catch (error) {
//         showNotification('Failed to fetch tasks', 'error');
//       }
//     };
//     fetchTasks();
//   }, []);

//   // Show notification
//   const showNotification = (message, type = 'success') => {
//     setNotification({ message, type });
//     setTimeout(() => setNotification(null), 3000);
//   };

//   // Handle task update
//   const handleTaskUpdate = (taskId, field, value) => {
//     const updatedTasks = tasks.map(task => 
//       task.id === taskId 
//         ? { ...task, [field]: value }
//         : task
//     );
//     setTasks(updatedTasks);
//     showNotification('Task updated successfully');
//   };

//   // Handle task deletion
//   const handleDeleteTask = (taskId) => {
//     const filteredTasks = tasks.filter(task => task.id !== taskId);
//     setTasks(filteredTasks);
//     showNotification('Task deleted successfully');
//   };

//   // Add new task
//   const addNewTask = () => {
//     const newTask = {
//       id: Date.now(),
//       title: 'New Task',
//       description: 'Add description',
//       status: 'To Do'
//     };
//     setTasks(prevTasks => [...prevTasks, newTask]);
//     showNotification('New task added');
//   };

//   // Filter tasks by status
//   const filteredTasks = tasks.filter(task => 
//     statusFilter === 'All' || task.status === statusFilter
//   );

//   // Task counters
//   const taskCounters = {
//     'To Do': tasks.filter(task => task.status === 'To Do').length,
//     'In Progress': tasks.filter(task => task.status === 'In Progress').length,
//     'Done': tasks.filter(task => task.status === 'Done').length
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {notification && (
//         <div 
//           className={`fixed top-4 right-4 p-4 rounded ${
//             notification.type === 'error' 
//               ? 'bg-red-500 text-white' 
//               : 'bg-green-500 text-white'
//           }`}
//         >
//           {notification.message}
//         </div>
//       )}

//       <Card>
//         <CardHeader>
//           <CardTitle>Task List Manager</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="flex justify-between mb-4">
//             <div className="flex space-x-2">
//               <select 
//                 value={statusFilter} 
//                 onChange={(e) => setStatusFilter(e.target.value)}
//                 className="p-2 border rounded"
//               >
//                 <option value="All">All Tasks</option>
//                 <option value="To Do">To Do</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Done">Done</option>
//               </select>
//               <button 
//                 onClick={addNewTask}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Add Task
//               </button>
//             </div>
//             <div className="flex space-x-2">
//               {Object.entries(taskCounters).map(([status, count]) => (
//                 <div 
//                   key={status} 
//                   className="bg-gray-100 p-2 rounded"
//                 >
//                   {status}: {count}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border p-2">ID</th>
//                 <th className="border p-2">Title</th>
//                 <th className="border p-2">Description</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTasks.map(task => (
//                 <tr key={task.id} className="hover:bg-gray-50">
//                   <td className="border p-2">{task.id}</td>
//                   <td className="border p-2">
//                     <input
//                       type="text"
//                       value={task.title}
//                       onChange={(e) => handleTaskUpdate(task.id, 'title', e.target.value)}
//                       className="w-full p-1"
//                     />
//                   </td>
//                   <td className="border p-2">
//                     <input
//                       type="text"
//                       value={task.description}
//                       onChange={(e) => handleTaskUpdate(task.id, 'description', e.target.value)}
//                       className="w-full p-1"
//                     />
//                   </td>
//                   <td className="border p-2">
//                     <select
//                       value={task.status}
//                       onChange={(e) => handleTaskUpdate(task.id, 'status', e.target.value)}
//                       className="w-full p-1"
//                     >
//                       <option value="To Do">To Do</option>
//                       <option value="In Progress">In Progress</option>
//                       <option value="Done">Done</option>
//                     </select>
//                   </td>
//                   <td className="border p-2">
//                     <button
//                       onClick={() => handleDeleteTask(task.id)}
//                       className="bg-red-500 text-white px-2 py-1 rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default TaskListManager;