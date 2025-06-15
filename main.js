// Default emoji mapping for relationships and entities
const defaultEmojiMap = {
    // Core People
    'Daniel Ek': '👨‍💻',
    'Martin Lorentzon': '👨‍💼',
    'Steve Jobs': '🍎',
    'Taylor Swift': '👩‍🎤',
    'Joe Rogan': '🎙️',
    'Jay-Z': '🎤',
    'Dr. Dre': '🎧',
    'Jimmy Iovine': '🎵',
    'Sean Parker': '🌐',
    'Mark Zuckerberg': '👨‍💻',
    'Mike Schroepfer': '⚡',
    'Pony Ma': '🐧',
    
    // Family
    'Elisabet (mother)': '👩‍👦',
    'Felix (half-brother)': '👦',
    'Hasse (stepfather)': '👨‍👦',
    
    // Spotify Team
    'Andreas Ehn': '⚙️',
    'Fredrik Niemelä': '🔧',
    'Ludvig Strigeus': '💻',
    'Magnus Hult': '🛠️',
    'Rasmus Andersson': '🎨',
    'Jonathan Forster': '💼',
    'Gustav Söderström': '📱',
    'Sophia Bendz': '📢',
    'Barry McCarthy': '💰',
    'Felix Hagnö': '📊',
    
    // Tech Companies
    'Apple': '🍎',
    'Google': '🔍',
    'Google (Android)': '🤖',
    'Facebook': '📘',
    'Amazon': '📦',
    'Microsoft': '🪟',
    'Tencent': '🐧',
    'YouTube': '📺',
    'BitTorrent Inc': '🔄',
    'Azureus': '🔗',
    
    // Music Industry
    'Universal Music': '🎼',
    'Universal Music Group': '🎼',
    'Sony Music': '🎵',
    'Warner Music': '🎶',
    'EMI': '🎙️',
    'BMG': '🎤',
    'Big Machine Records': '🏭',
    'Scott Borchetta': '🎯',
    
    // Streaming Services
    'Spotify': '🎧',
    'Apple Music': '🍎🎵',
    'iTunes': '💿',
    'Amazon Music': '📦🎵',
    'Google Music': '🔍🎵',
    'Pandora': '📻',
    'Tidal': '🌊',
    'Rdio': '📡',
    'Beats': '🎧',
    
    // Investment/Business
    'Northzone': '🏔️',
    'Pär-Jörgen Pärson': '💼',
    'Pär-Jörgen Pärson (Northzone)': '🏔️💼',
    'Soros Private Equity Partners': '💰',
    'Arctic Ventures': '🏔️💼',
    'NYSE': '📈',
    
    // Other Companies
    'Tradedoubler': '🔄',
    'Stardoll': '⭐',
    'Mattias Miksche': '🎯',
    'Mattias Miksche (Stardoll)': '⭐🎯',
    'The Pirate Bay': '🏴‍☠️',
    'Swedish Legal System': '⚖️',
    'STIM': '📜',
    'The Echo Nest': '🧠',
    'Gimlet Media': '🎙️',
    'Matt Lieber': '🎙️',
    'Alex Blumberg': '📻',
    'Anchor': '⚓',
    'Parcast': '🎭',
    'The Ringer': '🔔',
    'Bill Simmons': '🏀',
    
    // Products/Tech
    'µTorrent': '⬇️',
    'Kazaa': '🔄',
    'Niklas Zennström': '💬',
    'Janus Friis': '🌐',
    'Edgar Bronfman Jr': '🎼',
    'Hunter S Thompson': '✍️',
    'Göran Persson': '🇸🇪',
    'Per Sundin': '🎵',
    'Bram Cohen': '🔄',
    'Magnus Emilson': '💰',
    'Britney Spears': '💃',
    'Shakira': '💃',
    '50 Cent': '🎤'
};

// Current emoji mapping (can be customized)
let emojiMap = { ...defaultEmojiMap };

