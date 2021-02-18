import React from 'react';
import classes from './SuasanaModule.css'

const conditions = (props) => {
    return (
        <div className={classes.Wrapper}>
            {props.error && <small>Masukkan nama kota dengan benar.</small>}
            {props.loading && <div className={classes.Loader} />}
            {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>Sekarang {Math.round(props.responseObj.main.temp)} derajat: {props.responseObj.weather[0].description}.</p>
                </div>
                : null
            }
        </div>
    )
}

export default conditions;