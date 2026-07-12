function StatsStrip() {
    const stats = [
      { label: 'Modules Completed', value: '24+' },
      { label: 'Hackathon', value: 'Winner' },
      { label: 'Focus', value: 'Frontend' },
      { label: 'Batch', value: 'Sigma 7.0' },
    ];
  
    return (
      <div className="stats-strip">
        {stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    );
  }
  
  export default StatsStrip;