/**
 * Confetti Particle System
 * Creates falling confetti particles for festive atmosphere
 */

import { CONFIG } from '../config.js';
import * as THREE from 'three';

let confettiSystem;
let confettiVelocities = [];
let confettiGeometry;

/**
 * Create confetti particle system
 * @param {THREE.Scene} scene - The Three.js scene
 * @returns {THREE.Points} The confetti system
 */
export function createConfettiSystem(scene) {
    confettiGeometry = new THREE.BufferGeometry();
    const confettiPositions = new Float32Array(CONFIG.confettiCount * 3);
    const confettiColors = new Float32Array(CONFIG.confettiCount * 3);
    confettiVelocities = [];

    for (let i = 0; i < CONFIG.confettiCount; i++) {
        confettiPositions[i * 3] = (Math.random() - 0.5) * 200;
        confettiPositions[i * 3 + 1] = Math.random() * 100 + 50;
        confettiPositions[i * 3 + 2] = (Math.random() - 0.5) * 200;
        
        // Random festive colors
        const colorChoice = Math.random();
        const color = new THREE.Color();
        if (colorChoice < 0.4) color.setHex(CONFIG.goldColor);
        else if (colorChoice < 0.7) color.setHex(CONFIG.silverColor);
        else color.setHex(CONFIG.redColor);
        
        confettiColors[i * 3] = color.r;
        confettiColors[i * 3 + 1] = color.g;
        confettiColors[i * 3 + 2] = color.b;
        
        confettiVelocities.push({
            y: -0.05 - Math.random() * 0.1,
            rotation: (Math.random() - 0.5) * 0.02
        });
    }

    confettiGeometry.setAttribute('position', new THREE.BufferAttribute(confettiPositions, 3));
    confettiGeometry.setAttribute('color', new THREE.BufferAttribute(confettiColors, 3));

    const confettiMaterial = new THREE.PointsMaterial({
        vertexColors: true,
        size: 0.15,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    confettiSystem = new THREE.Points(confettiGeometry, confettiMaterial);
    scene.add(confettiSystem);
    
    console.log(`Created ${CONFIG.confettiCount} confetti particles`);
    return confettiSystem;
}

/**
 * Update confetti animation
 * @param {number} deltaTime - Time since last frame in seconds
 */
export function updateConfetti(deltaTime) {
    if (!confettiGeometry) return;
    
    const positions = confettiGeometry.attributes.position.array;
    
    for (let i = 0; i < CONFIG.confettiCount; i++) {
        positions[i * 3 + 1] += confettiVelocities[i].y;
        
        // Reset if below ground
        if (positions[i * 3 + 1] < -50) {
            positions[i * 3 + 1] = 100;
            positions[i * 3] = (Math.random() - 0.5) * 200;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
        }
    }
    
    confettiGeometry.attributes.position.needsUpdate = true;
}

/**
 * Get the confetti system
 * @returns {THREE.Points} The confetti system
 */
export function getConfettiSystem() {
    return confettiSystem;
}