// Entity categories for organization
const entityCategories = {
    'people': [
        'Daniel Ek', 'Daniel Ek (Spotify CEO)', 'Daniel Ek (pre-Spotify)', 'Martin Lorentzon',
        'Steve Jobs', 'Steve Jobs (Apple CEO)', 'Taylor Swift', 'Joe Rogan', 'Jay-Z',
        'Dr. Dre', 'Jimmy Iovine', 'Sean Parker', 'Mark Zuckerberg', 'Mike Schroepfer',
        'Pony Ma', 'Elisabet (mother)', 'Felix (half-brother)', 'Hasse (stepfather)',
        'Andreas Ehn', 'Fredrik Niemelä', 'Ludvig Strigeus', 'Magnus Hult', 'Rasmus Andersson',
        'Jonathan Forster', 'Gustav Söderström', 'Sophia Bendz', 'Barry McCarthy', 'Felix Hagnö',
        'Pär-Jörgen Pärson', 'Pär-Jörgen Pärson (Northzone)', 'Mattias Miksche', 'Mattias Miksche (Stardoll)',
        'Matt Lieber', 'Alex Blumberg', 'Bill Simmons', 'Niklas Zennström', 'Janus Friis',
        'Edgar Bronfman Jr', 'Hunter S Thompson', 'Göran Persson', 'Per Sundin', 'Bram Cohen',
        'Magnus Emilson', 'Britney Spears', 'Shakira', '50 Cent', 'Scott Borchetta'
    ],
    'tech': [
        'Apple', 'Google', 'Google (Android)', 'Facebook', 'Amazon', 'Microsoft',
        'Tencent', 'YouTube', 'BitTorrent Inc', 'Azureus'
    ],
    'music': [
        'Universal Music', 'Universal Music Group', 'Sony Music', 'Warner Music',
        'EMI', 'BMG', 'Big Machine Records', 'Spotify', 'Apple Music', 'iTunes',
        'Amazon Music', 'Google Music', 'Pandora', 'Tidal', 'Rdio', 'Beats'
    ],
    'business': [
        'Northzone', 'Soros Private Equity Partners', 'Arctic Ventures', 'NYSE',
        'Tradedoubler', 'Stardoll', 'The Echo Nest', 'Gimlet Media', 'Anchor',
        'Parcast', 'The Ringer'
    ],
    'products': [
        'µTorrent', 'Kazaa', 'The Pirate Bay', 'Swedish Legal System', 'STIM'
    ]
};

// Get emoji for a relationship/entity
const getEmojiForEntity = (entityName) => {
    // Clean the entity name by removing parenthetical info for lookup
    const cleanName = entityName.replace(/\s*\([^)]*\)/g, '').trim();
    return emojiMap[entityName] || emojiMap[cleanName] || '👤';
};

// Zoom functionality
let currentZoom = 1;
const minZoom = 0.2;  // Increased zoom out range for better overview
const maxZoom = 3;    // Increased zoom in range for detail viewing
const zoomStep = 0.1;

// Entity filtering
let currentEntityFilter = null;
let entityFilterActive = false;

// Search functionality
let currentSearchTerm = '';
let searchActive = false;

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
        currentFilter: 'all',
        currentSubsectionFilter: 'all'
    };

    // Load custom emoji settings
    loadCustomEmojis();
    
    // Initialize
    renderTimeline();
    updateStats();
    setupEventListeners();
    setupZoomControls();
    setupEmojiManager();
    setupSearch();
});

const parseYear = (timestamp) => {
    // Handle special cases first
    if (timestamp.includes('Childhood') || timestamp.includes('born')) return 1983;
    if (timestamp.includes('Around 1992-1994')) return 1993;
    if (timestamp.includes('Around 1999-2000')) return 1999;
    if (timestamp.includes('Around 2001-2002')) return 2001;
    
    // Extract year from various timestamp formats
    const yearMatch = timestamp.match(/\b(19\d{2}|20\d{2})\b/);
    if (yearMatch) return parseInt(yearMatch[1]);
    
    return 2020; // Default for very recent events
};

