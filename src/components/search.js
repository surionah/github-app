import { useContext } from 'react';
import {
  Button,
  Form,
  FormControl
} from 'react-bootstrap';
import AppContext from '../context/app-context';

function Search({search}) {

  const appContext = useContext(AppContext);

  return (
    <Form
      className="mt-2 mb-3"
      inline
    >
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={(event) => appContext.criteria = event.target.value}
      />
      <Button
        variant="outline-info"
        onClick={search}
      >
        Search
      </Button>
    </Form>
  );
}

export default Search;