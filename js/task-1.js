const all = document.querySelectorAll(".item");
console.log(`Number of categories: ${all.length}`);
all.forEach(element => {
    const category = element.firstElementChild.textContent;
    const ulElement = element.lastElementChild;
    const elements = ulElement.querySelectorAll('li').length;
    console.log(`Category: ${category}`);   
    console.log(`Elements: ${elements}`);
});


