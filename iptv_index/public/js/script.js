document.addEventListener("DOMContentLoaded", () => {
  const channelContainer = document.getElementById("channelContainer");
  const listViewBtn = document.getElementById("listViewBtn");
  const gridViewBtn = document.getElementById("gridViewBtn");
  const themeToggle = document.getElementById("themeToggle");
  const searchInput = document.getElementById("searchInput");
  const groupFilter = document.getElementById("groupFilter");
  const loadingIndicator = document.getElementById("loadingIndicator");
  const noResults = document.getElementById("noResults");

  let channels = [];
  let currentView = 'list';
  let currentTheme = localStorage.getItem('theme') || 'dark';

  // Set initial theme (dark by default)
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

  // Fetch channels from JSON
  fetchChannels();

  function fetchChannels() {
    showLoading();
    fetch("public/data/channels.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        channels = data;
        hideLoading();
        renderChannels(data);
        populateGroupFilter(data);
      })
      .catch(error => {
        hideLoading();
        console.error("Error loading channels:", error);
        channelContainer.innerHTML = `<div class="error">Failed to load channels. Please try again later.</div>`;
      });
  }

  function showLoading() {
    loadingIndicator.classList.remove('hidden');
    channelContainer.classList.add('hidden');
    noResults.classList.add('hidden');
  }

  function hideLoading() {
    loadingIndicator.classList.add('hidden');
    channelContainer.classList.remove('hidden');
  }

  function showNoResults() {
    noResults.classList.remove('hidden');
    channelContainer.classList.add('hidden');
  }

  function hideNoResults() {
    noResults.classList.add('hidden');
    channelContainer.classList.remove('hidden');
  }

  function populateGroupFilter(channels) {
    const groups = [...new Set(channels.map(channel => channel.group))];
    groupFilter.innerHTML = '<option value="all">All Groups</option>';
    groups.forEach(group => {
      const option = document.createElement('option');
      option.value = group;
      option.textContent = group;
      groupFilter.appendChild(option);
    });
  }

  function renderChannels(channelsToRender) {
    if (channelsToRender.length === 0) {
      showNoResults();
      return;
    }

    hideNoResults();
    channelContainer.innerHTML = "";
    
    channelsToRender.forEach(channel => {
      const card = document.createElement("div");
      card.className = "channel-card";
      
      card.innerHTML = `
        <div class="info">
          <div class="name">${channel.name}</div>
          <div class="group">${channel.group || 'Uncategorized'}</div>
          <a href="${channel.url}" target="_blank" rel="noopener noreferrer">Watch</a>
        </div>
      `;
      
      // Make the entire card clickable
      card.addEventListener('click', (e) => {
        // Only trigger if the click is not on the "Watch" link itself
        if (e.target.tagName !== 'A') {
          window.open(channel.url, '_blank');
        }
      });
      
      channelContainer.appendChild(card);
    });
  }

  function filterChannels() {
    let filteredChannels = [...channels];
    
    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
      filteredChannels = filteredChannels.filter(channel => 
        channel.name.toLowerCase().includes(searchTerm) ||
        (channel.group && channel.group.toLowerCase().includes(searchTerm))
      );
    }
    
    // Apply group filter
    const selectedGroup = groupFilter.value;
    if (selectedGroup !== 'all') {
      filteredChannels = filteredChannels.filter(channel => channel.group === selectedGroup);
    }
    
    renderChannels(filteredChannels);
  }

  // Toggle Views
  listViewBtn.addEventListener("click", () => {
    channelContainer.classList.remove("grid-view");
    channelContainer.classList.add("list-view");
    listViewBtn.classList.add("active");
    gridViewBtn.classList.remove("active");
    currentView = 'list';
  });

  gridViewBtn.addEventListener("click", () => {
    channelContainer.classList.remove("list-view");
    channelContainer.classList.add("grid-view");
    gridViewBtn.classList.add("active");
    listViewBtn.classList.remove("active");
    currentView = 'grid';
  });

  // Set initial active view button
  if (currentView === 'list') {
    listViewBtn.classList.add("active");
  } else {
    gridViewBtn.classList.add("active");
  }

  // Theme toggle
  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  });

  // Event listeners for filters
  searchInput.addEventListener('input', filterChannels);
  groupFilter.addEventListener('change', filterChannels);
});