const renderTimeline = () => {
    const container = document.getElementById('timeline-events');
    const filter = window.timelineData.currentFilter;
    const eventsByYear = window.timelineData.byYear;
    
    console.log('renderTimeline called', {
        searchActive,
        currentSearchTerm,
        filter,
        totalYears: Object.keys(eventsByYear).length
    });
    
    let html = '';
    let totalEvents = 0;
    
    Object.keys(eventsByYear).sort((a, b) => a - b).forEach(year => {
        let yearEvents = eventsByYear[year].filter(event => 
            filter === 'all' || event.entity === filter
        );
        
        
        // Apply entity filter if active
        if (entityFilterActive && currentEntityFilter) {
            yearEvents = yearEvents.filter(event => {
                // Check if entity is in main entity or relationships
                if (event.entity === currentEntityFilter) return true;
                if (event.details?.relationships?.includes(currentEntityFilter)) return true;
                return false;
            });
        }
        
        // Apply subsection filter if active
        if (window.timelineData.currentSubsectionFilter && window.timelineData.currentSubsectionFilter !== 'all') {
            yearEvents = yearEvents.filter(event => 
                event.subsection_type === window.timelineData.currentSubsectionFilter
            );
        }
        
        // Apply search filter if active
        if (searchActive && currentSearchTerm) {
            const originalCount = yearEvents.length;
            yearEvents = yearEvents.filter(event => {
                const matches = eventMatchesSearch(event, currentSearchTerm);
                if (matches) {
                    console.log('EVENT MATCHES:', event.event_description.substring(0, 50));
                }
                return matches;
            });
            console.log(`YEAR ${year}: ${originalCount} -> ${yearEvents.length} events after search`);
        }
        
        if (yearEvents.length > 0) {
            html += `<div class="year-marker"><h2>${year}</h2></div>`;
            totalEvents += yearEvents.length;
            
            yearEvents.forEach((event, index) => {
                const entityClass = getEntityClass(event.entity);
                const certaintyClass = `certainty-${event.certainty}`;
                
                // Show entity pill only in 'all' filter or when it's different from current filter
                const showEntityPill = filter === 'all' || event.entity !== filter;
                
                // Generate relationship emojis for collapsed view
                const relationshipEmojis = event.details?.relationships 
                    ? event.details.relationships.slice(0, 4).map(rel => getEmojiForEntity(rel)).join('')
                    : '';
                
                // Highlight search terms if search is active
                const highlightedTitle = searchActive && currentSearchTerm 
                    ? highlightSearchTerm(event.event_description, currentSearchTerm)
                    : event.event_description;
                    
                const highlightedSupporting = searchActive && currentSearchTerm && event.supporting_text
                    ? highlightSearchTerm(event.supporting_text, currentSearchTerm)
                    : event.supporting_text;
                
                html += `
                    <div class="event ${searchActive ? 'search-result' : ''}" style="animation-delay: ${index * 0.1}s;">
                        <div class="event-dot"></div>
                        <div class="event-content" data-event-id="${window.timelineData.all.indexOf(event)}" 
                             data-certainty="${event.certainty}" data-page="${event.page_number}">
                            <div class="event-date">${event.timestamp}</div>
                            ${showEntityPill ? `<div class="event-entity entity-${entityClass}">${event.entity}</div>` : ''}
                            ${event.subsection_type ? `<div class="event-subsection">${event.subsection_type}</div>` : ''}
                            <div class="event-title">${highlightedTitle}</div>
                            ${relationshipEmojis ? `<div class="relationship-emojis">${relationshipEmojis}</div>` : ''}
                            
                            <div class="event-details">
                                ${highlightedSupporting ? `<div class="event-supporting">${highlightedSupporting}</div>` : ''}
                                
                                ${event.details ? renderDetails(event.details, searchActive && currentSearchTerm) : ''}
                            </div>
                            
                            <div class="expand-indicator">▼</div>
                        </div>
                    </div>
                `;
            });
        }
    });
    
    console.log('Rendering complete', {
        totalEvents,
        htmlLength: html.length,
        searchActive,
        currentSearchTerm,
        filter
    });
    
    
    container.innerHTML = html || '<div class="no-events">No events found for this filter</div>';
    
    // Ensure search results are immediately visible
    if (searchActive && currentSearchTerm) {
        requestAnimationFrame(() => {
            const searchResults = document.querySelectorAll('.event.search-result');
            console.log('Found search result elements:', searchResults.length);
            searchResults.forEach((result, index) => {
                result.style.opacity = '1';
                result.style.transform = 'translateY(0)';
                result.style.animationDelay = '0s';
                console.log(`Search result ${index} visibility:`, {
                    opacity: result.style.opacity,
                    display: window.getComputedStyle(result).display,
                    visibility: window.getComputedStyle(result).visibility
                });
            });
        });
    }
};

