/**
 * Global State Management
 * Centralized state for the entire application
 */

export const state = {
    // Photo management
    photos: [],
    photoTextures: [],
    photoMeshes: [],
    currentPhotoIndex: 0,
    
    // Experience state machine
    experienceState: 'SELECTING', // SELECTING, LOADING, FORMING, DISPLAYING, BLOOMING, PHOTO_CLOUD, SPOTLIGHT, ENDING
    stateStartTime: 0,
    
    // Hand tracking
    handDetected: false,
    handOpenness: 0.5,
    handPosition: { x: 0.5, y: 0.5 },
    handVelocity: { x: 0, y: 0 },
    lastHandX: 0.5,
    fingerCount: 0,
    gestureType: 'none', // none, ok, palm_left, palm_right, swipe_left, swipe_right
    lastGestureTime: 0,
    lastSwipeTime: 0,
    
    // Camera & zoom
    zoomLevel: 1.0,
    targetZoom: 1.0,
    lastZoomLevel: 1.0,
    
    // Spotlight
    spotlightActive: false,
    spotlightTarget: null,
    lastSpotlightTime: 0,
    
    // Full screen photo
    fullScreenPhoto: null,
    fullScreenActive: false,
    
    // Picked photos tracking
    pickedPhotos: new Set()
};

/**
 * Transition to a new experience state
 * @param {string} newState - The new state to transition to
 */
export function transitionToState(newState) {
    console.log(`State transition: ${state.experienceState} → ${newState}`);
    state.experienceState = newState;
    state.stateStartTime = Date.now();
    
    // Update UI
    const stateDisplay = document.getElementById('state-display');
    if (stateDisplay) {
        stateDisplay.textContent = newState.charAt(0) + newState.slice(1).toLowerCase();
    }
}
