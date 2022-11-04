btnPortfolio = () => {
    var showPortfolio = document.getElementById("portfolio-details")
    var hideSkills = document.getElementById("portfolio-skills")
    var hideMoreDetails = document.getElementById("portfolio-more-details")

    showPortfolio.style.display = "block"
    hideSkills.style.display = "none"
    hideMoreDetails.style.display = "none"
}
btnSkills = () => {
    var showPortfolio = document.getElementById("portfolio-details")
    var hideSkills = document.getElementById("portfolio-skills")
    var hideMoreDetails = document.getElementById("portfolio-more-details")

    showPortfolio.style.display = "none"
    hideSkills.style.display = "block"
    hideMoreDetails.style.display = "none"
}

btnPersonalDetails = () => {
    var showPortfolio = document.getElementById("portfolio-details")
    var hideSkills = document.getElementById("portfolio-skills")
    var hideMoreDetails = document.getElementById("portfolio-more-details")

    showPortfolio.style.display = "none"
    hideSkills.style.display = "none"
    hideMoreDetails.style.display = "block"
}