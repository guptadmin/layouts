import React from 'react';
import './frontend.css';

function Frontend() {
  return (
    <div className="layout">
      <h1>AI-Powered Part Classifier</h1>
      <h2>for Smarter Decision-Making</h2>
      <p>Enhance Accuracy, Save Time, and Reduce Operational Costs with AI</p>

      <div className="upload-box">
        <label>
          Choose File
          <input type="file" accept=".stp,.step" />
        </label>
        <small>Use Only STP & STEP File.</small>
      </div>

      <div className="features">
        <div className="feature">AI-Powered Parts Similarity Detection</div>
        <div className="feature">Multi-Metric Analysis for Maximum Accuracy</div>
        <div className="feature">Scalable & Customizable for Your Industry</div>
        <div className="feature">Comprehensive Visual Data Insights</div>
      </div>
    </div>
  );
}

export default Frontend;
