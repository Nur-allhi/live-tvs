// SVG paths for various icons (from Lucide Icons)
const icons = {
    playCircle: `<path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/><path d="m10 8 6 4-6 4Z"/>`,
    layoutDashboard: `<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>`,
    tv: `<rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>`,
    clock: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
    gamepad: `<path d="M6 12H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2Z"/><path d="M18 12h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2Z"/><path d="M12 6V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2Z"/><path d="M12 18v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2Z"/><path d="M12 12h4v4h-4Z"/>`,
    film: `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7h18"/><path d="M3 17h18"/><path d="M17 3v18"/>`,
    sportsAward: `<circle cx="12" cy="8" r="6"/><path d="M15 12.5V20l-3-3-3 3V12.5"/>`
};

// --- LIVE TV & STREAMING LINKS ---
// To add a new link: Add a new object { name: "Link Name", url: "https://yourlink.com", color: "blue", icon: icons.tv }
// To remove a link: Delete its corresponding object from the array.
// To edit a link: Change the 'name', 'url', 'color', or 'icon' property of an existing object.
// Available Tailwind colors for 'color': blue, green, red, purple, orange, teal, pink, cyan, indigo, gray, slate, lime, emerald, amber, fuchsia, etc.
// Use numbers like '600' for primary color, '700' for hover, '300' for ring.
// Available icons: icons.playCircle, icons.layoutDashboard, icons.tv, icons.clock, icons.gamepad, icons.film, icons.sportsAward
const liveTvLinks = [
    { name: "Sony Liv_2", url: "https://sonyliv-web-by-shivansh.vercel.app/", color: "cyan", icon: icons.tv },
    { name: "Live tv Hub of All in one Tg", url: "https://allinonereborn.space/livetv-hub/", color: "purple", icon: icons.tv },
    { name: "BDIXTV24", url: "https://www.bdixtv24.xyz/", color: "blue", icon: icons.tv },
    { name: "MirjaLiv", url: "https://mirajliv.vercel.app/", color: "green", icon: icons.tv },
    { name: "Bdix 24/7", url: "https://bdixtv.serverbd247.com/", color: "red", icon: icons.tv },
    { name: "ZubyerOp-Game24", url: "https://www.game24x.xyz/?m=1", color: "purple", icon: icons.tv },
    { name: "BongoFlix", url: "https://tv.bongoflix.top/", color: "orange", icon: icons.tv },
    { name: "Jio Tv +", url: "https://mini1.allinonereborn.xyz/jiotv-ww192/", color: "teal", icon: icons.tv }
];

// --- SPORTS CHANNELS LINKS ---
// Same instructions as above for adding, removing, or editing links.
const sportsLinks = [
    { name: "TNT 1", url: "https://denverisalive.github.io/Player/Player.html?mpd=https://a201aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase&keyId=ae26845bd33038a9c0774a0981007294&key=63ac662dde310cfb4cc6f9b43b34196d", color: "indigo", icon: icons.sportsAward },
    { name: "TNT 2", url: "https://denverisalive.github.io/Player/Player.html?mpd=https://a201aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase&keyId=6d1708b185c6c4d7b37600520c7cc93c&key=1aace05f58d8edef9697fd52cb09f441", color: "gray", icon: icons.sportsAward },
    { name: "TNT 3", url: "https://denverisalive.github.io/Player/Player.html?mpd=https://a201aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase&keyId=4e993aa8c1f295f8b94e8e6f6d0bfe&key=86a1ed6e96caab8eb1009fe530d2cf4f", color: "slate", icon: icons.sportsAward },
    { name: "Willow Sports", url: "https://denverisalive.github.io/Player/Player.html?mpd=https://abmyxykaaaaaaaamkyvb65fuqebyg.7a77200bf98444ac997a89ed83775793.emt.cf.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/f60kqesunw/out/v1/a435ed7a00f947deb4369b46d8f2fb70/cenc.mpd&keyId=1779c27b9d077a3ba0c9cc1bb9a94b9f&key=cc5cf3b7928fb9e0a1ee6a8b566f0a8e", color: "lime", icon: icons.sportsAward },
    { name: "SPORTS TVN", url: "https://sportstvn.com/", color: "emerald", icon: icons.sportsAward }
];

// --- DIRECT CHANNELS LINKS ---
// Same instructions as above for adding, removing, or editing links.
const directChannelsLinks = [
    { name: "Disney+ Hotstar", url: "https://amitb3669.github.io/allinonereborn/disni.html", color: "red", icon: icons.playCircle }
];

/**
 * Dynamically generates link buttons and appends them to a target section.
 * @param {Array<Object>} linksArray - An array of link objects ({ name, url, color, icon }).
 * @param {string} targetElementId - The ID of the HTML element where links should be appended.
 */
function generateLinks(linksArray, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement) {
        console.error(`Target element with ID "${targetElementId}" not found.`);
        return;
    }

    linksArray.forEach(link => {
        const linkHtml = `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer"
               class="flex items-center justify-center p-4 bg-${link.color}-600 text-white rounded-lg shadow-md hover:bg-${link.color}-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-${link.color}-300">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    ${link.icon}
                </svg>
                <span class="text-lg font-semibold">${link.name}</span>
            </a>
        `;
        targetElement.insertAdjacentHTML('beforeend', linkHtml);
    });
}

// --- TV Remote Navigation Logic ---
let allLinks = [];
let focusedIndex = -1; // -1 means no element is focused initially

