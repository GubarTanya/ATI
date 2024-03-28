describe('Cypress Test',() => {
    it ('None-existent login test',() => {
        cy.fixture('cypressTest').then(data => {
        cy.log('Переxод на страницу автозации')
        cy.visit(data.main_url)

        cy.log('Ввод несуществующего логина')
        cy.get('input[class="form-input--text form-input"]')
            .type(data.login)

        cy.log('Ввод существующего пароля')
        cy.get('input[class="form-input--password form-input"]')
            .type(data.password)

        cy.log('Клик по кнопке "Войти')
        cy.get('div[class="login-form__button"] button[type="submit"]')
            .click()
        cy.wait(1500)

        cy.log('Клик по кнопке "Потребности"')
        cy.get(':nth-child(1) > .header__nav > [href="/needs"] > .header__label')
            .click()

        cy.log('Ввод в поле поиска')
        cy.get('input[class="form-input--text form-input search-input__field"]')
            .type(data.search)
        cy.get('div.search-input__field > .button')
            .click()

        cy.log('Клик по кнопке выбора(радио)')
        cy.get('.radio-list > :nth-child(1)')
            .click()
        cy.log('Клик по кнопке выбора')
        cy.get('.form-select__selected')
            .click()
        cy.get('.form-select__items > :nth-child(2)')
            .click()
    })
  })
})
