import { createDescCard } from "./util";

function createContact(number, email) {
    const ulPerson = document.createElement("ul");
    const liPersonNumber = document.createElement("li");
    const liPersonEmail = document.createElement("li");
    liPersonNumber.textContent = number;
    liPersonEmail.textContent = email;

    ulPerson.append(liPersonNumber, liPersonEmail);
    return ulPerson;
}

export default function renderContact() {
    const divContact = document.createElement("div");
    divContact.classList.add("contact");

    divContact.append(
        createDescCard("Manager", createContact("123-456-789", "TheOdinProjectIsCool@epicness.com")),
        createDescCard("Chef", createContact("987-654-321", "looCsItcejorPnidOehT@ssencipe.moc")),
        createDescCard("Owner", createContact("824-218-510", "WhatIsAGoodEmail@questionmark.com")),
        createDescCard("Son Of Owner", createContact("219-120-321", "UnrealisticEmployee@what.com")),
    )
    return [divContact];
}