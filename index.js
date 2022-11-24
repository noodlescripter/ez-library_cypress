/// <reference types="cypress" />
import { xpath } from "cypress-xpath";


/* 
    1)   
    Converted to class from: function to make it more readable and easier to use :) 
    If you want to use the original function, just remove the class and export the function at the bottom of the file.  

    2)   
    If you would like to make any changes to the existing code or add new feature
    Please make sure to open a new branch and send a pull request!!!!!!!!!!
    Will review the code and accect your pull request accordingly and include your changes in next realase :)

    Note: If you any better way to do this please let me know :) or you can just fork it and make it better :)

    3)
    Install the package using the following command:
    Local Development:
    Clone the repo and run the following command: npm link
    Create your own project and run the following command: npm link cypress-ez-lib (To test the code locally)
    
    --Author: Alam Hamim :(
*/

class ez {
    constructor() {

        let time = 40000;

        /* 

        Getting eles for the page -- getting to work with the page
        @param {string} selector - css selector
        Also I call it special funky because it is a special function that can be used to get any element on the page :) 
        Don't change the name of the function, it will break the code :(
        And Keep your hands off my special funky :P

        */

        /* Please do not mess with this function at all :) 

            @clearing up the element for uses
         */
        const superSyan = function (selector) {
            let ele = () => {return cy.get(selector, { timeout: time })};
            ele().should("be.visible").then(function(visible){
                if(!visible) return
                console.log("Element is visible");
            })
            //@return
            return ele();
        }

         /* Please do not mess with this function at all :) \

            @clearing up the element for uses
         */
        const superSyanXpath = function (selector) {
            let eleX = () => {return cy.xpath(selector, { timeout: time })};
            eleX().should("be.visible").then(function(visible){
                if(!visible) return
                console.log("Element is visible");
            })

            //@return
            return eleX();
        }

        //@messenger css
        const getElem = function(selector){
            return superSyan(selector);
        }

        //@messenger xpath
        const getElemX = function(selector){
            return superSyanXpath(selector);
        }

        /* This is new feature (xpath) */
        this.getElemByXpath = function(xpath){
            return getElemX(xpath);
        }
            

        this.getElemByCss = function (css) {
            return getElem(css);
        };

        this.getElemById = function (id) {
            return getElem("#" + id);
        };

        this.getElemByName = function (name) {
            return getElem("[name='" + name + "']");
        };

        this.getElemByClassName = function (className) {
            return getElem("." + className);
        };

        this.clickById = function (id) {
            cy.get("#" + id, { timeout: time }).should("be.visible").then(function (visible) {
                if (visible) {
                    cy.get("#" + id).click();

                } else {
                    throw new Error("NO Such a element found!!!!!!!!!!!!!!!");
                }
            });
        };
        this.clickByCss = function (css) {
            cy.get(css, { timeout: time }).should("be.visible").then(function (visible) {
                if (visible) {
                    cy.get(css).click();
                } else {
                    throw new Error("NO Such a element found!!!!!!!!!!!!!!!");
                }
            });
        };

        this.isDisplayed = function (ele) {
            return cy.get(ele, { timeout: time }).should("be.visible");
        };
        this.typeById = function (ele, text) {
            cy.get("#" + ele, { timeout: time }).clear().type(text);
        };
        this.typeByCss = function (ele, text) {
            cy.get(ele, { timeout: time }).clear().type(text);
        };
        this.getTextById = function (ele) {
            return cy.get("#" + ele, { timeout: time }).invoke("text");
        };
        this.getTextByCss = function (ele) {
            return cy.get(ele).invoke("text");
        };
        this.verifyText = function (text1, text2) {
            expect(text1).eq(text2);
        };
        this.clickButtonByText = function (givenText) {
            cy.get("button").each(function ($ele) {
                if ($ele.text() === givenText) {
                    cy.log(givenText + "<<<<< FOUND REEEEEEEEEEEEEEEEE SOON WILL CLICK!!!!");
                    cy.wait(1000);
                    cy.wrap($ele).should("be.visible").then(function (visible) {
                        if (visible) {
                            cy.wrap($ele).click();
                        } else {
                            cy.log("ELEMENT NOT VISIBLE");
                        }
                    });
                } else {
                    throw new Error("CLICKING BUTTON FAILD REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                }
            });
        };
        this.goTo = function (string) {
            cy.visit(string);
            cy.title().then(function (title) {
                cy.log("Landed on >>>>>>>>>>>>>>>>>>>>" + title);
            });
        };
        this.EZTableClickByClassName = function (ele, row, col) {
            cy.get("table[class='" + ele + "'] tr:nth-child(" + row + ")>td:nth-child(" + col + ")").should("be.visible").then(function (visible) {
                if (visible) {
                    cy.log("TABLE FOUND REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE...... Clicking in sec!!!!");
                    cy.wait(1000);
                    cy.get("table[class='" + ele + "'] >tr:nth-child(" + row + ")>td:nth-child(" + col + ")").click();
                } else {
                    throw new Error("TABLE LAGGGGGGG GAYEEEEEEEEEEEEEEEEEEEEEEEEEEEEE REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                }
            });
        };
        this.EZTableClickById = function (ele, row, col) {
            cy.get("table[class='" + ele + "'] tr:nth-child(" + row + ")>td:nth-child(" + col + ")").should("be.visible").then(function (visible) {
                if (visible) {
                    cy.log("TABLE FOUND REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE...... Clicking in sec!!!!");
                    cy.wait(1000);
                    cy.get("table[class='" + ele + "'] >tr:nth-child(" + row + ")>td:nth-child(" + col + ")").click();
                } else {
                    throw new Error("TABLE LAGGGGGGG GAYEEEEEEEEEEEEEEEEEEEEEEEEEEEEE REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                }
            });
        };
        this.EZTableTextById = function (ele, row, col) {
            return cy.get("table[id='" + ele + "'] tr:nth-child(" + row + ")>td:nth-child(" + col + ")").invoke("text");
        };
        this.verifyTitle = function (exTitle) {
            cy.title().then(function (title) {
                expect(title).eq(exTitle);
            });
        };
        this.EZTableClickByCss = function (ele, row, col) {
            let tableEle = ele + " " + "tr:nth-child(" + row + ")>td:nth-child(" + col + ")";
            cy.get(tableEle, { timeout: time }).should("be.visible").then(function (visible) {
                if (visible) {
                    cy.log("TABLE FOUND REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE...... Clicking in sec!!!!");
                    cy.wait(1000);
                    cy.get(tableEle).click();
                } else {
                    throw new Error("TABLE LAGGGGGGG GAYEEEEEEEEEEEEEEEEEEEEEEEEEEEEE REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                }
            });
        };
        this.EZSelect = function (ele, value) {
            cy.get(ele).select(value);
        };

        /* ________________________________________________________________________________ 
                                        REST API TESTING LIB
            ______________________________________________________________________________
        */

        //@function to test rest api
        this.EZGetToken = function (endpoint, email, password) {

            return cy.request({
                method: "POST",
                url: endpoint,
                body: {
                    email: email,
                    password: password,
                },
            }).its('body');
        };

        this.EZGet = function (token, endpoint) {
            return cy.request({
                method: 'GET',
                url: endpoint,
                headers: {
                    Authorization: "Bearer " + token + ""
                }
            }).then(function (res) {
                cy.log(JSON.stringify(res.body));
                expect(res.status).to.be.eq(200);
            });
        };
        this.EZPost = function (token, endpoint, body) {
            cy.request({
                method: 'POST',
                url: endpoint,
                headers: {
                    Authorization: "Bearer " + token + ""
                },
                body: body
            }).then(function (res) {
                cy.log(res.body);
                expect(res.status).to.be.eq(201);
            });
        };

        this.EZDelete = function (token, endpoint) {
            cy.request({
                method: "DELETE",
                url: endpoint,
                headers: {
                    Authorization: "Bearer " + token + ""
                }
            }).then(function (res) {
                expect(res.status).to.be.eq(200);
            });
        };

        this.EZPatch = function (token, url, body) {
            cy.request({
                method: "PATCH",
                url: url,
                headers: {
                    Authorization: "Bearer " + token + ""
                },
                body: body
            }).then(function (res) {
                if (res.status === '201') {
                    cy.log("PATCHED That up reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                } else {
                    cy.log("PATCH er mareeeeeeeeeeeeeeeeeeeeeee Bapppppppppppppppppppppppppppppp");
                }

                expect(res.status).to.be.eq(201);
            });
        };

        this.EZPut = function (token, url, body) {
            cy.request({
                method: "PUT",
                url: url,
                headers: {
                    Authorization: "Bearer " + token + ""
                },
                body: body
            }).then(function (res) {
                if (res.status === '201') {
                    cy.log("PATCHED That up reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                } else {
                    cy.log("PATCH er mareeeeeeeeeeeeeeeeeeeeeee Bapppppppppppppppppppppppppppppp");
                }

                expect(res.status).to.be.eq(201);
            });
        };
    }
}

/*  */
export default new ez();
