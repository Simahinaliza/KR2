
const kittensData = [
    {
        id: 1,
        name: "Корица",
        age: "2 месяца",
        breed: "мейн-кун",
        image: "./small_mainkun-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Мейн-кун"
    },
    {
        id: 2,
        name: "Вася",
        age: "1,5 месяца",
        breed: "сиамская",
        image: "./small_siam-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Сиамская_кошка"
    },
    {
        id: 3,
        name: "Чири",
        age: "3 месяца",
        breed: "британец",
        image: "./small_britanec-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Британская_короткошёрстная_кошка"
    },
    {
        id: 4,
        name: "Мурзик",
        age: "1 месяц",
        breed: "маскарадная",
        image: "./small_maskarad-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Невская_маскарадная_кошка"
    },
    {
        id: 5,
        name: "Арчи",
        age: "2 месяца",
        breed: "шотландец",
        image: "./small_scottish-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Шотландская_вислоухая_кошка"
    },
    {
        id: 6,
        name: "Фантик",
        age: "3 месяца",
        breed: "бенгал",
        image: "./small_bengal-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Бенгальская_кошка_(домашняя)"
    }
];

// Функция для создания карточки котенка
function createKittenCard(kitten) {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="cat-card">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <img src="${kitten.image}" alt="${kitten.name}" class="cat-image">
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="cat-info">
                            <p><strong>Имя:</strong> ${kitten.name}</p>
                            <p><strong>Возраст:</strong> ${kitten.age}</p>
                            <p><strong>Порода:</strong> ${kitten.breed}</p>
                        </div>
                    </div>
                </div>
                <a href="${kitten.breedLink}" target="_blank" class="breed-link">
                    узнать о породе
                </a>
            </div>
        </div>
    `;
}

// Функция для отображения всех котят
function displayKittens() {
    const container = document.getElementById('kittensContainer');
    
    if (container) {
        container.innerHTML = kittensData.map(kitten => createKittenCard(kitten)).join('');
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    displayKittens();
    
    // Добавляем активный класс к текущей странице в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `./${currentPage}`) {
            link.classList.add('active');
        }
    });
});