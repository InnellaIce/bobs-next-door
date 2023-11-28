import React from "react"
import Store from "./Store"

function StoreList({storeData}) {
    console.log(storeData)
    const allStores = storeData.map((store) => {
        return <Store key = {store.id} {...store}/>
    })


    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {allStores}
            </tbody>
        
        </table>
    );
}

export default StoreList;