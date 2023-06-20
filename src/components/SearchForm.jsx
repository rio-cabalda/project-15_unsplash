import { useQueryClient } from "@tanstack/react-query";
import { useGlobalContext } from "../utils/context";
import { useRef } from "react";


const SearchForm = () => {
    const {setSearchTerm, searchTerm} = useGlobalContext();
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const searchValue = formRef.current.search.value; // get the value that has a name attribute equal to search (name='search') which is the input;
        if(!searchValue) return;
        setSearchTerm(searchValue);
        formRef.current.search.value = '';
        formRef.current.search.focus();
    } 
  return (
    <section>
        <h1 className="title">unsplash images</h1>
        <form action="" className="search-form" onSubmit={handleSubmit} ref={formRef}>
            <input type="text" className="form-input search-input" name="search" placeholder={searchTerm}/>
            <button type="submit" className="btn">Search</button>
        </form>
    </section>
  )
}

export default SearchForm;