const renderDetails = (details, shouldHighlight = false) => {
    let html = '';
    
    if (details.quote) {
        const quote = shouldHighlight ? highlightSearchTerm(details.quote, currentSearchTerm) : details.quote;
        html += `<div class="quote">${quote}</div>`;
    }
    
    if (details.milestone) {
        const milestone = shouldHighlight ? highlightSearchTerm(details.milestone, currentSearchTerm) : details.milestone;
        html += `<div class="event-meta"><span class="meta-tag">Milestone: ${milestone}</span></div>`;
    }
    
    if (details.relationships && details.relationships.length > 0) {
        html += `<div class="event-meta">`;
        details.relationships.forEach(rel => {
            const emoji = getEmojiForEntity(rel);
            const highlightedRel = shouldHighlight ? highlightSearchTerm(rel, currentSearchTerm) : rel;
            html += `<span class="meta-tag relationship-tag">${emoji} ${highlightedRel}</span>`;
        });
        html += `</div>`;
    }
    
    if (details.relevant_info) {
        const info = shouldHighlight ? highlightSearchTerm(details.relevant_info, currentSearchTerm) : details.relevant_info;
        html += `<div class="event-supporting">ℹ️ ${info}</div>`;
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
    
    // Count visible events based on all active filters
    const visibleEvents = window.timelineData.all.filter(event => {
        // Category filter
        const categoryMatch = filter === 'all' || event.entity === filter;
        if (!categoryMatch) return false;
        
        // Entity filter
        if (entityFilterActive && currentEntityFilter) {
            const entityMatch = event.entity === currentEntityFilter || 
                               event.details?.relationships?.includes(currentEntityFilter);
            if (!entityMatch) return false;
        }
        
        // Search filter
        if (searchActive && currentSearchTerm) {
            if (!eventMatchesSearch(event, currentSearchTerm)) return false;
        }
        
        return true;
    }).length;
    
    document.getElementById('total-events').textContent = totalEvents;
    document.getElementById('visible-events').textContent = visibleEvents;
    
    // Update entity filter indicator
    updateEntityFilterIndicator();
};

const updateEntityFilterIndicator = () => {
    // Create or update entity filter indicator
    let indicator = document.getElementById('entity-filter-indicator');
    
    if (entityFilterActive && currentEntityFilter) {
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'entity-filter-indicator';
            indicator.className = 'entity-filter-indicator';
            document.querySelector('.controls').appendChild(indicator);
        }
        
        const emoji = getEmojiForEntity(currentEntityFilter);
        indicator.innerHTML = `
            <span class="filter-info">${emoji} Showing events with: <strong>${currentEntityFilter}</strong></span>
            <button class="clear-entity-filter" title="Clear entity filter">✕</button>
        `;
        
        // Add clear filter functionality
        indicator.querySelector('.clear-entity-filter').addEventListener('click', clearEntityFilter);
    } else {
        if (indicator) {
            indicator.remove();
        }
    }
};

const clearEntityFilter = () => {
    entityFilterActive = false;
    currentEntityFilter = null;
    renderTimeline();
    updateStats();
};

const filterByEntity = (entityName) => {
    currentEntityFilter = entityName;
    entityFilterActive = true;
    renderTimeline();
    updateStats();
    
    // Close emoji modal if open
    document.getElementById('emoji-modal').style.display = 'none';
    
    // Show notification
    const emoji = getEmojiForEntity(entityName);
    showNotification(`${emoji} Filtering by: ${entityName}`, 'info');
};

const setupEventListeners = () => {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Update filter
            const selectedFilter = e.target.dataset.filter;
            window.timelineData.currentFilter = selectedFilter;
            
            // Re-render
            renderTimeline();
            updateStats();
        });
    });
    
    // Subsection filter
    const subsectionFilter = document.getElementById('subsection-filter');
    if (subsectionFilter) {
        subsectionFilter.addEventListener('change', (e) => {
            window.timelineData.currentSubsectionFilter = e.target.value;
            renderTimeline();
            updateStats();
        });
    }
    
    // Event content expansion
    document.addEventListener('click', (e) => {
        const eventContent = e.target.closest('.event-content');
        if (eventContent) {
            eventContent.classList.toggle('expanded');
        }
    });
    
    // Zoom functionality with mouse wheel
    const timelineContainer = document.querySelector('.timeline-container');
    
    timelineContainer.addEventListener('wheel', (e) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            
            const delta = e.deltaY < 0 ? zoomStep : -zoomStep;
            currentZoom = Math.max(minZoom, Math.min(maxZoom, currentZoom + delta));
            
            timelineContainer.style.transform = `scale(${currentZoom})`;
            timelineContainer.style.transformOrigin = 'center top';
            
            // Update stats to show zoom level
            const zoomDisplay = document.getElementById('zoom-level') || (() => {
                const zoomEl = document.createElement('div');
                zoomEl.id = 'zoom-level';
                document.getElementById('stats').appendChild(zoomEl);
                return zoomEl;
            })();
            zoomDisplay.textContent = `Zoom: ${Math.round(currentZoom * 100)}%`;
        }
    });

    // Tooltip functionality with metadata
    const tooltip = document.getElementById('tooltip');
    
    document.addEventListener('mouseover', (e) => {
        const eventContent = e.target.closest('.event-content');
        if (eventContent && !eventContent.classList.contains('expanded')) {
            const eventId = eventContent.dataset.eventId;
            const event = window.timelineData.all[eventId];
            const certainty = eventContent.dataset.certainty;
            const page = eventContent.dataset.page;
            
            if (event) {
                let tooltipContent = `<div class="tooltip-header"><strong>${event.entity}</strong></div>`;
                
                // Add metadata
                tooltipContent += `<div class="tooltip-meta">
                    <span class="certainty-${certainty}">Certainty: ${certainty}</span>
                    <span>Page: ${page}</span>
                </div>`;
                
                // Add relevant info if available
                if (event.details?.relevant_info) {
                    tooltipContent += `<div class="tooltip-info">${event.details.relevant_info}</div>`;
                }
                
                tooltip.innerHTML = tooltipContent;
                tooltip.classList.add('show');
                
                // Position tooltip
                const rect = eventContent.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                tooltip.style.left = Math.min(rect.left, window.innerWidth - tooltip.offsetWidth - 20) + 'px';
                tooltip.style.top = (rect.top + scrollTop - tooltip.offsetHeight - 10) + 'px';
            }
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (!e.target.closest('.event-content')) {
            tooltip.classList.remove('show');
        }
    });
};

