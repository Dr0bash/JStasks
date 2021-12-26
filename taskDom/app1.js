function myClick(panelNum){
    const panels = document.getElementsByClassName("panel");
    let initPanel = panels[panelNum-1];
    for (let i = panelNum-1; i < 3; ++i){
        initPanel.classList.toggle('show');
        initPanel = initPanel.nextElementSibling.nextElementSibling;
    }
}