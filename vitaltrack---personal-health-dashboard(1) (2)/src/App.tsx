import React, { useState } from 'react';
import { 
  Home, 
  BarChart2, 
  Calendar, 
  User, 
  Plus, 
  Droplets, 
  Footprints, 
  Moon, 
  Pill,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  Activity,
  Settings,
  Users,
  Smile
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { cn } from './lib/utils';

// --- Mock Data ---
const WEEKLY_STEPS = [
  { day: 'M', steps: 6000 },
  { day: 'T', steps: 8500 },
  { day: 'W', steps: 7200 },
  { day: 'T', steps: 9100 },
  { day: 'F', steps: 5400 },
  { day: 'S', steps: 12000 },
  { day: 'S', steps: 6000 },
];

const SLEEP_QUALITY = [
  { day: 'M', hours: 6.2 },
  { day: 'T', hours: 7.5 },
  { day: 'W', hours: 6.8 },
  { day: 'T', hours: 8.1 },
  { day: 'F', hours: 7.2 },
  { day: 'S', hours: 8.5 },
  { day: 'S', hours: 6.5 },
];

// --- Components ---

const ProgressBar = ({ progress, colorClass = "bg-primary" }: { progress: number, colorClass?: string }) => (
  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: `${Math.min(progress, 100)}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={cn("h-full rounded-full", colorClass)}
    />
  </div>
);

const CircularProgress = ({ score }: { score: number }) => {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90">
        <circle
          className="text-slate-100"
          cx="64"
          cy="64"
          fill="transparent"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
        />
        <motion.circle
          className="text-primary"
          cx="64"
          cy="64"
          fill="transparent"
          r={radius}
          stroke="currentColor"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          strokeLinecap="round"
          strokeWidth="8"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold">{score}</span>
        <span className="text-[10px] uppercase font-bold text-slate-400">Score</span>
      </div>
    </div>
  );
};

// --- Screens ---

const DashboardScreen = () => (
  <div className="space-y-8 pb-24">
    <header className="flex justify-between items-center px-6 pt-6">
      <div>
        <h1 className="text-2xl font-bold">Good morning, Alex</h1>
        <p className="text-slate-500 text-sm">Tuesday, Oct 24</p>
      </div>
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-primary/20 p-0.5 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/alex/100/100" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background-light rounded-full"></span>
      </div>
    </header>

    <section className="px-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-6">
        <CircularProgress score={85} />
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-1">Health Status: Optimal</h2>
          <p className="text-sm text-slate-500">You're doing great! Your health index improved by 5% today.</p>
          <div className="mt-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full flex items-center w-fit gap-1">
              <TrendingUp size={12} /> +5.2%
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="px-6">
      <div className="flex justify-between items-end mb-4">
        <h3 className="font-bold text-lg">Habits & Activity</h3>
        <button className="text-primary text-sm font-semibold">View Details</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
              <Droplets size={20} />
            </div>
            <span className="font-bold">Water</span>
          </div>
          <p className="text-2xl font-bold">1.5<span className="text-sm font-normal text-slate-400">/2.5L</span></p>
          <div className="mt-3">
            <ProgressBar progress={60} colorClass="bg-blue-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
              <Footprints size={20} />
            </div>
            <span className="font-bold">Steps</span>
          </div>
          <p className="text-2xl font-bold">6,432<span className="text-sm font-normal text-slate-400">/10k</span></p>
          <div className="mt-3">
            <ProgressBar progress={64} colorClass="bg-primary" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-100 col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center">
              <Moon size={20} />
            </div>
            <span className="font-bold">Sleep</span>
          </div>
          <p className="text-2xl font-bold">7.2<span className="text-sm font-normal text-slate-400">/8h</span></p>
          <div className="mt-3">
            <ProgressBar progress={90} colorClass="bg-indigo-500" />
          </div>
        </div>
      </div>
    </section>

    <section className="px-6">
      <h3 className="font-bold text-lg mb-4">Medication Reminders</h3>
      <div className="bg-primary/5 border-2 border-primary/10 rounded-2xl p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
          <Pill size={24} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-primary">Vitamin D3 Supplement</h4>
            <span className="text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded uppercase">Next Dose</span>
          </div>
          <p className="text-sm text-slate-600">Take 1 capsule with food.</p>
          <div className="flex items-center gap-1 mt-1 text-primary font-bold">
            <Clock size={14} />
            <span className="text-sm">10:00 AM</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ScheduleScreen = () => {
  const [meds, setMeds] = useState([
    { id: 1, name: 'Aspirin Low Dose', dosage: '81mg • Once daily', time: '08:00 AM', taken: true },
    { id: 2, name: 'Lisinopril', dosage: '10mg • After breakfast', time: '09:30 AM', taken: false },
    { id: 3, name: 'Vitamin D3', dosage: '2000 IU • With food', time: '01:00 PM', taken: false },
    { id: 4, name: 'Metformin', dosage: '500mg • Before dinner', time: '07:00 PM', taken: true },
  ]);

  const toggleMed = (id: number) => {
    setMeds(prev => prev.map(m => m.id === id ? { ...m, taken: !m.taken } : m));
  };

  return (
    <div className="pb-24">
      <header className="p-6 flex items-center justify-between sticky top-0 bg-background-light/80 backdrop-blur-md z-10">
        <div className="text-primary bg-primary/10 p-2 rounded-xl">
          <Calendar size={24} />
        </div>
        <h2 className="text-xl font-bold flex-1 text-center">Medication Schedule</h2>
        <div className="w-10" />
      </header>

      <div className="px-6 flex gap-4 mb-6">
        <div className="flex-1 bg-primary/10 border border-primary/20 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 size={16} className="text-primary" />
            <span className="text-xs font-medium text-slate-600">Taken Today</span>
          </div>
          <p className="text-3xl font-bold">{meds.filter(m => m.taken).length}</p>
        </div>
        <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={16} className="text-slate-400" />
            <span className="text-xs font-medium text-slate-600">Remaining</span>
          </div>
          <p className="text-3xl font-bold">{meds.filter(m => !m.taken).length}</p>
        </div>
      </div>

      <div className="px-6 mb-6">
        <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
          <Plus size={20} /> Add New Medication
        </button>
      </div>

      <div className="px-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Today's Reminders</h3>
          <button className="text-primary text-sm font-semibold">View All</button>
        </div>
        <div className="space-y-2">
          {meds.map(med => (
            <div key={med.id} className={cn(
              "flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 transition-opacity",
              !med.taken && "opacity-100",
              med.taken && "opacity-75"
            )}>
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                med.taken ? "bg-slate-100 text-slate-400" : "bg-primary/10 text-primary"
              )}>
                <Pill size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900">{med.name}</h4>
                <p className="text-xs text-slate-500">{med.dosage}</p>
                <div className="flex items-center gap-1 mt-1 text-primary font-bold">
                  <Clock size={12} />
                  <span className="text-[10px] uppercase tracking-wider">{med.time}</span>
                </div>
              </div>
              <button 
                onClick={() => toggleMed(med.id)}
                className={cn(
                  "w-12 h-7 rounded-full p-1 transition-colors relative",
                  med.taken ? "bg-primary" : "bg-slate-200"
                )}
              >
                <motion.div 
                  animate={{ x: med.taken ? 20 : 0 }}
                  className="w-5 h-5 bg-white rounded-full shadow-sm"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ReportsScreen = () => {
  return (
    <div className="pb-24">
      <header className="p-6 flex items-center justify-between sticky top-0 bg-background-light/80 backdrop-blur-md z-10">
        <button className="text-primary">
          <ChevronRight size={24} className="rotate-180" />
        </button>
        <h2 className="text-xl font-bold flex-1 text-center">Health Reports</h2>
        <button className="text-primary">
          <Activity size={24} />
        </button>
      </header>

      <div className="px-6 flex border-b border-slate-100 mb-6">
        <button className="flex-1 py-3 text-sm font-bold border-b-2 border-primary text-primary">Overview</button>
        <button className="flex-1 py-3 text-sm font-medium text-slate-400">Detailed</button>
        <button className="flex-1 py-3 text-sm font-medium text-slate-400">Insights</button>
      </div>

      <div className="px-6 space-y-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <div className="mb-4">
            <p className="text-slate-500 text-sm font-medium">Weekly Steps</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-bold">54,200</h3>
              <span className="text-green-500 text-sm font-bold flex items-center">
                <TrendingUp size={14} /> 12%
              </span>
            </div>
          </div>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={WEEKLY_STEPS}>
                <defs>
                  <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec5b13" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#ec5b13" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="steps" 
                  stroke="#ec5b13" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorSteps)" 
                />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} 
                />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <div className="mb-4">
            <p className="text-slate-500 text-sm font-medium">Sleep Quality</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-bold">6h 45m <span className="text-lg font-normal text-slate-400">avg</span></h3>
              <span className="text-red-500 text-sm font-bold flex items-center">
                <TrendingUp size={14} className="rotate-180" /> 5%
              </span>
            </div>
          </div>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SLEEP_QUALITY}>
                <Bar dataKey="hours" radius={[4, 4, 0, 0]}>
                  {SLEEP_QUALITY.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 5 ? '#ec5b13' : '#f1f5f9'} />
                  ))}
                </Bar>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/10 p-5 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="bg-primary p-2 rounded-xl text-white">
              <AlertCircle size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-primary font-bold text-xs uppercase tracking-wider mb-1">AI Health Suggestion</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                You have been sleeping less than 7 hours this week, try to unwind earlier.
              </p>
              <button className="mt-4 px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg">
                View Tips
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">Medical Snippets</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            <div className="min-w-[160px] bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Activity size={14} className="text-primary" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">BP</span>
              </div>
              <p className="text-xl font-bold">120/80</p>
              <p className="text-[10px] text-slate-500 mt-1">Last taken: Today</p>
            </div>
            <div className="min-w-[160px] bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Droplets size={14} className="text-primary" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">Glucose</span>
              </div>
              <p className="text-xl font-bold">98 mg/dL</p>
              <p className="text-[10px] text-slate-500 mt-1">Fasted state</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrackerScreen = () => {
  return (
    <div className="pb-24">
      <header className="p-6 flex items-center justify-between sticky top-0 bg-background-light/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-xl text-primary">
            <Calendar size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none">Today</h1>
            <p className="text-xs text-slate-500">October 24, 2023</p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <User size={20} />
        </button>
      </header>

      <main className="px-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-sm text-slate-500 font-medium">Daily Goal</p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-bold">75</span>
              <span className="text-sm font-semibold text-primary">%</span>
            </div>
            <div className="mt-3">
              <ProgressBar progress={75} />
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-sm text-slate-500 font-medium">Streak</p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-bold text-primary">12</span>
              <span className="text-sm font-semibold">days</span>
            </div>
            <p className="text-[10px] mt-3 text-green-600 font-bold uppercase tracking-wider">Keep it up!</p>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Habits</h2>
          
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
                  <Droplets size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Water Intake</h3>
                  <p className="text-xs text-slate-500">Goal: 2500ml</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 rounded-full px-2 py-1 border border-slate-100">
                <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-primary"><Plus size={16} className="rotate-45" /></button>
                <span className="font-bold min-w-[50px] text-center">1800ml</span>
                <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-primary"><Plus size={16} /></button>
              </div>
            </div>
            <ProgressBar progress={72} colorClass="bg-blue-500" />
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
                  <Footprints size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Steps</h3>
                  <p className="text-xs text-slate-500">Goal: 10,000</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                <Activity size={14} /> Sync
              </button>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-2xl font-bold">8,432</span>
              <span className="text-xs font-medium text-slate-400">84% of daily goal</span>
            </div>
            <ProgressBar progress={84} colorClass="bg-orange-500" />
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center">
                  <Moon size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Sleep Duration</h3>
                  <p className="text-xs text-slate-500">Goal: 8h 00m</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600">11:00 P</div>
                <div className="bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600">07:15 A</div>
              </div>
            </div>
            <div className="flex justify-between items-center bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
              <span className="text-sm font-medium">Total Rest</span>
              <span className="text-lg font-bold text-indigo-600">8h 15m</span>
            </div>
            <ProgressBar progress={100} colorClass="bg-indigo-500" />
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center">
                <Smile size={20} />
              </div>
              <div>
                <h3 className="font-bold">Today's Mood</h3>
                <p className="text-xs text-slate-500">How are you feeling?</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-2 rounded-2xl">
              {['😢', '😕', '😐', '😊', '🤩'].map((emoji, i) => (
                <button 
                  key={i} 
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all",
                    i === 3 ? "bg-white shadow-sm border border-primary/20 scale-110" : "grayscale opacity-50"
                  )}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home': return <DashboardScreen />;
      case 'reports': return <ReportsScreen />;
      case 'schedule': return <ScheduleScreen />;
      case 'tracker': return <TrackerScreen />;
      default: return <DashboardScreen />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background-light relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-24 right-6 z-50">
        <button className="bg-red-600 text-white w-14 h-14 rounded-full shadow-lg shadow-red-500/30 flex items-center justify-center transition-transform active:scale-90">
          <AlertCircle size={28} />
        </button>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-100 px-6 py-3 pb-8 z-40">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button 
            onClick={() => setActiveTab('home')}
            className={cn("flex flex-col items-center gap-1", activeTab === 'home' ? "text-primary" : "text-slate-400")}
          >
            <Home size={24} fill={activeTab === 'home' ? "currentColor" : "none"} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
          </button>
          <button 
            onClick={() => setActiveTab('reports')}
            className={cn("flex flex-col items-center gap-1", activeTab === 'reports' ? "text-primary" : "text-slate-400")}
          >
            <BarChart2 size={24} fill={activeTab === 'reports' ? "currentColor" : "none"} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Insights</span>
          </button>
          
          <div className="relative -top-8">
            <button 
              onClick={() => setActiveTab('tracker')}
              className="w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 flex items-center justify-center border-4 border-background-light"
            >
              <Plus size={32} />
            </button>
          </div>

          <button 
            onClick={() => setActiveTab('schedule')}
            className={cn("flex flex-col items-center gap-1", activeTab === 'schedule' ? "text-primary" : "text-slate-400")}
          >
            <Calendar size={24} fill={activeTab === 'schedule' ? "currentColor" : "none"} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Plans</span>
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className={cn("flex flex-col items-center gap-1", activeTab === 'profile' ? "text-primary" : "text-slate-400")}
          >
            <User size={24} fill={activeTab === 'profile' ? "currentColor" : "none"} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
