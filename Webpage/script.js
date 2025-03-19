// script.js

document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    
    tabLinks.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Normalize the data-tab value (remove spaces and to lower case)
        let tabId = this.getAttribute("data-tab").replace(/\s/g, "").toLowerCase();
        
        // Hide all tab content sections
        const tabs = document.querySelectorAll("#training, #task1, #task2, #task3");
        tabs.forEach(function(tab) {
          tab.style.display = "none";
        });
        
        // Remove the 'active' class from all tab links
        tabLinks.forEach(function(link) {
          link.classList.remove("active");
        });
        
        // Show the selected tab content
        const activeTab = document.getElementById(tabId);
        if (activeTab) {
          activeTab.style.display = "block";
        }
        
        // Mark this link as active
        this.classList.add("active");
      });
    });
  });
  