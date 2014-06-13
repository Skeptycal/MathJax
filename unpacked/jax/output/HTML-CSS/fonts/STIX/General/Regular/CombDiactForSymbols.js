/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/fonts/STIX/General/Regular/CombDiactForSymbols.js
 *
 *  Copyright (c) 2009-2014 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.Hub.Insert(
  MathJax.OutputJax['HTML-CSS'].FONTDATA.FONTS['STIXGeneral'],
  {
    0x20D0: [760,-627,0,-453,-17],     // COMBINING LEFT HARPOON ABOVE
    0x20D1: [760,-627,0,-453,-17],     // COMBINING RIGHT HARPOON ABOVE
    0x20D2: [662,156,0,-242,-192],     // COMBINING LONG VERTICAL LINE OVERLAY
    0x20D6: [760,-548,0,-453,-17],     // COMBINING LEFT ARROW ABOVE
    0x20DB: [622,-523,0,-462,35],      // COMBINING THREE DOTS ABOVE
    0x20DC: [622,-523,0,-600,96],      // COMBINING FOUR DOTS ABOVE
    0x20DD: [725,221,0,-723,223],      // COMBINING ENCLOSING CIRCLE
    0x20DE: [780,180,0,-730,230],      // COMBINING ENCLOSING SQUARE
    0x20DF: [843,341,0,-840,344],      // COMBINING ENCLOSING DIAMOND
    0x20E1: [760,-548,0,-453,25],      // COMBINING LEFT RIGHT ARROW ABOVE
    0x20E4: [1023,155,0,-970,490],     // COMBINING ENCLOSING UPWARD POINTING TRIANGLE
    0x20E5: [662,156,0,-430,-40],      // COMBINING REVERSE SOLIDUS OVERLAY
    0x20E6: [662,156,0,-335,-102],     // COMBINING DOUBLE VERTICAL STROKE OVERLAY
    0x20E7: [725,178,0,-650,166],      // COMBINING ANNUITY SYMBOL
    0x20E8: [-119,218,0,-462,35],      // COMBINING TRIPLE UNDERDOT
    0x20E9: [681,-538,0,-480,53],      // COMBINING WIDE BRIDGE ABOVE
    0x20EA: [419,-87,0,-658,118],      // COMBINING LEFTWARDS ARROW OVERLAY
    0x20EB: [756,217,0,-448,193],      // COMBINING LONG DOUBLE SOLIDUS OVERLAY
    0x20EC: [-119,252,0,-453,-17],     // COMBINING RIGHTWARDS HARPOON WITH BARB DOWNWARDS
    0x20ED: [-119,252,0,-453,-17],     // COMBINING LEFTWARDS HARPOON WITH BARB DOWNWARDS
    0x20EE: [-40,252,0,-453,-17],      // COMBINING LEFT ARROW BELOW
    0x20EF: [-40,252,0,-453,-17],      // COMBINING RIGHT ARROW BELOW
    0x20F0: [819,-517,0,-357,-87]      // COMBINING ASTERISK ABOVE
  }
);

MathJax.Ajax.loadComplete(MathJax.OutputJax["HTML-CSS"].fontDir + "/General/Regular/CombDiactForSymbols.js");
