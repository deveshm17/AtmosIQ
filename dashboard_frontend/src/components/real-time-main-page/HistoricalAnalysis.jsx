import React, { useEffect, useRef } from 'react';

const HistoricalAnalysis = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const divId = 'viz1760186084440';
    // If already present, don't recreate
    if (!containerRef.current) return;

    // Create the wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'tableauPlaceholder';
    wrapper.id = divId;
    wrapper.style.position = 'relative';

    // noscript/img fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = "<a href='#'><img alt='AQI ' src='https://public.tableau.com/static/images/24/24KPZKN4S/1_rss.png' style='border: none' /></a>";
    wrapper.appendChild(noscript);

    // object element with params
    const objectEl = document.createElement('object');
    objectEl.className = 'tableauViz';
    objectEl.style.display = 'none';

    const params = {
      host_url: 'https%3A%2F%2Fpublic.tableau.com%2F',
      embed_code_version: '3',
      path: 'shared/24KPZKN4S',
      toolbar: 'yes',
      static_image: 'https://public.tableau.com/static/images/24/24KPZKN4S/1.png',
      animate_transition: 'yes',
      display_static_image: 'yes',
      display_spinner: 'yes',
      display_overlay: 'yes',
      display_count: 'yes',
      language: 'en-US'
    };

    Object.keys(params).forEach((key) => {
      const p = document.createElement('param');
      p.name = key;
      p.value = params[key];
      objectEl.appendChild(p);
    });

    wrapper.appendChild(objectEl);

    // Append the wrapper into the container
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(wrapper);

    // Adjust viz size
    try {
      objectEl.style.width = '100%';
      objectEl.style.height = '800px';
    } catch (e) {
      // ignore
    }

    // Insert tableau script
    const existingScript = document.querySelector("script[src='https://public.tableau.com/javascripts/api/viz_v1.js']");
    if (!existingScript) {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      scriptElement.async = true;
      document.body.appendChild(scriptElement);

      // Clean up on unmount
      return () => {
        if (scriptElement && scriptElement.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }
      };
    }
    // no cleanup here because script may be used app-wide
    return undefined;
  }, []);

  return (
    <div className="historical-analysis-container">
      <h3>Historical Analysis</h3>
      <div ref={containerRef} />
      <style>{`
        .historical-analysis-container { background: #fff; padding: 16px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .historical-analysis-container h3 { margin: 0 0 12px 0; }
        .historical-analysis-container .tableauPlaceholder { width: 100%; }
        @media (max-width: 640px) { .historical-analysis-container .tableauPlaceholder { overflow: auto; } }
      `}</style>
    </div>
  );
};

export default HistoricalAnalysis;
