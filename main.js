// selecting items
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const icon = document.querySelector('.icon');

sidebarToggle.addEventListener('click', function() {

    sidebar.classList.toggle('show-sidebar');
    changeIcon();

});

closeBtn.addEventListener('click', function() {

    sidebar.classList.remove('show-sidebar');
    changeIcon();

});

function changeIcon() {
    if(icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-bars-staggered');
    } else {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-bars-staggered');
    }
}