// Zoom controls setup
const setupZoomControls = () => {
    const timelineContainer = document.querySelector('.timeline-container');
    
    const applyZoom = () => {
        timelineContainer.style.transform = `scale(${currentZoom})`;
        timelineContainer.style.transformOrigin = 'center top';
        
        // Update zoom display
        const zoomDisplay = document.getElementById('zoom-level') || (() => {
            const zoomEl = document.createElement('div');
            zoomEl.id = 'zoom-level';
            document.getElementById('stats').appendChild(zoomEl);
            return zoomEl;
        })();
        zoomDisplay.textContent = `Zoom: ${Math.round(currentZoom * 100)}%`;
    };
    
    // Zoom in button
    document.getElementById('zoom-in').addEventListener('click', () => {
        currentZoom = Math.min(maxZoom, currentZoom + zoomStep);
        applyZoom();
    });
    
    // Zoom out button
    document.getElementById('zoom-out').addEventListener('click', () => {
        currentZoom = Math.max(minZoom, currentZoom - zoomStep);
        applyZoom();
    });
    
    // Reset zoom button
    document.getElementById('zoom-reset').addEventListener('click', () => {
        currentZoom = 1;
        applyZoom();
    });
};

// Emoji Management System
const setupEmojiManager = () => {
    const modal = document.getElementById('emoji-modal');
    const adminBtn = document.getElementById('emoji-admin');
    const closeBtn = document.getElementById('close-modal');
    
    // Open modal
    adminBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        populateEmojiGrid();
    });
    
    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Search and filter functionality
    document.getElementById('entity-search').addEventListener('input', filterEmojiGrid);
    document.getElementById('category-filter').addEventListener('change', filterEmojiGrid);
    
    // Action buttons
    document.getElementById('save-emojis').addEventListener('click', saveCustomEmojis);
    document.getElementById('reset-emojis').addEventListener('click', resetToDefaults);
    document.getElementById('export-emojis').addEventListener('click', exportEmojiSettings);
    document.getElementById('import-btn').addEventListener('click', () => {
        document.getElementById('import-emojis').click();
    });
    document.getElementById('import-emojis').addEventListener('change', importEmojiSettings);
};

const populateEmojiGrid = () => {
    const grid = document.getElementById('emoji-grid');
    grid.innerHTML = '';
    
    // Get all unique entities from the timeline data
    const allEntities = new Set();
    
    // Add entities from timeline events
    window.timelineData.all.forEach(event => {
        allEntities.add(event.entity);
        if (event.details?.relationships) {
            event.details.relationships.forEach(rel => allEntities.add(rel));
        }
    });
    
    // Convert to array and sort
    const sortedEntities = Array.from(allEntities).sort();
    
    sortedEntities.forEach(entity => {
        const category = getCategoryForEntity(entity);
        const emojiItem = createEmojiItem(entity, category);
        grid.appendChild(emojiItem);
    });
};

const createEmojiItem = (entity, category) => {
    const item = document.createElement('div');
    item.className = 'emoji-item';
    item.dataset.entity = entity;
    item.dataset.category = category;
    
    const currentEmoji = emojiMap[entity] || getEmojiForEntity(entity);
    
    // Count events for this entity
    const eventCount = countEventsForEntity(entity);
    
    item.innerHTML = `
        <input type="text" class="emoji-input" value="${currentEmoji}" maxlength="4" 
               data-entity="${entity}" title="Click to change emoji">
        <div class="entity-details">
            <div class="entity-name">${entity}</div>
            <div class="entity-category">${getCategoryDisplayName(category)}</div>
            <div class="entity-stats">${eventCount} event${eventCount !== 1 ? 's' : ''}</div>
        </div>
        <button class="filter-entity-btn" title="Show events with ${entity}">
            🔍 Filter
        </button>
    `;
    
    // Add event listener for emoji changes
    const input = item.querySelector('.emoji-input');
    input.addEventListener('input', (e) => {
        emojiMap[entity] = e.target.value;
        // Update timeline immediately to show changes
        renderTimeline();
    });
    
    // Add event listener for entity filtering
    const filterBtn = item.querySelector('.filter-entity-btn');
    filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterByEntity(entity);
    });
    
    return item;
};

const countEventsForEntity = (entityName) => {
    return window.timelineData.all.filter(event => {
        if (event.entity === entityName) return true;
        if (event.details?.relationships?.includes(entityName)) return true;
        return false;
    }).length;
};

