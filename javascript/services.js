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


        const servicePrices = serviceData.prices?.length
            ? `<div class="services-container">
              <ul class="services-list">
                  ${serviceData.prices.map(price => `
                      <li data-key="${price['name-trans']}">
                          <span>${price.name} - ${price.cost} <span data-key="currency-sum">сум</span></span>
                      </li>
                  `).join("")}
              </ul>
           </div>`
            : "<p data-key='no-prices'>Цены не найдены</p>";





        const serviceHTML = `
            <div class="container">
                <h2 class="service-title" data-key="${serviceData['title-trans']}"></h2>
                <div class="service-description-container mb-container"> 
                <h4 class="service-description" data-key="${serviceData['description-trans']}"> > </h4>

                   <i class="${serviceData.icon}"></i>
                </div>
                

                <div class="doctor-section">
                    <h3 data-key="our-specialists"></h3>
                    <div class="doctor-list">${serviceDoctors}</div>
                </div>

                <div class="price-section">
                    <h3 data-key="service-prices" class="service-prices"></h3>
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
