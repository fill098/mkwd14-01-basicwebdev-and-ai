// document.getElementById('abc').addEventListener('click', function () {
//     const form = document.getElementById('form');
//     const inputs = form.getElementsByTagName('input');
//     const continent = document.getElementById('continent');
//     const textArea = document.getElementsByTagName('textarea')[0];
//     let obj = {}
//     obj[textArea.name] = textArea.value;
//     obj[continent.name] = continent.value;
//     for (let input of inputs) {
//         if(input.type === 'checkbox'){
//             obj[input.name] = input.checked;
//         } else {
//             obj[input.name] = input.value;
//         }
//     }
//     console.log(obj)
// })

document.getElementById('abc').addEventListener('click', function () {
    const inputs = document.getElementsByClassName('test');
    let obj = {}
    for (let input of inputs) {
        if(input.type === 'checkbox'){
            obj[input.name] = input.checked;
        } else {
            obj[input.name] = input.value;
        }
    }
    console.log(obj)
})
