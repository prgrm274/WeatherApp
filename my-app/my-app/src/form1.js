// 
import React from 'react';
import ReactDOM from 'react-dom';

import FormStyle1 from './comps/Style1'

const date = '2021-02-18';
const dateFormat = 'YYYY-DD-MM';

class MyForm extends React.Component {

    render() {
        return (
            <FormStyle1>
                <form>
                    <input type="number" pattern="[0-9]*" maxLength={4}
                        inputProps={{ maxLength: 4 }}
                    />
                </form>
                <form>
                    <input type="number" pattern="[0-9]*" maxLength={2}
                        inputProps={{ maxLength: 4 }}
                    />
                </form>
                <form>
                    <input type="number" pattern="[0-9]*" maxLength={2}
                        inputProps={{ maxLength: 4 }}
                    />
                </form>
                </FormStyle1>
        );
    }
}

export default MyForm;
// ReactDOM.render(<MyForm />, document.getElementById('root'));