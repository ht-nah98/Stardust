/**
 * Application Configuration
 * All tunable parameters for the New Year 2025 Memory Universe
 */

export const CONFIG = {
    // Photo limits
    maxPhotos: 100,
    maxTextureSize: 512,
    
    // Particle counts
    particleCount: 50000,
    confettiCount: 3000,
    ambientGlowCount: 2000,
    fireworkCount: 500,
    
    // Colors
    goldColor: 0xffd700,
    silverColor: 0xc0c0c0,
    redColor: 0xff4444,
    
    // Animation timings (ms)
    formationDuration: 5000,
    displayDuration: 3000,
    bloomDuration: 3000,
    spotlightDuration: 2500,
    spotlightInterval: 4000,
    
    // Carousel
    carouselRadius: 25,
    carouselRotationSpeed: 0.1, // radians per second
    
    // Camera
    cameraFOV: 75,
    cameraNear: 0.1,
    cameraFar: 1000,
    cameraInitialZ: 50,
    cameraMaxDistance: 100,
    cameraMinDistance: 20,
    
    // Interaction
    zoomSpeed: 0.05,
    swipeThreshold: 0.15,
    interactionRadius: 10.0,
    gestureCooldown: 800, // ms
    swipeCooldown: 500, // ms
    
    // Full screen photo
    fullScreenScale: 25,
    fullScreenZ: 15,
    fullScreenLerpSpeed: 0.05
};
