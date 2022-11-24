# @ez-library/cypress

@ez-library/cypress is a javascript library for automation with cypress

## Installation

Use the package manager NPM to install

```bash
npm install @ez-library/cypress
```

## Usage

```javascript
import ez from '@ez-library/cypress'

describe("Testing made easy with @ez-library/cypress", function(){
  it("Testing with  @ez-library/cypress", function(){
    ez.clickById("locator");
    ez.clickByCss("locator");
    ez.typeById("locator", "some text");
    ez.typeByCss("locator", "some text");
    ez.isDisplayed("locator").then(function(displayed){
       if(isDisplayed){
          ez.clickById("locator").click();
       }
    })
  });
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
