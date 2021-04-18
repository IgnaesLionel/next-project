import React from 'react';
import Button from '../ui/Button'
import classes from './events-search.module.css'

const EventsSearch = (props) => {
    return (
        <form className={classes.from}>
        <div className={classes.controls}>
        <div className={classes.controls}>
               <label htmlFor="year"> Année </label>
            <select id='year'>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
            </select>
        </div>
        <div  className={classes.controls}>
        <label htmlFor="month"> Mois</label>
        <select id='month'>
          <option value='1'>Janvier</option>
          <option value='2'>Février</option>
          <option value='3'>Mars</option>
          <option value='4'>Avril</option>
          <option value='5'>Mai</option>
          <option value='6'>Juin</option>
          <option value='7'>Juillet</option>
          <option value='8'>Aout</option>
          <option value='9'>Septembre</option>
          <option value='10'>Octobre</option>
          <option value='11'>Novembre</option>
          <option value='12'>Decembre</option>
        </select>
        </div>
        </div>
<Button></Button>

            
        </form>

    }


export default EventsSearchh;