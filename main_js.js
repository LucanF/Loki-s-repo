function toggleNav() {
    let navBar = document.getElementById("SideNavBar");

    if (navBar.classList.contains("open")) {
        navBar.classList.remove("open");
    } else {
        navBar.classList.add("open");
    }
}
