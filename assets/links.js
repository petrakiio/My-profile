const elements = {
    disc: document.getElementById('disc'),
    insta: document.getElementById('insta'),
    linkd: document.getElementById('link'),
    whatts: document.getElementById('zap'),
    git: document.getElementById('git'),
    btnport: document.getElementById('port'),
    themeToggle: document.getElementById('theme-toggle'),
};

const root = document.documentElement;
const THEME_KEY = 'themePreference';

const updateThemeToggleLabel = (theme) => {
    if (elements.themeToggle) {
        const icon = elements.themeToggle.querySelector('.theme-icon');
        const isLight = theme === 'light';

        if (icon) {
            icon.textContent = isLight ? '☀' : '🌙';
        }

        elements.themeToggle.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
        elements.themeToggle.title = isLight ? 'Modo escuro' : 'Modo claro';
    }
};

const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeToggleLabel(theme);
};

const initializeTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');

    root.setAttribute('data-theme', initialTheme);
    updateThemeToggleLabel(initialTheme);
};

initializeTheme();

if (elements.themeToggle) {
    elements.themeToggle.onclick = () => {
        const currentTheme = root.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
    };
}

elements.git.onclick = () =>
    window.open('https://github.com/petrakiio', '_blank');

elements.linkd.onclick = () =>
    window.open('https://linkedin.com/in/petrakiio', '_blank');

elements.disc.onclick = () =>
    window.open('https://discord.com/users/1325631694773944320', '_blank');


elements.btnport.onclick = () =>
    window.open('https://petrakiio.github.io/Portifolio/', '_blank');

elements.insta.onclick = () => {
    const username = "pe.zrd";

    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = `instagram://user?username=${username}`;

        setTimeout(() => {
            window.location.href = `https://instagram.com/${username}`;
        }, 1500);
    } else {
        window.open(`https://instagram.com/${username}`, "_blank");
    }
};

elements.whatts.onclick = () => {
    const phone = "5516999999999";

    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = `whatsapp://send?phone=${phone}`;

        setTimeout(() => {
            window.location.href = `https://wa.me/${phone}`;
        }, 1500);
    } else {
        window.open(`https://wa.me/${phone}`, "_blank");
    }
};
