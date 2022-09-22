type Car = { model: string, color: string, constrYear: string };
const carLst: Car[] = [{model: "A", color: "B", constrYear: "1"}, {
    model: "C",
    color: "D",
    constrYear: "2"
}, {model: "E", color: "F", constrYear: "3"}];
console.log(carLst);
console.log(carLst.find(({model}) => model === "A"));

const filmLst: string[] = ["Film A", "Film B", "Film C"];
console.log(filmLst);
console.log(filmLst.map((x: string) => "Kennst du schon " + x + "?"));
console.log(filmLst.map(filmLst.pop, [...filmLst]));
console.log(filmLst.reverse());

type Student = { id: string, name: string };
const studentLst: Student[] = [{id: "1", name: "A"}, {id: "2", name: "B"}];

const changeName = (lst: Student[], oldName: string, newName: string) => {
    lst.find(({name}) => name === oldName).name = newName;
    return lst
};
const changeName2 = (lst: Student[], oldName: string, newName: string) => {
    const lst2 = [...lst];
    lst2.find(({name}) => name === oldName).name = newName;
    return lst2
}

console.log(studentLst);
console.log(changeName2(studentLst, "B", "A"));
console.log(studentLst);
