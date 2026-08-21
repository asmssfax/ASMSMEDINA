// ==========================================================
// atrisk-map.js - Updated Version with 404 Photo Handling
// ==========================================================

/**
 * Function to load location photos and gracefully handle missing images (404 Not Found)
 * @param {string|number} locationId - The ID of the current location (e.g., 138)
 * @param {HTMLElement} photosContainer - The DOM container element where photos will be appended
 * @param {number} maxPhotos - Maximum number of photos to check for (default: 6)
 */
function loadLocationPhotos(locationId, photosContainer, maxPhotos = 6) {
    if (!photosContainer) return;
    
    // Clear container before loading new location photos
    photosContainer.innerHTML = '';

    for (let i = 1; i <= maxPhotos; i++) {
        const img = document.createElement('img');
        const photoPath = `images/atrisk/photos/${locationId}-${i}.jpg`;

        img.src = photoPath;
        img.alt = `Photo ${locationId}-${i}`;
        img.className = 'atrisk-photo';

        // Error Handling: Hide missing images automatically (prevents broken image icons and 404 display issues)
        img.onerror = function() {
            this.style.display = 'none';
        };

        // Display image smoothly upon successful load
        img.onload = function() {
            this.style.display = 'inline-block';
        };

        photosContainer.appendChild(img);
    }
}

/**
 * Helper function to generate photo HTML string if innerHTML approach is used
 * @param {string|number} id - Location ID
 * @param {number} photoIndex - Photo sequence number
 * @returns {string} HTML string with built-in onerror handler
 */
function getPhotoTemplate(id, photoIndex) {
    return `<img src="images/atrisk/photos/${id}-${photoIndex}.jpg" 
                 alt="Photo ${id}-${photoIndex}" 
                 class="atrisk-photo" 
                 onerror="this.style.display='none';" />`;
}