/**
 * Updates the visual focus on a link element and scrolls it into view.
 * @param {number} newIndex - The index of the link to focus in the allLinks array.
 */
function updateFocus(newIndex) {
    if (allLinks.length === 0) return;

    // Remove focus from previous element
    if (focusedIndex !== -1 && allLinks[focusedIndex]) {
        allLinks[focusedIndex].classList.remove('ring-4', 'ring-offset-2', 'ring-blue-500');
    }

    // Ensure newIndex is within bounds
    focusedIndex = (newIndex + allLinks.length) % allLinks.length;
    if (focusedIndex < 0) focusedIndex = allLinks.length - 1; // Handle negative modulo result for left arrow

    // Add focus to new element
    if (allLinks[focusedIndex]) {
        allLinks[focusedIndex].classList.add('ring-4', 'ring-offset-2', 'ring-blue-500');
        // Ensure the element receives browser focus for better accessibility and interaction
        allLinks[focusedIndex].focus();
        // Scroll into view, ensuring it's fully visible
        allLinks[focusedIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Generate links first
    generateLinks(liveTvLinks, 'live-tv-links');
    generateLinks(sportsLinks, 'sports-links');
    generateLinks(directChannelsLinks, 'direct-channels-links');

    // Collect all generated links into a single array for navigation
    allLinks = Array.from(document.querySelectorAll('#live-tv-links a, #sports-links a, #direct-channels-links a'));

    // Set initial focus on the first link if available
    if (allLinks.length > 0) {
        updateFocus(0);
    }

    // Add keyboard navigation listener
    document.addEventListener('keydown', (event) => {
        if (allLinks.length === 0) return;

        let newIndex = focusedIndex;
        const currentLink = allLinks[focusedIndex];
        const currentRect = currentLink ? currentLink.getBoundingClientRect() : null;

        switch (event.key) {
            case 'ArrowRight':
                newIndex = (focusedIndex + 1) % allLinks.length;
                break;
            case 'ArrowLeft':
                newIndex = (focusedIndex - 1 + allLinks.length) % allLinks.length;
                break;
            case 'ArrowDown':
                if (!currentRect) break;
                let nextRowCandidates = [];
                // Find all links that are in a row below the current one
                for (let i = focusedIndex + 1; i < allLinks.length; i++) {
                    const candidate = allLinks[i];
                    const candidateRect = candidate.getBoundingClientRect();
                    // Check if candidate is in a new row (its top is significantly below current)
                    // Adding a small tolerance (e.g., 5px) to account for minor layout variations
                    if (candidateRect.top > currentRect.bottom - 5) {
                        nextRowCandidates.push({ index: i, rect: candidateRect });
                    }
                }

                if (nextRowCandidates.length > 0) {
                    // Among candidates in the next row, find the one that is horizontally closest
                    let closestCandidate = null;
                    let minHorizontalDistance = Infinity;

                    nextRowCandidates.forEach(candidate => {
                        const horizontalDistance = Math.abs(candidate.rect.left - currentRect.left);
                        if (horizontalDistance < minHorizontalDistance) {
                            minHorizontalDistance = horizontalDistance;
                            closestCandidate = candidate;
                        }
                    });
                    if (closestCandidate) {
                        newIndex = closestCandidate.index;
                    } else {
                        // Fallback: if no ideal horizontal match, just go to the first candidate in the next row
                        newIndex = nextRowCandidates[0].index;
                    }
                } else {
                    // If no next row candidates, wrap to the first element of the entire list
                    newIndex = 0;
                }
                break;

            case 'ArrowUp':
                if (!currentRect) break;
                let prevRowCandidates = [];
                // Find all links that are in a row above the current one
                for (let i = focusedIndex - 1; i >= 0; i--) {
                    const candidate = allLinks[i];
                    const candidateRect = candidate.getBoundingClientRect();
                    // Check if candidate is in a previous row (its bottom is significantly above current)
                    // Adding a small tolerance (e.g., 5px)
                    if (candidateRect.bottom < currentRect.top + 5) {
                        prevRowCandidates.push({ index: i, rect: candidateRect });
                    }
                }

                if (prevRowCandidates.length > 0) {
                    // Among candidates in the previous row, find the one that is horizontally closest
                    let closestCandidate = null;
                    let minHorizontalDistance = Infinity;

                    // Iterate in reverse to pick the "last" element of the previous row that aligns well
                    for (let i = prevRowCandidates.length - 1; i >= 0; i--) {
                        const candidate = prevRowCandidates[i];
                        const horizontalDistance = Math.abs(candidate.rect.left - currentRect.left);
                        if (horizontalDistance < minHorizontalDistance) {
                            minHorizontalDistance = horizontalDistance;
                            closestCandidate = candidate;
                        }
                    }
                    if (closestCandidate) {
                        newIndex = closestCandidate.index;
                    } else {
                        // Fallback: if no ideal horizontal match, just go to the last candidate in the previous row
                        newIndex = prevRowCandidates[prevRowCandidates.length - 1].index;
                    }
                } else {
                    // If no previous row candidates, wrap to the last element of the entire list
                    newIndex = allLinks.length - 1;
                }
                break;

            case 'Enter':
                if (allLinks[focusedIndex]) {
                    // Use window.open for more reliable navigation, especially with target="_blank"
                    window.open(allLinks[focusedIndex].href, '_blank');
                }
                return; // Prevent default scroll behavior for Enter
            default:
                return; // Do nothing for other keys
        }

        // Prevent default browser scroll behavior for arrow keys
        event.preventDefault();
        updateFocus(newIndex);
    });
});
