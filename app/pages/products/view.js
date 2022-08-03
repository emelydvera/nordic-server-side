const React = require('react');

function View(props) {

    const { products } = props;

    return (
        <ul>
            {
                products.map(e => {
                    return (

                        <li key={e.id}>{e.title}</li>

                    )
                })
            }
        </ul>
    )
};


module.exports = View;