const getCategoryForEntity = (entity) => {
    for (const [category, entities] of Object.entries(entityCategories)) {
        if (entities.includes(entity)) {
            return category;
        }
    }
    return 'other';
};

const getCategoryDisplayName = (category) => {
    const names = {
        'people': '👥 People',
        'tech': '💻 Tech Companies',
        'music': '🎵 Music Industry',
        'business': '💼 Business',
        'products': '📱 Products',
        'other': '🔮 Other'
    };
    return names[category] || '🔮 Other';
};

const filterEmojiGrid = () => {
    const searchTerm = document.getElementById('entity-search').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const items = document.querySelectorAll('.emoji-item');
    
    items.forEach(item => {
        const entityName = item.dataset.entity.toLowerCase();
        const entityCategory = item.dataset.category;
        
        const matchesSearch = entityName.includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || entityCategory === categoryFilter;
        
        item.style.display = matchesSearch && matchesCategory ? 'flex' : 'none';
    });
};

const saveCustomEmojis = () => {
    try {
        localStorage.setItem('spotify-timeline-custom-emojis', JSON.stringify(emojiMap));
        showNotification('✅ Emoji settings saved successfully!', 'success');
    } catch (error) {
        showNotification('❌ Failed to save emoji settings', 'error');
        console.error('Error saving emojis:', error);
    }
};

const loadCustomEmojis = () => {
    try {
        const saved = localStorage.getItem('spotify-timeline-custom-emojis');
        if (saved) {
            emojiMap = { ...defaultEmojiMap, ...JSON.parse(saved) };
        }
    } catch (error) {
        console.error('Error loading custom emojis:', error);
        emojiMap = { ...defaultEmojiMap };
    }
};

const resetToDefaults = () => {
    if (confirm('Are you sure you want to reset all emojis to defaults? This cannot be undone.')) {
        emojiMap = { ...defaultEmojiMap };
        populateEmojiGrid();
        renderTimeline();
        showNotification('🔄 Emojis reset to defaults', 'info');
    }
};

const exportEmojiSettings = () => {
    try {
        const customEmojis = {};
        
        // Only export changed emojis
        Object.keys(emojiMap).forEach(key => {
            if (emojiMap[key] !== defaultEmojiMap[key]) {
                customEmojis[key] = emojiMap[key];
            }
        });
        
        const dataStr = JSON.stringify(customEmojis, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'spotify-timeline-emoji-settings.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification('📤 Emoji settings exported successfully!', 'success');
    } catch (error) {
        showNotification('❌ Failed to export emoji settings', 'error');
        console.error('Error exporting emojis:', error);
    }
};

const importEmojiSettings = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedEmojis = JSON.parse(e.target.result);
            
            // Validate the imported data
            if (typeof importedEmojis !== 'object') {
                throw new Error('Invalid file format');
            }
            
            // Merge with current settings
            emojiMap = { ...emojiMap, ...importedEmojis };
            
            populateEmojiGrid();
            renderTimeline();
            showNotification('📥 Emoji settings imported successfully!', 'success');
        } catch (error) {
            showNotification('❌ Failed to import emoji settings. Please check the file format.', 'error');
            console.error('Error importing emojis:', error);
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    event.target.value = '';
};

const showNotification = (message, type = 'info') => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '8px',
        color: '#fff',
        fontWeight: '500',
        zIndex: '3000',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });
    
    // Set background color based on type
    const colors = {
        success: '#1ED760',
        error: '#ff4444',
        info: '#4A90E2'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
};

// Search functionality
const setupSearch = () => {
    const searchInput = document.getElementById('timeline-search');
    const clearBtn = document.getElementById('clear-search');
    
    // Search input handler with debouncing
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const term = e.target.value.trim();
        
        // Show/hide clear button
        clearBtn.style.display = term ? 'block' : 'none';
        
        // Debounce search
        searchTimeout = setTimeout(() => {
            performSearch(term);
        }, 300);
    });
    
    // Clear search
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        clearSearch();
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + F to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Escape to clear search
        if (e.key === 'Escape' && searchActive) {
            clearSearch();
        }
    });
};

