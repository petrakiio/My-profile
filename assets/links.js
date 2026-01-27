const elements = {
    disc: document.getElementById('disc'),
    insta: document.getElementById('insta'),
    linkd: document.getElementById('link'),
    whatts: document.getElementById('zap'),
    git: document.getElementById('git'),
    btnport: document.getElementById('port'),
    btnproj: document.getElementById('proj')
};

elements.git.onclick = () =>
    window.open('https://github.com/petrakiio', '_blank');

elements.linkd.onclick = () =>
    window.open('https://linkedin.com/in/petrakiio', '_blank');

elements.disc.onclick = () =>
    window.open('https://discord.com/users/1325631694773944320', '_blank');

elements.btnproj.onclick = () =>
    window.open('https://petrakiio.github.io/WoodLab/index.html', '_blank');

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

