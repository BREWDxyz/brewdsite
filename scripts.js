// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Function to remove the 'active' class from all elements
    function deactivateAll(elements) {
        elements.forEach(element => {
            element.classList.remove('active');
        });
    }

    // Function to activate a tab and its corresponding pane
    function activateTab(tab, panes) {
        const targetId = tab.dataset.target;
        const targetPane = document.querySelector(targetId);

        deactivateAll(panes);
        deactivateAll(tabs);

        tab.classList.add('active');
        targetPane.classList.add('active');

        // Save the active tab to localStorage
        saveActiveTab(targetId);
    }

    // Function to save the active tab to localStorage
    function saveActiveTab(tabId) {
        localStorage.setItem('activeTab', tabId);
    }

    // Function to load the active tab from localStorage
    function loadActiveTab(panes) {
        const activeTabId = localStorage.getItem('activeTab');
        if (activeTabId) {
            const activeTab = document.querySelector(`.tab-button[data-target="${activeTabId}"]`);
            if (activeTab) {
                activateTab(activeTab, panes);
            }
        }
    }

    // Get all tab buttons and panes
    const tabs = document.querySelectorAll('.tab-button');
    const panes = document.querySelectorAll('.tab-pane');

    // Initialize tabs functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            activateTab(tab, panes);
        });
    });

    // Load the active tab from localStorage if it exists
    loadActiveTab(panes);
    
    // If you have other scripts to include, you can add them below
    // ...
});
