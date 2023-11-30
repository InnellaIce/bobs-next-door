import React from 'react'

function Store({ ...store }) {
    const { id, name, image, season, episode, episodeUrl, url } = store

    return (
        <tr>
            <td className="row-name">
                <span>{name}</span>
            </td>
            <td>
                <a href={image} target="_blank"><b>&#8599;</b></a>
            </td>
            <td>
                <a href={episodeUrl}><span>{season}</span></a>

            </td>
            <td>
                <a href={url}><span>{episode}</span></a>
            </td>
        </tr>
    );
}

export default Store