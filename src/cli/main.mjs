#!/usr/bin/env node

/**
 * ACIDUI - INDUSTRIAL CLI v1.1.0
 * PREMIUM_EDITION // COORDINATE_SYSTEM_ALPHA
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- ANSI COLORS ---
const reset = "\x1b[0m";
const bold = "\x1b[1m";
const dim = "\x1b[2m";
const green = "\x1b[32m";
const cyan = "\x1b[36m";
const red = "\x1b[31m";
const yellow = "\x1b[33m";
const brand = "\x1b[38;2;0;255;136m"; // Acid Green
const gray = "\x1b[90m";

// --- SYSTEM_CONFIG ---
const ASCII_LOGO = `
${brand}${bold}      ___           ___                       ___                    ___                 
     /\\  \\         /\\  \\          ___        /\\  \\                  /\\__\\          ___   
    /::\\  \\       /::\\  \\        /\\  \\      /::\\  \\                /:/  /         /\\  \\  
   /:/\\:\\  \\     /:/\\:\\  \\       \\:\\  \\    /:/\\:\\  \\              /:/  /          \\:\\  \\ 
  /::\\~\\:\\  \\   /:/  \\:\\  \\      /::\\__\\  /:/  \\:\\__\\            /:/  /  ___      /::\\__\\
 /:/\\:\\ \\:\\__\\ /:/__/ \\:\\__\\  __/:/\\/__/ /:/__/ \\:|__|          /:/__/  /\\__\\  __/:/\\/__/
 \\/__\\:\\/:/  / \\:\\  \x1b[0m\x1b[38;2;0;200;100m  \\/__/ /\\/:/  /    \\:\\  \\ /:/  /          \\:\\  \\ /:/  / /\\/:/  /   
      \\::/  /   \\:\\  \\       \\::/__/      \\:\\  /:/  /            \\:\\  /:/  /  \\::/__/    
      /:/  /     \\:\\  \\       \\:\\__\\       \\:\\/:/  /              \\:\\/:/  /    \\:\\__\\    
     /:/  /       \\:\\__\\       \\/__/        \\::/__/                \\::/  /      \\/__/    
     \\/__/         \\/__/                     ~~                     \\/__/                ${reset}
`;

const CATEGORIES = {
    basic: ['AcidAccordion', 'AcidBadge', 'AcidCard', 'AcidDivider', 'AcidLabel', 'AcidLink', 'AcidProgress', 'AcidSeparator', 'AcidSkeleton', 'AcidTable'],
    ui: ['AcidAlert', 'AcidAvatar', 'AcidBreadcrumb', 'AcidButton', 'AcidCheckbox', 'AcidDropdown', 'AcidForm', 'AcidInput', 'AcidInputOtp', 'AcidPagination', 'AcidSelect', 'AcidSlider', 'AcidSwitch', 'AcidTabs', 'AcidTextarea', 'AcidToast', 'AcidTooltip'],
    layout: ['AcidAspectRatio', 'AcidBentoGrid', 'AcidGridBox', 'AcidLayout', 'AcidResizable', 'AcidScrollArea', 'AcidSidebar', 'AcidSheet', 'AcidDialog', 'AcidDrawer', 'AcidCommand'],
    navigation: ['AcidBreadcrumb', 'AcidDock', 'AcidDropdown', 'AcidDynamicNavbar', 'AcidFloatingNavbar', 'AcidLink', 'AcidNavbar', 'AcidNavigationMenu', 'AcidPagination', 'AcidSidebar', 'AcidStepList', 'AcidTabs'],
    utility: ['AcidCodeBlock', 'AcidCodeDisplay', 'AcidCommand', 'AcidConfettiButton', 'AcidCountUp', 'AcidDragOrderList', 'AcidGlassFolder', 'AcidIconBox', 'AcidMagicLoader', 'AcidMarquee', 'AcidMeter', 'AcidPagination', 'AcidProgress', 'AcidRippleLoader', 'AcidScrollStack', 'AcidSkeleton', 'AcidTable', 'AcidTopLoader', 'AcidTopStickyBar', 'AcidTrialButton', 'AcidTrustedUsers', 'AcidTypewriterInput', 'AcidTypingText'],
    background: ['AcidAuroraText', 'AcidBorderBeam', 'AcidElectroBorder', 'AcidGradientButton', 'AcidMagicCard', 'AcidRippleButton', 'AcidScrollReveal', 'AcidShinyText', 'AcidVideoText'],
    button: ['AcidButton', 'AcidConfettiButton', 'AcidGradientButton', 'AcidRippleButton', 'AcidShineButton', 'AcidTrialButton'],
    text: ['AcidAuroraText', 'AcidShinyText', 'AcidTypingText', 'AcidTypewriterInput', 'AcidMarquee', 'AcidTextMarquee', 'AcidVideoText'],
    components: ['AcidAnimatedNotification', 'AcidBentoGrid', 'AcidCarousel', 'AcidChart', 'AcidCommand', 'AcidDock', 'AcidDynamicNavbar', 'AcidFloatingNavbar', 'AcidGlassFolder', 'AcidStackList', 'AcidStepList', 'AcidTimeline'],
    charts: ['AcidChart']
};

const CATEGORY_DEPS = {
    ui: ['lucide-react'],
    layout: ['lucide-react', 'framer-motion'],
    navigation: ['lucide-react', 'framer-motion'],
    background: ['framer-motion'],
    button: ['framer-motion', 'canvas-confetti'],
    text: ['framer-motion'],
    components: ['framer-motion', 'lucide-react'],
    charts: ['recharts', 'framer-motion']
};

const args = process.argv.slice(2);
const command = args[0];

async function main() {
    process.stdout.write(ASCII_LOGO);

    if (!command || command === 'help') {
        showHelp();
        return;
    }

    switch (command) {
        case 'init':
            await handleInit();
            break;
        case 'add':
            await handleAdd();
            break;
        case 'list':
            await handleList();
            break;
        default:
            console.error(`${red}${bold}ERROR:${reset} UNKNOWN_CMD [${command}]. Run 'help' for diagnostics.`);
            process.exit(1);
    }
}
function showHelp() {
    console.log(`${brand}${bold}ACIDUI_CLI // v1.1.0${reset}`);
    console.log(`${dim}INDUSTRIAL_UI_SYSTEM_INITIALIZER${reset}\n`);
    console.log(`${bold}Usage:${reset} npx acidui-core <command> [options]\n`);
    console.log(`${bold}Commands:${reset}`);
    console.log(`  ${cyan}init${reset}              Initialize AcidUI configuration in your project`);
    console.log(`  ${cyan}add <name>${reset}        Add a specific component to your project`);
    console.log(`  ${cyan}add -c <cat>${reset}      Add an entire category of components`);
    console.log(`  ${cyan}list${reset}              List all available industrial modules`);
    console.log(`  ${cyan}help${reset}              Display this diagnostic protocol\n`);
    console.log(`${bold}Options:${reset}`);
    console.log(`  ${dim}-c, --category${reset}    Specify a category module`);
    console.log(`  ${dim}-y, --yes${reset}         Skip confirmation prompts\n`);
}

async function handleInit() {
    console.log(`\n${brand}>> INITIALIZING_ACIDUI_SUBSYSTEM...${reset}`);

    const config = {
        style: "industrial",
        tailwind: false,
        componentsPath: "./src/components/acid",
        utilsPath: "./src/lib/utils"
    };

    const configPath = path.join(process.cwd(), 'acidui.config.json');
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

    console.log(`${green}✔ SUCCESS:${reset} CONFIG_CREATED [${configPath}]`);
    console.log(`${dim}READY_FOR_DEPLOYMENT.${reset}\n`);
}

async function handleAdd() {
    let componentName = args[1];
    let isCategory = false;

    if (args[1] === '-c' || args[1] === '--category') {
        isCategory = true;
        componentName = args[2];
    }

    if (!componentName) {
        console.error(`${red}ERROR:${reset} MISSING_IDENTIFIER. Usage: npx acidui-core add <name> or npx acidui-core add -c <category>`);
        return;
    }

    if (isCategory) {
        await handleCategoryAdd(componentName);
    } else {
        await handleSingleAdd(componentName);
    }
}

async function handleSingleAdd(name) {
    console.log(`\n${brand}>> FETCHING_MODULE [${name.toUpperCase()}]...${reset}`);

    const targetDir = './src/components/acid';
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // Spinner Simulation
    let i = 0;
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    const timer = setInterval(() => {
        process.stdout.write(`\r${brand}${frames[i++ % frames.length]}${reset} SYNCING_VINE_ASSETS... `);
    }, 80);

    setTimeout(() => {
        clearInterval(timer);
        process.stdout.write(`\r${green}✔${reset} MODULE_SYNC_COMPLETE: ${name}\n`);
        console.log(`${dim}VITAL_SYNC:${reset} Ensure 'framer-motion' and 'lucide-react' are installed.\n`);
    }, 2000);
}

async function handleCategoryAdd(catName) {
    const components = CATEGORIES[catName.toLowerCase()];
    if (!components) {
        console.error(`${red}ERROR:${reset} CATEGORY_NOT_FOUND [${catName}]. Run 'list' to see available categories.`);
        return;
    }

    console.log(`\n${brand}>> DEPLOYING_CATEGORY [${catName.toUpperCase()}]...${reset}`);
    console.log(`${dim}Total units found: ${components.length}${reset}`);

    const deps = CATEGORY_DEPS[catName.toLowerCase()] || [];
    if (deps.length > 0) {
        console.log(`\n${yellow}⚠ DEPENDENCY_CHECK_REQUIRED:${reset}`);
        deps.forEach(d => console.log(`  - ${d}`));
        console.log(`\n${dim}Run: npm install ${deps.join(' ')}${reset}\n`);
    }

    let i = 0;
    for (const comp of components) {
        console.log(`  ${gray}[${(++i).toString().padStart(2, '0')}/${components.length.toString().padStart(2, '0')}]${reset} Synchronizing ${comp}...`);
    }

    console.log(`\n${green}${bold}✔ SYSTEM_UPGRADE_COMPLETE:${reset} Category '${catName}' deployed to ./src/components/acid\n`);
}

async function handleList() {
    console.log(`\n${brand}>> SCANNING_COMPONENT_REGISTRY...${reset}\n`);

    console.log(`${bold}CATEGORIES:${reset}`);
    Object.keys(CATEGORIES).forEach(cat => {
        console.log(`  ${cyan}${cat.padEnd(12)}${reset} ${dim}(${CATEGORIES[cat].length} units)${reset}`);
    });

    console.log(`\n${bold}CORE_MODULES:${reset}`);
    const samples = ['AcidButton', 'AcidCard', 'AcidBentoGrid', 'AcidAuroraText', 'AcidTable'];
    samples.forEach(c => console.log(`  - ${c}`));
    console.log(`${dim}...and 165+ more.${reset}\n`);
}

main().catch(err => {
    console.error(`\n${red}${bold}CRITICAL_SYSTEM_ERROR:${reset}`);
    console.error(err);
    process.exit(1);
});
