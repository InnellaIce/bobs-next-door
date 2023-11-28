import React from 'react'

function Store({...store}) {
    const {id, name, image, season, episode, episodeUrl, url} =store
   
    return (
    <tr>
        <td className="row-name">
            <span>{name}</span>
        </td>
        <td>
            <a href="" target="_blank"><b>&#8599;</b></a>
        </td>
        <td>
            <span>SEASON</span>
        </td>
        <td>
            <span>EPISODE</span>
        </td>
    </tr>
    );
}

export default Store