/**
 * Ambient Glow Particle System
 * Creates glowing golden particles for ambience
 */

import { CONFIG } from '../config.js';
import * AS THREE from 'three';

let glowSystem;
let glowGeometry;

/**
 * Create ambient glow particle system
 * @param {THREE.Scene} scene - The Three.js scene
 * @returns {THREE.Points} The glow system
 */
export function createGlowSystem(scene) {
    glowGeometry = new THREE.BufferGeometry();
    const glowPositions = new Float32Array(CONFIG.ambientGlowCount * 3);
    const glowColors = new Float32Array(CONFIG.ambientGlowCount * 3);

    for (let i = 0; i < CONFIG.ambientGlowCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = 30 + Math.random() * 40;
        
        glowPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        glowPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        glowPositions[i * 3 + 2] = r * Math.cos(phi);
        
        const color = new THREE.Color(CONFIG.goldColor);
        color.multiplyScalar(0.5 + Math.random() * 0.5);
        
        glowColors[i * 3] = color.r;
        glowColors[i * 3 + 1] = color.g;
        glowColors[i * 3 + 2] = color.b;
    }

    glowGeometry.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));
    glowGeometry.setAttribute('color', new THREE.BufferAttribute(glowColors, 3));

    const glowMaterial = new THREE.PointsMaterial({
        vertexColors: true,
        size: 0.8,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });

    glowSystem = new THREE.Points(glowGeometry, glowMaterial);
    scene.add(glowSystem);
    
    console.log(`Created ${CONFIG.ambientGlowCount} glow particles`);
    return glowSystem;
}

/**
 * Update glow animation (slow floating)
 * @param {number} currentTime - Current timestamp
 */
export function updateGlow(currentTime) {
    if (glowSystem) {
        glowSystem.rotation.y = currentTime * 0.00005;
        glowSystem.rotation.x = Math.sin(currentTime * 0.0001) * 0.1;
    }
}

/**
 * Get the glow system
 * @returns {THREE.Points} The glow system
 */
export function getGlowSystem() {
    return glowSystem;
}
