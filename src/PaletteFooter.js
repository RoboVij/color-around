import React from 'react';

function PaletteFooter(props) {
    const { paletteName, emoji } = props;
    <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
    </footer>
}

export default PaletteFooter;