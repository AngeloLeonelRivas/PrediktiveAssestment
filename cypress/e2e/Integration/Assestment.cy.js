import AssesmentPOM from "../POM/AssentmentPOM"

describe('Prediktive Assestment', () => {
    beforeEach(() => {
        cy.visit('/')
    })
  
    it('Validate Android title', () => {
      cy.fixture('words').then((words) => {
        AssesmentPOM.getInputField().type(`${words.OperationSystem} {enter}`)
      })
      
      cy.origin('https://duckduckgo.com', () => {
        cy.get('h2.Ee2e63EzQ9F3xq9wsGDY')
          .should('have.text', 'Android');
      });

    })

    it('Validate all regions', () => {
        AssesmentPOM.getInputField().type('Android {enter}'); 
      
        cy.origin('https://duckduckgo.com', () => {

            Cypress.on('uncaught:exception', (err, runnable) => {
                return false;
            });
            cy.contains('All regions').click();
      
             cy.get('[data-testid="dropdown-options"]').should('be.visible');

            cy.get('[data-testid="dropdown-options"] > .IrVYRCUvYQ98h_9Xp7aN.undefined > div')
                .should('have.length.greaterThan', 10);
        });
    })

    it('Handles JSON response and prints RelatedTopics with Icon URL', () => {
      cy.request('https://api.duckduckgo.com/?q=android&format=json').then((response) => {
        expect(response.status).to.eq(200);
    
        const relatedTopics = response.body.RelatedTopics || [];
        relatedTopics.forEach((topic) => {
          if (topic.Icon && topic.Icon.URL) {
            cy.log('RelatedTopic Icon URL:', topic.Icon.URL);
          }
        });
      });
    });
})