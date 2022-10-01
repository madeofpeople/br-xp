
import React from 'react'
import ConditionalTilter from '../ConditionalTilter/ConditionalTilter';
import CoinGraphic from '../../img/coin.svg';
import Emitter from '../Emitter/Emitter'

import "./_coin-spin.scss";

const CoinSpin = ({ trigger, count, emitSparks }) => {
    return (
        <div id="coin"> 
            <div id="child" class="coin">
                <div class="coinface">
                    <img src="https://madeofpeople.org/bigrich/br-logo.svg" />
                </div>
                <div class="coinface back">
                    <span class="amount">{ count }</span>

                    <svg class="ring" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2438 2446">
                        <g filter="url(#a)">
                            <path fill="url(#b)" fill-rule="evenodd" d="M1219 2438c673.24 0 1219-545.76 1219-1219C2438 545.765 1892.24 0 1219 0 545.765 0 0 545.765 0 1219c0 673.24 545.765 1219 1219 1219Zm0-315c499.27 0 904-404.73 904-904 0-499.265-404.73-904-904-904-499.265 0-904 404.735-904 904 0 499.27 404.735 904 904 904Z" clip-rule="evenodd"/>
                        </g>
                        <defs>
                        <linearGradient id="b" x1="481.93" x2="1830.55" y1="0" y2="2521.51" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#997804"/>
                            <stop offset=".334" stop-color="#E9B93A"/>
                            <stop offset=".5" stop-color="#EBCC7C"/>
                            <stop offset=".757" stop-color="#D5AD4A"/>
                            <stop offset="1" stop-color="#A17929"/>
                        </linearGradient>
                        <filter id="a" width="2438" height="2446" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="8"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_9900_43518"/>
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_9900_43518" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                    
                </div>
            </div>
        </div>
    );
};

export default CoinSpin;