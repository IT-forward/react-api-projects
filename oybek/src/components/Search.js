import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const Search = ({ onChange }) => {


    return (
        <div>
            <Form>
                <Form.Group controlId="formGroupSearch">
                    <Form.Control type="text" placeholder="Search a country" onChange={onChange} />
                </Form.Group>
            </Form>
        </div>
    )
}

Search.propTypes = {
    onChange: PropTypes.func
}

export default Search
