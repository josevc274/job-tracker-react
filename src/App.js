import React from 'react';

function App() {
  const jobs = [
    { id: 1, position: 'Frontend Developer', company: 'Google', status: 'Applied' },
    { id: 2, position: 'Backend Developer', company: 'Amazon', status: 'Interview' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Job Tracker</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.position}</strong> at {job.company} - <em>{job.status}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
