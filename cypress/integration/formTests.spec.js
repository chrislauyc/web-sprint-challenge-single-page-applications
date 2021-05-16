describe('Home page functionality',()=>{
    const orderPizza=()=>cy.get('#order-pizza');

    beforeEach(()=>{
        cy.visit('http://localhost:3000');
    });
    it('renders correctly',()=>{
        orderPizza().should('exist');
        cy.get('h1').should('exist');
    });
    describe('Form functionality',()=>{
        const submit=()=>cy.get('#order-button');
        const name='Chris';
        const size='medium';
        const special='special order';
        const getName=()=>cy.get('#name-input');
        const getSize=()=>cy.get('#size-dropdown');
        const getPep=()=>cy.get('#pepperoni');
        const getSausage=()=>cy.get('#sausage');
        const getOlives=()=>cy.get('#blackOlives');
        const getGreen=()=>cy.get('#greenPepper');
        const getSpecial=()=>cy.get('#special-text');
        const fillForm=()=>{
            getName().type(name);
            getSize().select(size);
            getPep().check();
            getSausage().uncheck();
            getOlives().check();
            getGreen().uncheck();
            getSpecial().type(special);
        };
        beforeEach(()=>{
            orderPizza().click();
        });
        it('does not submit incomplete form',()=>{
            submit().should('be.disabled');
        });
        it('can enter text',()=>{
            fillForm();
            getName().should('have.value',name);
            getSize().should('have.value',size);
            getPep().should('be.checked');
            getSausage().should('not.be.checked');
            getOlives().should('be.checked');
            getGreen().should('not.be.checked');
            getSpecial().should('have.value',special);
        });
        it('can submit',()=>{
            fillForm();
            submit().should('be.enabled');
            submit().click();
        });
    });
});