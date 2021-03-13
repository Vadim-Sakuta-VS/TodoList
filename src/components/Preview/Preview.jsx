import React from 'react';
import './Preview.scss';
import {CSSTransition} from 'react-transition-group';

const Preview = ({isVisible}) => {
    const textSymbols = ['T', 'o', 'd', 'o', 'L', 'i', 's', 't', 'A', 'p', 'p'];

    const textSymbolsElements = textSymbols.map((s, index) => (
        <span className="preview__text-symbol" key={index}>{s}</span>
    ));

    return (
        <CSSTransition in={isVisible} timeout={700} classNames='preview' unmountOnExit>
            <div className="preview">
                <div className="loader preview__loader">Loading...</div>
                <p className="preview__text">
                    {textSymbolsElements}
                </p>
            </div>
        </CSSTransition>
    );
};

export default Preview;