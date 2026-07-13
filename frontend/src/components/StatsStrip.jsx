function StatsStrip() {
  const stats = [
    { label: 'Modules Completed', value: '24+' },
    { label: 'Hackathon', value: 'Winner' },
    { label: 'Focus', value: 'Frontend' },
    { label: 'Batch', value: 'Sigma 7.0' },
  ];

  const doubledStats = [...stats, ...stats];

  return (
    <div className="stats-strip">
      <div className="stats-track">
        {doubledStats.map(function (stat, i) {
          return (
            <div className="stat-item" key={i}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatsStrip;