import { initialCards } from "./constants.js";

initialCards.forEach(function (item) {
  console.table(`Name: ${item.name}`, `Link: ${item.link}`);
});
