import { useState, useEffect } from 'react';
import { NAV_HEIGHT } from '../constants';

export default function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const threshold = NAV_HEIGHT + 40;

    function updateActiveSection() {
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }

      setActiveId(current);
    }

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [sectionIds]);

  return activeId;
}