const performSearch = (term) => {
    if (!term || term.length < 1) {  // Allow single character search
        clearSearch();
        return;
    }
    
    currentSearchTerm = term;  // Keep original case for better highlighting
    searchActive = true;
    
    console.log('SEARCH DEBUG:', {
        term,
        searchActive,
        currentSearchTerm
    });
    
    // Update UI
    renderTimeline();
    updateStats();
    updateSearchInfo();
    
    // Force DOM reflow to ensure search results are visible
    setTimeout(() => {
        const searchResults = document.querySelectorAll('.event.search-result');
        console.log('SEARCH RESULTS FOUND:', searchResults.length);
        searchResults.forEach((result, index) => {
            result.style.opacity = '1';
            result.style.transform = 'translateY(0)';
            result.style.display = 'block';
            result.style.visibility = 'visible';
            console.log(`Result ${index}:`, {
                opacity: result.style.opacity,
                display: window.getComputedStyle(result).display,
                visibility: window.getComputedStyle(result).visibility
            });
        });
    }, 50);
    
    // Show search suggestions if no results
    const matches = countSearchMatches();
    if (matches === 0) {
        showSearchSuggestions(term);
    }
};

const showSearchSuggestions = (term) => {
    const suggestions = [];
    const termLower = term.toLowerCase();
    
    // Check if it's a partial match for common searches
    const commonSearches = [
        'spotify', 'daniel ek', 'apple', 'music', 'streaming', 'launch', 
        'funding', 'ipo', 'podcast', 'taylor swift', 'joe rogan', 'sweden'
    ];
    
    commonSearches.forEach(search => {
        if (search.includes(termLower) && search !== termLower) {
            suggestions.push(search);
        }
    });
    
    // Check synonyms
    for (const [key, synonyms] of Object.entries(searchSynonyms)) {
        if (key.includes(termLower) || synonyms.some(syn => syn.includes(termLower))) {
            suggestions.push(key);
        }
    }
    
    if (suggestions.length > 0) {
        const infoEl = document.getElementById('search-info');
        infoEl.innerHTML += `
            <div class="search-suggestions">
                Did you mean: ${suggestions.slice(0, 3).map(sug => 
                    `<span class="suggestion-link" onclick="document.getElementById('timeline-search').value='${sug}'; performSearch('${sug}')">${sug}</span>`
                ).join(', ')}?
            </div>
        `;
    }
};

const clearSearch = () => {
    currentSearchTerm = '';
    searchActive = false;
    document.getElementById('timeline-search').value = '';
    document.getElementById('clear-search').style.display = 'none';
    
    // Update UI
    renderTimeline();
    updateStats();
    updateSearchInfo();
    
    // Restore normal animation for non-search events
    setTimeout(() => {
        const events = document.querySelectorAll('.event');
        events.forEach((event, index) => {
            if (!event.classList.contains('search-result')) {
                event.style.animationDelay = (index * 0.1) + 's';
                event.style.opacity = '';
            }
        });
    }, 50);
};

// Smart search with fuzzy matching and synonyms
const searchSynonyms = {
    'ipo': ['public', 'listing', 'stock', 'shares', 'dpo', 'direct public offering', 'nyse'],
    'ceo': ['chief executive', 'founder', 'leader', 'boss', 'executive'],
    'money': ['funding', 'investment', 'million', 'billion', 'capital', 'revenue', '$', 'crowns', 'dollar', 'fund'],
    'launch': ['start', 'begin', 'release', 'introduce', 'debut', 'announce', 'launch', 'open'],
    'music': ['song', 'track', 'streaming', 'audio', 'playlist', 'album', 'artist'],
    'deal': ['agreement', 'contract', 'partnership', 'acquisition', 'merge', 'acquire', 'buy'],
    'apple': ['itunes', 'steve jobs', 'ios', 'iphone', 'mac', 'ipod'],
    'daniel': ['ek', 'daniel ek', 'founder'],
    'martin': ['lorentzon', 'co-founder', 'martin lorentzon'],
    'podcast': ['audio', 'show', 'episode', 'gimlet', 'anchor', 'joe rogan', 'podcasting'],
    'user': ['subscriber', 'customer', 'listener', 'member', 'users', 'people'],
    'free': ['freemium', 'ad-supported', 'trial', 'gratis'],
    'premium': ['paid', 'subscription', 'pro', 'paying', 'subscriber'],
    'global': ['worldwide', 'international', 'expansion', 'world', 'europe', 'asia'],
    'sweden': ['swedish', 'stockholm', 'nordic', 'scandinavia'],
    'us': ['usa', 'america', 'united states', 'american', 'u.s.'],
    'facebook': ['fb', 'zuckerberg', 'social', 'f8'],
    'google': ['android', 'youtube', 'alphabet'],
    'amazon': ['alexa', 'echo', 'aws'],
    'taylor': ['swift', 'taylor swift', '1989'],
    'joe': ['rogan', 'joe rogan', 'experience', 'jre'],
    'pirate': ['piracy', 'illegal', 'the pirate bay', 'kazaa', 'napster'],
    'license': ['licensing', 'rights', 'copyright', 'label', 'labels'],
    'mobile': ['app', 'iphone', 'android', 'smartphone', 'phone'],
    '2006': ['founding', 'founded', 'start'],
    '2008': ['launch', 'sweden launch'],
    '2011': ['us launch', 'america', 'facebook'],
    '2018': ['ipo', 'public', 'listing']
};

