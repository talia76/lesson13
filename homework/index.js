/* Задание 1
Создайте метод getStudent, который возвращает promise - объекта (студент с именем "Anri" и возрастом 32), c задержкой 4 секунды.
Вызовите этот метод - сохраните в переменную.
Раскройте promise при помощи then, выведите имя студента */

// Создаем метод getStudent, который возвращает promise
function getStudent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Имитируем задержку в 4 секунды
            resolve({ name: "Anri", age: 32 });
        }, 4000);
    });
}
// Раскрываем promise при помощи then
getStudent().then((student) => {
    console.log("Имя студента:", student.name); // Выводим имя студента
});

