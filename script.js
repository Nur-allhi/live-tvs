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

const sportsLinks = [
    { name: "TNT 1", url: "https://denverisalive.github.io/Player/Player.html?mpd=https://a201aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase&keyId=ae26845bd33038a9c0774a0981007294&key=63ac662dde310cfb4cc6f9b43b34196d", color: "indigo", icon: icons.sportsAward },
    { name: "TNT 2", url: "https://denverisalive.github.io/Player/Player.html?mpd=https://a201aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase&keyId=6d1708b185c6c4d7b37600520c7cc93c&key=1aace05f58d8edef9697fd52cb09f441", color: "gray", icon: icons.sportsAward },
    { name: "TNT 3", url: "https://denverisalive.github.io/Player/Player.html?mpd=https://a201aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase&keyId=4e993aa8c1f295f8b94e8e6f6d0bfe&key=86a1ed6e96caab8eb1009fe530d2cf4f", color: "slate", icon: icons.sportsAward },
    { name: "Willow Sports", url: "https://denverisalive.github.io/Player/Player.html?mpd=https://abmyxykaaaaaaaamkyvb65fuqebyg.7a77200bf98444ac997a89ed83775793.emt.cf.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/f60kqesunw/out/v1/a435ed7a00f947deb4369b46d8f2fb70/cenc.mpd&keyId=1779c27b9d077a3ba0c9cc1bb9a94b9f&key=cc5cf3b7928fb9e0a1ee6a8b566f0a8e", color: "lime", icon: icons.sportsAward },
    { name: "SPORTS TVN", url: "https://sportstvn.com/", color: "emerald", icon: icons.sportsAward }
];


const directChannelsLinks = [
    { name: "Disney+ Hotstar", url: "https://amitb3669.github.io/allinonereborn/disni.html", color: "red", icon: icons.playCircle }
];


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

// Call the function to generate links for each section when the page loads
document.addEventListener('DOMContentLoaded', () => {
    generateLinks(liveTvLinks, 'live-tv-links');
    generateLinks(sportsLinks, 'sports-links');
    generateLinks(directChannelsLinks, 'direct-channels-links');
});
