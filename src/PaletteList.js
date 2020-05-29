import React, { Component } from 'react';
// import Palette from './Palette';
import { Link } from 'react-router-dom';
// import './PaletteList.css';

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <h1>List</h1>
                {palettes.map(palette => (
                    <p>
                        <Link to={`palette/${palette.id}`}>{palette.paletteName}</Link>
                    </p>
                ))}
            </div>
        );
    }

}

export default PaletteList;
