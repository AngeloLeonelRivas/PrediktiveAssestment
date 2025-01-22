class AssesmentPOM {

    getInputField() {
        return cy.get('#searchbox_input')
    }

    getTitle() {
        return cy.get('h2.Ee2e63EzQ9F3xq9wsGDY')
    }
}

export default new AssesmentPOM;