const eventMatchesSearch = (event, searchTerm) => {
    // Split search into words for multi-word search
    const searchWords = searchTerm.toLowerCase().split(/\s+/).filter(word => word.length > 0);
    
    // Create a searchable text combining all event fields
    const searchableText = [
        event.event_description,
        event.entity,
        event.timestamp,
        event.supporting_text || '',
        event.details?.quote || '',
        event.details?.milestone || '',
        event.details?.relevant_info || '',
        event.details?.metric || '',
        ...(event.details?.relationships || [])
    ].join(' ').toLowerCase();
    
    // Check if ALL search words match (AND logic)
    for (const searchWord of searchWords) {
        let wordMatched = false;
        
        // Direct match
        if (searchableText.includes(searchWord)) {
            wordMatched = true;
        } else {
            // Check synonyms
            for (const [key, synonyms] of Object.entries(searchSynonyms)) {
                if (key === searchWord || synonyms.includes(searchWord)) {
                    // Check if any synonym matches
                    if (searchableText.includes(key) || synonyms.some(syn => searchableText.includes(syn))) {
                        wordMatched = true;
                        break;
                    }
                }
            }
            
            // Fuzzy matching for typos (Levenshtein distance)
            if (!wordMatched) {
                const words = searchableText.split(/\s+/);
                for (const word of words) {
                    if (fuzzyMatch(searchWord, word, 2)) { // Allow 2 character differences
                        wordMatched = true;
                        break;
                    }
                }
            }
        }
        
        if (!wordMatched) return false;
    }
    
    return true;
};

// Fuzzy matching function (Levenshtein distance)
const fuzzyMatch = (str1, str2, maxDistance) => {
    // Quick length check
    if (Math.abs(str1.length - str2.length) > maxDistance) return false;
    
    // For short words, require exact match
    if (str1.length <= 3 || str2.length <= 3) {
        return str1 === str2;
    }
    
    // Calculate Levenshtein distance
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length] <= maxDistance;
};

const highlightSearchTerm = (text, searchTerm) => {
    if (!text || !searchTerm) return text;
    
    let highlightedText = text;
    const searchWords = searchTerm.toLowerCase().split(/\s+/).filter(word => word.length > 0);
    
    // Highlight each search word
    searchWords.forEach(searchWord => {
        // Direct word highlighting
        const regex = new RegExp(`(${escapeRegExp(searchWord)})`, 'gi');
        highlightedText = highlightedText.replace(regex, '<mark class="search-highlight">$1</mark>');
        
        // Also highlight synonyms
        for (const [key, synonyms] of Object.entries(searchSynonyms)) {
            if (key === searchWord || synonyms.includes(searchWord)) {
                // Highlight the key
                const keyRegex = new RegExp(`(${escapeRegExp(key)})`, 'gi');
                highlightedText = highlightedText.replace(keyRegex, '<mark class="search-highlight">$1</mark>');
                
                // Highlight matching synonyms
                synonyms.forEach(syn => {
                    if (text.toLowerCase().includes(syn)) {
                        const synRegex = new RegExp(`(${escapeRegExp(syn)})`, 'gi');
                        highlightedText = highlightedText.replace(synRegex, '<mark class="search-highlight">$1</mark>');
                    }
                });
            }
        }
    });
    
    return highlightedText;
};

const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const updateSearchInfo = () => {
    const infoEl = document.getElementById('search-info');
    
    if (searchActive) {
        const totalMatches = countSearchMatches();
        infoEl.innerHTML = `
            <span class="search-results">
                Found <strong>${totalMatches}</strong> event${totalMatches !== 1 ? 's' : ''} 
                matching "<strong>${currentSearchTerm}</strong>"
            </span>
        `;
        infoEl.style.display = 'block';
    } else {
        infoEl.style.display = 'none';
    }
};

const countSearchMatches = () => {
    if (!searchActive || !currentSearchTerm) return 0;
    
    let count = 0;
    const filter = window.timelineData.currentFilter;
    
    window.timelineData.all.forEach(event => {
        // Apply category filter first
        const categoryMatch = filter === 'all' || event.entity === filter;
        if (!categoryMatch) return;
        
        // Apply entity filter if active
        if (entityFilterActive && currentEntityFilter) {
            const entityMatch = event.entity === currentEntityFilter || 
                               event.details?.relationships?.includes(currentEntityFilter);
            if (!entityMatch) return;
        }
        
        // Check search match
        if (eventMatchesSearch(event, currentSearchTerm)) {
            count++;
        }
    });
    
    return count;
};