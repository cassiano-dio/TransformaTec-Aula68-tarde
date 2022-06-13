import React from 'react';

const Transactions = ({list}) => {

    return (
        <div>

            <h4>Lista de transações</h4>
            {

                list.length ? list.map(

                    (item) => (
                        <div key={item.id}>
                            <strong>{item.name}</strong>
                            {":"}
                            <span>{item.converted}</span>
                        </div>
                    )

                ):(
                    <div>
                        <h5>
                            Lista de transações vazia
                        </h5>
                    </div>
                )

            }
        </div>
    )
}

export default Transactions