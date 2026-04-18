import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <div className="tech-divider">
      ━━━━━━━━━━━━━━━━━━━━━<br />
      → {title.toUpperCase()}<br />
      ━━━━━━━━━━━━━━━━━━━━━
    </div>
  );
};

export default SectionHeader;
