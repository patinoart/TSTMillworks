document.addEventListener('DOMContentLoaded', function () {

    console.log("hello")

    const navLinks = document.querySelectorAll('.w--current');
    const workLinksWrapper = document.getElementById('work-dropdown');
    const infoLinksWrapper = document.getElementById('info-dropdown');

    const currentPath = window.location.pathname;
    if (currentPath.includes('/services') || currentPath.includes('/showcase') || currentPath.includes('/blog')) {
        workLinksWrapper.style.display = 'flex';
        workLinksWrapper.style.alignItems = 'center';

        
        console.log('success');
    }

    if (currentPath.includes('/about') || currentPath.includes('/contact')) {
        infoLinksWrapper.style.display = 'flex';
        infoLinksWrapper.style.alignItems = 'center';
        
        console.log('success');
    }

});