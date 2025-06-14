// Default emoji mapping for relationships and entities
const defaultEmojiMap = {
    // Core People
    'Daniel Ek': '👨‍💻',
    'Daniel Ek (Spotify CEO)': '👨‍💻',
    'Daniel Ek (pre-Spotify)': '👨‍💻',
    'Martin Lorentzon': '👨‍💼',
    'Steve Jobs': '🍎',
    'Steve Jobs (Apple CEO)': '🍎',
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
const minZoom = 0.5;
const maxZoom = 2;
const zoomStep = 0.1;

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

    // Load custom emoji settings
    loadCustomEmojis();
    
    // Initialize
    renderTimeline();
    updateStats();
    setupEventListeners();
    setupZoomControls();
    setupEmojiManager();
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
                
                // Show entity pill only in 'all' filter or when it's different from current filter
                const showEntityPill = filter === 'all' || event.entity !== filter;
                
                // Generate relationship emojis for collapsed view
                const relationshipEmojis = event.details?.relationships 
                    ? event.details.relationships.slice(0, 4).map(rel => getEmojiForEntity(rel)).join('')
                    : '';
                
                html += `
                    <div class="event" style="animation-delay: ${index * 0.1}s">
                        <div class="event-dot"></div>
                        <div class="event-content" data-event-id="${window.timelineData.all.indexOf(event)}" 
                             data-certainty="${event.certainty}" data-page="${event.page_number}">
                            <div class="event-date">${event.timestamp}</div>
                            ${showEntityPill ? `<div class="event-entity entity-${entityClass}">${event.entity}</div>` : ''}
                            <div class="event-title">${event.event_description}</div>
                            ${relationshipEmojis ? `<div class="relationship-emojis">${relationshipEmojis}</div>` : ''}
                            
                            <div class="event-details">
                                ${event.supporting_text ? `<div class="event-supporting">${event.supporting_text}</div>` : ''}
                                
                                ${event.details ? renderDetails(event.details) : ''}
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
            const emoji = getEmojiForEntity(rel);
            html += `<span class="meta-tag relationship-tag">${emoji} ${rel}</span>`;
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
    
    item.innerHTML = `
        <input type="text" class="emoji-input" value="${currentEmoji}" maxlength="4" 
               data-entity="${entity}" title="Click to change emoji">
        <div class="entity-details">
            <div class="entity-name">${entity}</div>
            <div class="entity-category">${getCategoryDisplayName(category)}</div>
        </div>
    `;
    
    // Add event listener for emoji changes
    const input = item.querySelector('.emoji-input');
    input.addEventListener('input', (e) => {
        emojiMap[entity] = e.target.value;
        // Update timeline immediately to show changes
        renderTimeline();
    });
    
    return item;
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