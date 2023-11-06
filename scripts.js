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

    // If you have other scripts to include, you can add them below
    // ...

});
