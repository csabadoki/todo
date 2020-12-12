(function () {
    let todos = [
        { title: "lunch", content: "lunch with my friends" },
        { title: "lunch", content: "lunch with my friends" },
        { title: "lunch", content: "lunch with my friends" },
    ]

    const bodyDay = document.querySelector('.body__day');
    const bodyDate = document.querySelector('.body__date');

    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const localDB = {
        setItem(key, value) {
            value = JSON.stringify(value);
            localStorage.setItem(key, value);
        },
        getItem(key) {
            const value = localStorage.getItem(key);
            if (!value) {
                return null;
            }

            return JSON.parse(value);
        },
        removeItem(key) {
            localStorage.removeItem(key);
        },
    };

    const init = () => {
        const savedTodos = localDB.getItem('todos');
        if (savedTodos) {
            todos = savedTodos;
        }

        showDate();
    };

    const showDate = () => {
        const currentDate = new Date();
        const day = [
            currentDate.getMonth() + 1,
            currentDate.getDate(),
            currentDate.getFullYear(),
        ].map(num => num < 10 ? `0${num}` : num);
        bodyDay.textContent = dayNames[currentDate.getDay()];
        bodyDate.textContent = day.join('-');
    };


    init();



})();