import './List.css';

import { useState } from "react";

import api from "../AppGlobals";

const List = (props: any) => {
    const { list } = props;
    const results = list ? list.results: [];
    const [search, setSearch] = useState('');
    const [filtered, setFilteredData] = useState(results);
    const handleSearch = (event: any) => {
        const query = event.target.value;
        setSearch(query);

        const filteredResults = results.filter((item: any) => {
            const value = item.title || item.name;

            return value.toLowerCase().includes(query.toLowerCase())
        });

        setFilteredData(filteredResults);
    };
    
    return (
        <div>
            <input
                type="text"
                className="search"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
            />
            <ul>
                {
                    filtered?.map((item: any, index: number) => {
                        const path = item.url.replace(api.url, '');
                        
                        return (
                            <li key={index}><a href={`${path}`}>"{item.title || item.name}"</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List;