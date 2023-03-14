let arr = [1,[[[[[[[1]]]]]]], 2, 3, [2, [2], 3]]
let generateList = function(a, parent) {
    let ul = document.createElement('ul');
    a.forEach(item => {
       let li = document.createElement('li');
       if(!Array.isArray(item)) {
         li.innerText = item;
       } else {
         li.appendChild(generateList(item, ul));
       }
       ul.appendChild(li);
    })
    return ul;
}
document.body.appendChild(generateList(arr));