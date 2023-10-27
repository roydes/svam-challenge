import { useEffect } from "react";

const PopularItems = () => {
    let popularItems: any[] = [];
    
    try {
        popularItems = JSON.parse(localStorage.getItem('PopularItems') || '')
            .sort((a: any, b: any) => b.visits - a.visits);
    } catch (error) {
    }
    
    return (
        <div>
            <ul>
                {
                    popularItems?.map((item: any, index: number) => {                        
                        return (
                            <li key={index}><a href={`${item.path}`}>"{item.name}"</a> Visits: {item.visits}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PopularItems;