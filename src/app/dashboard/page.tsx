/**
 * Dashboard Page Component
 * Main interface for the habit tracking application
 */
'use client';

import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import '../style/dashboard.css';

/**
 * Interface defining the structure of dashboard statistics
 */
interface DashboardStats {
  totalHabits: number;    // Total number of habits tracked
  completedToday: number; // Habits completed for the current day
  streakCount: number;    // Current streak of habit completion
}

/**
 * Main Dashboard Component
 * Displays user's habit tracking information and statistics
 */
export default function Dashboard() {
  // State for tracking statistics
  const [stats, setStats] = useState<DashboardStats>({
    totalHabits: 0,
    completedToday: 0,
    streakCount: 0,
  });

  // State for managing view switching between dashboard and analytics
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="dashboard-container">
      {/* Header Section: Contains title, navigation, and user profile */}
      <div className="dashboard-header">
        {/* Dashboard Title */}
        <h1 className="dashboard-title">Dashboard</h1>

        {/* Center Navigation: View Switcher */}
        <div className="header-center">
          <div className="view-switch">
            <button 
              className={`view-switch-button ${activeView === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveView('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`view-switch-button ${activeView === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveView('analytics')}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* User Profile Icon */}
        <div className="header-right">
          <div className="user-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Layout: Contains sidebar and main content area */}
      <div className="dashboard-layout">
        {/* Sidebar: Navigation menu */}
        <aside className="dashboard-sidebar">
          <h2 className="dashboard-title">Menu</h2>
          {/* TODO: Add navigation items */}
        </aside>

        {/* Main Content Area */}
        <main className="dashboard-main">
          {/* Habit Activity Calendar: Visual representation of habit completion */}
          <section className="dashboard-section github-calendar-section">
            <h2 className="section-title">Habit Activity</h2>
            <div className="calendar-wrapper">
              <div className="section-card calendar-container">
                <GitHubCalendar 
                  username="your-github-username"
                  blockSize={20}
                  blockMargin={5}
                  colorScheme="dark"
                  hideColorLegend
                  hideMonthLabels
                  hideTotalCount
                  labels={{
                    totalCount: '',
                    legend: {
                      less: '',
                      more: ''
                    }
                  }}
                  style={{
                    width: '10%', 
                    minHeight: '100px',
                    padding: '0rem'
                  }}
                  theme={{
                    dark: ['#0a0a0a', '#1a1a1a', '#2a2a2a', '#3a3a3a', '#4a4a4a']
                  }}
                />
              </div>

              <div className="section-card calendar-legend">
                <div className="legend-item">
                  <h2 className="stats-card-title">Options</h2>
                  <hr className="w-full border-t border-[rgba(243,242,251,0.1)] pb-4 m-0" />
                  <ul className="legend-list">
                    <li className="legend-item">
                      <input type="checkbox" id="option1" name="option1" value="Option 1" />
                      <label htmlFor="option1">Option 1</label>
                    </li>
                    <li className="legend-item">
                      <input type="checkbox" id="option2" name="option2" value="Option 2" />
                      <label htmlFor="option2">Option 2</label>
                    </li>
                    <li className="legend-item">
                      <input type="checkbox" id="option3" name="option3" value="Option 3" />
                      <label htmlFor="option3">Option 3</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Overview: Display key metrics */}
          <div className="stats-grid">
            {[
              { title: 'Total Habits', value: stats.totalHabits },
              { title: 'Completed Today', value: stats.completedToday },
              { title: 'Current Streak', value: stats.streakCount }
            ].map((stat, index) => (
              <div key={index} className="stats-card">
                <h2 className="stats-card-title">{stat.title}</h2>
                <p className="stats-card-value">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity Section: Shows latest habit completions */}
          <section className="dashboard-section">
            <h2 className="section-title">Recent Activity</h2>
            <div className="section-card">
              <p className="empty-state">No recent activity to display</p>
            </div>
          </section>

          {/* Today's Habits Section: Shows habits scheduled for today */}
          <section className="dashboard-section">
            <h2 className="section-title">Today's Habits</h2>
            <div className="section-card">
              <p className="empty-state">No habits scheduled for today</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 