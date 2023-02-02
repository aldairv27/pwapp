import "./SearchBox.css";

interface SearchboxProps{
    onInputChange: (inputValue: string) => void;
}

const SearchBox = (props: SearchboxProps) =>{
    return(
        <input
        onChange = {(e)=>{
            console.log(e.target.value);
            props.onInputChange(e.target.value);
        }}
        className ="Search"
        type ="Search"
        placeholder ="Search Pokemons"
        />
    );
};

export default SearchBox;