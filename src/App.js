import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// The App component renders an <Admin> component, which is the root component
// of a react-admin app. This component expect a dataProvider prop.
// The admin component expects one or more <Resource> child components.
// Each resource maps a NAME to an ENDPOINT. 
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource 
      name="users" 
      list={ListGuesser} 
    />
  </Admin>
)
export default App;