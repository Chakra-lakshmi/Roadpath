import React from 'react';
import { useParams } from 'react-router-dom';
import './JobDetailPage.css';

function JobDetailPage() {
  const { industry, job } = useParams();

  return (
    <div className="job-detail-container">
      <main className="job-detail-main">
        <h1>{job}</h1>
        <h3>Industry: {industry}</h3>
        <p>
          This section provides details about the selected job role. You can add specific 
          details, qualifications, responsibilities, or any other relevant information about the job.
        </p>
        <h4>Key Responsibilities:</h4>
        <ul>
          <li>Define responsibilities and tasks related to {job}.</li>
          <li>Describe daily activities in the {industry} industry.</li>
          <li>Outline required skills and qualifications.</li>
        </ul>
        <h4>Skills Required:</h4>
        <ul>
          <li>Technical or domain-specific skills.</li>
          <li>Soft skills like communication or teamwork.</li>
          <li>Any certifications related to the role.</li>
        </ul>
        <h4>Career Path:</h4>
        <p>
          Explore the growth opportunities, typical career trajectories, and potential 
          advancements for a {job} in the {industry} industry.
        </p>
      </main>
    </div>
  );
}

export default JobDetailPage;