let contestantList = [
    'Kristen Kish',
    'Chrissy Camba',
    'Danyelle McPherson',
    'Josh Valentine',
    'John Tesar',
    'Tyler Ward',
    'Jorel Price',
    'Sheldon Simeon',
    'Carla Pellegrino',
    'Kuniko Yugi',
    'Micha Fields',
    'Josie Smith-Malave',
    'Brooke Williamson',
    'Lizzie Binder',
    'CJ Jacobson',
    'Stefan Richter',
    'Eliza Gavin',
    'Bart Vandaele',
    'Jeff Jew'
];


contestantList.forEach(element => {
    console.log(element)
    const contestantBox = document.getElementById("contestants");
    let p = document.createElement("p");
    let node = document.createTextNode(element);
    p.appendChild(node);
    contestantBox.appendChild(p)

});

