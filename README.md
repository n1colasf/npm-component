# Test for creating an npm package
## @n1colasf/npm-component

This is a React component packaged as an npm module. The main component exported from this package is `Component`.

## Installation

To install this package, run the following command in your terminal:

```sh
npm install @n1colasf/npm-component
```


### Usage
First, import the Component into your React file:

```js
import { Component } from '@n1colasf/npm-component';
```

Then, you can use the Component in your React component:

```js
<Component
  title="Your Title"
  label="Your Label"
  tableHeader={yourTableHeader}
  tableContent={yourTableContent}
  onCompClick={yourClickHandler}
  countrySelector={yourCountrySelector}
/>
```

### Props
The Component accepts the following props:

- <b>title</b> (string): The title to be displayed on the component.

- <b>label</b> (string): The label for the button in the component.

- <b>tableHeader</b> (object): An object representing the headers of the table. The keys of the object are the identifiers of the headers, and the values are the display names of the headers.

- <b>tableContent</b> (array): An array of objects representing the content of the table. Each object corresponds to a row in the table, and the keys should match those in tableHeader.

- <b>onCompClick</b> (function): A function to be called when the button in the component is clicked.

- <b>countrySelector</b> (object): An object representing the options for the country selector. The keys of the object are the country codes, and the values are the country names.

### Example
Here's an example of how to use the Component, getting all the countries names from the REST Countries:

```javascript
import { Component } from "@n1colasf/npm-component";

function App() {

  const onCompClick = () => {
    console.log("Click");
  };

  const tableHeader = {
    name: "Nombre",
    date: "Fecha",
    action: "Acción",
  };

  const tableContent = [
    {
      name: "Nicolás",
      date: "2021-09-01",
      action: "Editar",
    },
    {
      name: "Martina",
      date: "2021-12-16",
      action: "Eliminar",
    },
    {
      name: "Juan",
      date: "2021-10-22",
      action: "Editar",
    },
  ];

  const [countrySelector, setCountrySelector] = useState({});

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data);
        const countries = data.reduce((acc, country) => {
          acc[country.cca2] = country.name.common;
          return acc;
        }, {});
        console.log(countries);
        setCountrySelector(countries);
      } catch (error) {
        console.error("Error fetching countries", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Component
        title="Titulo Prop"
        label="Label Botón Prop"
        tableHeader={tableHeader}
        tableContent={tableContent}
        onCompClick={onCompClick}
        countrySelector={countrySelector}
      />
    </div>
  );
}

export default App;
```

### Enjoy!