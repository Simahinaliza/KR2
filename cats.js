// Данные о котиках в формате JSON
const catsData = [
    {
        id: 1,
        name: "Барсик",
        age: "3 года",
        breed: "британец",
        image: "./britanec-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Британская_короткошёрстная_кошка"
    },
    {
        id: 2,
        name: "Бублик",
        age: "2 года",
        breed: "шотландец",
        image: "./scottish-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Шотландская_вислоухая_кошка"
    },
    {
        id: 3,
        name: "Пудинг",
        age: "1,5 года",
        breed: "сиамская",
        image: "./siam-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Сиамская_кошка"
    },
    {
        id: 4,
        name: "Варежка",
        age: "1,5 года",
        breed: "бенгал",
        image: "./bengal-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Бенгальская_кошка_(домашняя)"
    },
    {
        id: 5,
        name: "Укропчик",
        age: "4 года",
        breed: "мейн-кун",
        image: "./mainkun-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Мейн-кун"
    },
    {
        id: 6,
        name: "Персик",
        age: "3 года",
        breed: "маскарадная",
        image: "./maskarad-02.png",
        breedLink: "https://ru.wikipedia.org/wiki/Невская_маскарадная_кошка"
    }
];

// Функция для создания карточки котика
function createCatCard(cat) {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="cat-card">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <img src="${cat.image}" alt="${cat.name}" class="cat-image">
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="cat-info">
                            <p><strong>Имя:</strong> ${cat.name}</p>
                            <p><strong>Возраст:</strong> ${cat.age}</p>
                            <p><strong>Порода:</strong> ${cat.breed}</p>
                        </div>
                    </div>
                </div>
                <a href="${cat.breedLink}" target="_blank" class="breed-link">
                    узнать о породе
                </a>
            </div>
        </div>
    `;
}

// Функция для отображения всех котиков
function displayCats() {
    const container = document.getElementById('catsContainer');
    
    if (container) {
        container.innerHTML = catsData.map(cat => createCatCard(cat)).join('');
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    displayCats();
    
    // Добавляем активный класс к текущей странице в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `./${currentPage}`) {
            link.classList.add('active');
        }
    });
});