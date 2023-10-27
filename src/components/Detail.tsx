import { useEffect } from "react";

import api from "../AppGlobals";

const Detail = (props: any) => {
    const { detail } = props;
    const info = Object.keys(detail).map((key) => {
        return {
            key,
            label: key[0].toUpperCase() + key.split('_').join(' ').substring(1),
        }
    }).filter((item) => item.key !== 'title' && item.key !== 'name' && typeof detail[item.key] !== 'object')

    let popularItems: any[] = [];

    useEffect(() => {
        const detailName = detail.name || detail.title;

        if (!detailName) {
            return;
        }

        try {
            popularItems = JSON.parse(localStorage.getItem('PopularItems') || '');
            const index = popularItems.findIndex((item) => item.name === detailName);

            if (index >= 0) {
                popularItems[index].visits = popularItems[index].visits + 1;
            } else {
                popularItems.push({
                    name: detailName,
                    visits: 1,
                    path: detail.url.replace(api.url, '')
                })
            }

            localStorage.setItem('PopularItems', JSON.stringify(popularItems));

        } catch (error) {
            localStorage.setItem('PopularItems', JSON.stringify(popularItems));
        }
    }, []);

    return (
        <div>
            <h2>{detail.title || detail.name}</h2>
            {info.map((item) => (<div><b>{item.label}:</b> {detail[item.key]}</div>))}
        </div>
    );
}

export default Detail;