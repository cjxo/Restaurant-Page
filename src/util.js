function createDescCard(headerText, content) {
    const divCard = document.createElement("div");
    divCard.classList.add("desc-card");

    const divHeader = document.createElement("div");
    divHeader.classList.add("desc-header");
    divHeader.textContent = headerText;

    const divContent = document.createElement("div");
    divContent.appendChild(content);

    divCard.append(divHeader, divContent);

    return divCard;
}

export { createDescCard };