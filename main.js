// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing timeline...');
    
    // Check if timelineData exists
    if (!window.timelineData || !window.timelineData.timeline_events) {
        console.error('Timeline data not found!');
        document.getElementById('timeline-events').innerHTML = '<div class="no-events">Error: Timeline data not loaded</div>';
        return;
    }
    const events = window.timelineData.timeline_events;
    console.log('Found', events.length, 'events');
    
    // Parse dates and sort events
    const processedEvents = events.map(event => {
        const year = parseYear(event.timestamp);
        return { ...event, year };
    }).sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return events.indexOf(a) - events.indexOf(b);
    });

    // Group events by year
    const eventsByYear = {};
    processedEvents.forEach(event => {
        if (!eventsByYear[event.year]) {
            eventsByYear[event.year] = [];
        }
        eventsByYear[event.year].push(event);
    });

    // Store data globally
    window.timelineData = {
        all: processedEvents,
        byYear: eventsByYear,
        currentFilter: 'all'
    };

    // Initialize
    renderTimeline();
    updateStats();
    setupEventListeners();
});

const parseYear = (timestamp) => {
    // Extract year from various timestamp formats
    const yearMatch = timestamp.match(/\b(19\d{2}|20\d{2})\b/);
    if (yearMatch) return parseInt(yearMatch[1]);
    
    // Handle special cases
    if (timestamp.includes('Childhood') || timestamp.includes('born')) return 1983;
    if (timestamp.includes('Around 1992-1994')) return 1993;
    if (timestamp.includes('Around 1999-2000')) return 1999;
    if (timestamp.includes('Around 2001-2002')) return 2001;
    
    return 2020; // Default for very recent events
};

const renderTimeline = () => {
    const container = document.getElementById('timeline-events');
    const filter = window.timelineData.currentFilter;
    const eventsByYear = window.timelineData.byYear;
    
    let html = '';
    
    Object.keys(eventsByYear).sort((a, b) => a - b).forEach(year => {
        const yearEvents = eventsByYear[year].filter(event => 
            filter === 'all' || event.entity === filter
        );
        
        if (yearEvents.length > 0) {
            html += `<div class="year-marker"><h2>${year}</h2></div>`;
            
            yearEvents.forEach((event, index) => {
                const entityClass = getEntityClass(event.entity);
                const certaintyClass = `certainty-${event.certainty}`;
                
                html += `
                    <div class="event" style="animation-delay: ${index * 0.1}s">
                        <div class="event-dot"></div>
                        <div class="event-content" data-event-id="${window.timelineData.all.indexOf(event)}">
                            <div class="event-date">${event.timestamp}</div>
                            <div class="event-entity entity-${entityClass}">${event.entity}</div>
                            <div class="event-title">${event.event_description}</div>
                            
                            <div class="event-details">
                                ${event.supporting_text ? `<div class="event-supporting">${event.supporting_text}</div>` : ''}
                                
                                ${event.details ? renderDetails(event.details) : ''}
                                
                                <div class="event-meta">
                                    <span class="meta-tag ${certaintyClass}">Certainty: ${event.certainty}</span>
                                    <span class="meta-tag">Page: ${event.page_number}</span>
                                    ${event.details?.metric ? `<span class="meta-tag event-metric">${event.details.metric}</span>` : ''}
                                </div>
                            </div>
                            
                            <div class="expand-indicator">▼</div>
                        </div>
                    </div>
                `;
            });
        }
    });
    
    container.innerHTML = html || '<div class="no-events">No events found for this filter</div>';
};

const renderDetails = (details) => {
    let html = '';
    
    if (details.quote) {
        html += `<div class="quote">${details.quote}</div>`;
    }
    
    if (details.milestone) {
        html += `<div class="event-meta"><span class="meta-tag">Milestone: ${details.milestone}</span></div>`;
    }
    
    if (details.relationships && details.relationships.length > 0) {
        html += `<div class="event-meta">`;
        details.relationships.forEach(rel => {
            html += `<span class="meta-tag">👥 ${rel}</span>`;
        });
        html += `</div>`;
    }
    
    if (details.relevant_info) {
        html += `<div class="event-supporting">ℹ️ ${details.relevant_info}</div>`;
    }
    
    return html;
};

const getEntityClass = (entity) => {
    if (entity === 'Spotify') return 'spotify';
    if (entity.includes('Daniel Ek')) return 'daniel';
    if (entity === 'Music Industry') return 'music';
    return 'default';
};

const updateStats = () => {
    const totalEvents = window.timelineData.all.length;
    const filter = window.timelineData.currentFilter;
    const visibleEvents = filter === 'all' 
        ? totalEvents 
        : window.timelineData.all.filter(event => event.entity === filter).length;
    
    document.getElementById('total-events').textContent = totalEvents;
    document.getElementById('visible-events').textContent = visibleEvents;
};

const setupEventListeners = () => {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Update filter
            window.timelineData.currentFilter = e.target.dataset.filter;
            
            // Re-render
            renderTimeline();
            updateStats();
        });
    });
    
    // Event content expansion
    document.addEventListener('click', (e) => {
        const eventContent = e.target.closest('.event-content');
        if (eventContent) {
            eventContent.classList.toggle('expanded');
        }
    });
    
    // Tooltip functionality
    const tooltip = document.getElementById('tooltip');
    
    document.addEventListener('mouseover', (e) => {
        const eventContent = e.target.closest('.event-content');
        if (eventContent) {
            const eventId = eventContent.dataset.eventId;
            const event = window.timelineData.all[eventId];
            
            if (event && event.details?.relevant_info) {
                tooltip.innerHTML = `<strong>${event.entity}</strong><br>${event.details.relevant_info}`;
                tooltip.classList.add('show');
                
                // Position tooltip
                const rect = eventContent.getBoundingClientRect();
                tooltip.style.left = rect.left + 'px';
                tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            }
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (!e.target.closest('.event-content')) {
            tooltip.classList.remove('show');
        }
    });
};