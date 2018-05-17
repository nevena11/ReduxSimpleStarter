import React, { Component } from 'react';

/*
funkcionalna komponenta
funkcionalnu koristimo samo ako treba nesto da izrenderujemo i prosledimo joj nesto i nista necemo da radimo
sa promenljivama samo da ih prikazemo

const SearchBar = () => {
    return <input />
}

klasna komponenta
koristimo je kada treba da radimo nesto sa podacima i cuvamo ih, i kada se nesto u toj komponenti
menja nesto u zavisnosti od necega u stateu
*/

class SearchBar extends Component {
    /* STATE as a plain JS object this is used to record and react to user event
    /FUNCTIONAL COMPONENT DO NOT HAVE STATE, only class basic components do.*/

    constructor(props) {
        //calling parent method
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
/*      return <input onChange={this.onInputChange}
      isto kao ovo iznad samo koriscenjem ES6 i brisemo Fju ispod

        za single argumente mozemo bez zagrada ()
        return <input onChange={event => console.log(event.target.value)}/> */
        <div>
            <input
                 value={this.state.term} // i obrisati ovo ispod -- TO NE RADI!!!
                onChange={event => this.onInputChange(event.target.value)} />
        </div>
       );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

/*    onInputChange(event) {
        console.log(event.target.value);
    } */
}

export default SearchBar;
