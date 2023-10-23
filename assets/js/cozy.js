function opentabs(Tabid) {
    // const tabcontent = document.querySelectorAll(".my-content");
    // tabcontent.forEach((Tabcontent) => {
    //     Tabcontent.classList.add("d_none");
    //     Tabcontent.classList.remove("d_block");
    // });
    const tabself = document.querySelectorAll(".my-tab");
    tabself.forEach((Tabsapce) => {
        Tabsapce.classList.add("d_none");
        Tabsapce.classList.remove("d_block");
    });
    const mytabshow = document.getElementById(Tabid);
    mytabshow.classList.add("d_block");
    mytabshow.classList.remove("d_none");

    // const activecontent = document.querySelectorAll(".action");
    // activecontent.forEach((activeunder) => {
    //     activeunder.classList.remove("activeunder");
    // });
    //   const activetab = document.querySelector(
    //     `button[onclick="opentabs('${Tabid}')"]`
    //   );
    //   activetab.classList.add("activeunder");
}
function closetab() {
    const tabcontent = document.querySelectorAll(".my-content");
    tabcontent.forEach((Tabcontent) => {
        Tabcontent.classList.add("d_none");
        Tabcontent.classList.remove("d_block");
    });
    const tabself = document.querySelectorAll(".my-tab");
    tabself.forEach((Tabsapce) => {
        Tabsapce.classList.add("d_block");
        Tabsapce.classList.remove("d_none");
    });
}