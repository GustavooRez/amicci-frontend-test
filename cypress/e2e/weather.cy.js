describe("Weather Page - Acceptance Test", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Must display basic components on the page", () => {
      cy.get("input[name='city']").should("be.visible");
      cy.contains("Pesquisar por cidade").should("be.visible");
      cy.contains("Pesquisar por endereço atual").should("be.visible");
    });
  
    it("It should search for a city and display the weather details", () => {
      cy.intercept("GET", /api.openweathermap.org\/data\/2.5\/weather.*/, {
        statusCode: 200,
        body: {
          name: "São Paulo",
          main: { temp: 25.3, feels_like: 27.2, temp_min: 22.1, temp_max: 28.5, humidity: 60 },
          weather: [{ description: "céu limpo" }],
          sys: { sunrise: 1700000000, sunset: 1700050000 },
          wind: { speed: 5.2 },
        },
      }).as("getWeather");
  
      cy.get("input[name='city']").type("São Paulo");
      cy.contains("Pesquisar por cidade").click();
      
      cy.wait("@getWeather");
  
      cy.contains("São Paulo").should("be.visible");
      cy.contains("25.3ºC").should("be.visible");
      cy.contains("Céu limpo").should("be.visible");
      cy.contains("Úmidade").should("be.visible");
      cy.contains("60%").should("be.visible");
    });
  
    it("Should display error message when city not found", () => {
      cy.intercept("GET", /api.openweathermap.org\/data\/2.5\/weather.*/, {
        statusCode: 404,
        body: {},
      }).as("getWeatherFail");
  
      cy.get("input[name='city']").type("CidadeInexistente");
      cy.contains("Pesquisar por cidade").click();
  
      cy.wait("@getWeatherFail");
  
      cy.contains("Cidade não encontrada!").should("be.visible");
    });
  
    it("Should display loading indicator while searching", () => {
      cy.intercept("GET", /api.openweathermap.org\/data\/2.5\/weather.*/, (req) => {
        req.reply((res) => {
          return new Promise((resolve) => {
            setTimeout(() => resolve(res), 2000);
          });
        });
      }).as("getWeather");
  
      cy.get("input[name='city']").type("São Paulo");
      cy.contains("Pesquisar por cidade").click();
  
      cy.get("[role='progressbar']").should("be.visible");
      cy.wait("@getWeather");
      cy.get("[role='progressbar']").should("not.exist");
    });
  });
  