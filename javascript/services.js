document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceKey = urlParams.get("service");

    if (!serviceKey) {
        document.getElementById("service-box").innerHTML = "<h2 data-key='service-not-found'></h2>";
        return;
    }

    try {
        const response = await fetch("../styles/lang/services.json");
        const data = await response.json();
        const serviceData = data.services.find(service => service.key === serviceKey);

        if (!serviceData) {
            document.getElementById("service-box").innerHTML = "<h2 data-key='service-not-found'></h2>";
            return;
        }

        console.log("Загруженные данные:", serviceData); // Проверяем, какие данные приходят

        // 🔹 Формируем HTML для врачей (Теперь имя и позиция в `data-key` для перевода)
        const serviceDoctors = serviceData.doctors?.length
            ? serviceData.doctors.map(doc => `
                <div class="doctor-card">
                    <img src="${doc.image}" alt="${doc.name}" class="doctor-img">
                    <div class="doctor-info">
                        <h3 data-key="${doc['name-trans']}"></h3>
                        <p class="doctor-position" data-key="${doc.positionTrans}"></p>
                    </div>
                </div>
            `).join("")
            : "<p data-key='no-doctors'></p>";

        // 🔹 Формируем HTML для списка услуг (Название тоже через `data-key`)
        const servicePrices = serviceData.prices?.length
            ? serviceData.prices.map(price => `
                <div class="price-card">
                    <h4 data-key="${price['name-trans']}"></h4>
                    <p class="price" >${price.cost}  сум</p>
                </div>
            `).join("")
            : "<p data-key='no-prices'></p>";

        // 🔹 Итоговый HTML
        const serviceHTML = `
            <div class="container">
                <h2 class="service-title" data-key="${serviceData['title-trans']}"></h2>

                <div class="doctor-section">
                    <h3 data-key="our-specialists"></h3>
                    <div class="doctor-list">${serviceDoctors}</div>
                </div>

                <div class="price-section">
                    <h3 data-key="service-prices"></h3>
                    <div class="price-list">${servicePrices}</div>
                </div>

                <a href="../index.html" class="btn back-btn" data-key="back"></a>
            </div>
        `;

        document.getElementById("service-box").innerHTML = serviceHTML;

        // 🔹 Вызываем перевод после вставки контента
        loadLanguage(localStorage.getItem("language") || "uz");

    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
        document.getElementById("service-box").innerHTML = "<h2 data-key='loading-error'></h2>";
    }
});
