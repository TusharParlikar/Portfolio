import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = () => {
    try {
      setLoading(true);
      const storedData = localStorage.getItem('clientSubmissions');
      const data = storedData ? JSON.parse(storedData) : [];
      setRequirements(data.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt)));
      setError('');
    } catch (err) {
      setError('Error loading data from localStorage: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = (id, newStatus) => {
    try {
      const storedData = localStorage.getItem('clientSubmissions');
      const data = storedData ? JSON.parse(storedData) : [];
      const updatedData = data.map(item => 
        item.id === id ? { ...item, status: newStatus } : item
      );
      localStorage.setItem('clientSubmissions', JSON.stringify(updatedData));
      fetchRequirements(); // Refresh the display
    } catch (err) {
      alert('Error updating status: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="loading">
          <h2>Loading client requirements...</h2>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-dashboard">
        <div className="error">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={fetchRequirements}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Client Requirements Dashboard</h1>
        <button onClick={fetchRequirements} className="refresh-btn">
          🔄 Refresh
        </button>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Submissions</h3>
          <p>{requirements.length}</p>
        </div>
        <div className="stat-card">
          <h3>New Requests</h3>
          <p>{requirements.filter(req => req.status === 'new').length}</p>
        </div>
        <div className="stat-card">
          <h3>In Progress</h3>
          <p>{requirements.filter(req => req.status === 'in-progress').length}</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p>{requirements.filter(req => req.status === 'completed').length}</p>
        </div>
      </div>

      <div className="requirements-list">
        {requirements.length === 0 ? (
          <div className="no-data">
            <h3>No submissions yet</h3>
            <p>Client requirements will appear here when submitted.</p>
          </div>
        ) : (
          requirements.map((req) => (
            <div key={req.id} className="requirement-card">
              <div className="card-header">
                <h3>{req.fullName}</h3>
                <span className={`status ${req.status}`}>{req.status || 'submitted'}</span>
              </div>
              
              <div className="card-content">
                <div className="client-info">
                  <p><strong>Email:</strong> {req.email}</p>
                  <p><strong>Phone:</strong> {req.phone}</p>
                  <p><strong>Company:</strong> {req.company || 'N/A'}</p>
                  <p><strong>Budget:</strong> {req.budget || 'N/A'}</p>
                  <p><strong>Timeline:</strong> {req.timeline || 'N/A'}</p>
                </div>
                
                <div className="project-info">
                  <p><strong>Website Type:</strong> {req.websiteType?.join(', ') || 'N/A'}</p>
                  <p><strong>Features:</strong> {req.features?.join(', ') || 'N/A'}</p>
                  <p><strong>Business Type:</strong> {req.businessType || 'N/A'}</p>
                </div>
                
                <div className="additional-info">
                  <p><strong>Submitted:</strong> {new Date(req.submittedAt).toLocaleString()}</p>
                  <p><strong>Additional Requirements:</strong> {req.additionalRequirements || 'None'}</p>
                </div>
              </div>
              
              <div className="card-actions">
                <button 
                  onClick={() => updateStatus(req.id, 'new')}
                  className={req.status === 'new' ? 'active' : ''}
                >
                  New
                </button>
                <button 
                  onClick={() => updateStatus(req.id, 'in-progress')}
                  className={req.status === 'in-progress' ? 'active' : ''}
                >
                  In Progress
                </button>
                <button 
                  onClick={() => updateStatus(req.id, 'completed')}
                  className={req.status === 'completed' ? 'active' : ''}
                >
                  Completed
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
