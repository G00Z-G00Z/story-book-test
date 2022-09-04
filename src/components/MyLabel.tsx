import React, { FC } from 'react'
import './mylabel.css'

export interface LabelProps {
  /**
   * The string that appears in the label
   */
  label? : string; 
  /**
   * The size of the label. 
   */
  size? : 'normal' | 'h1' | 'h2' | 'h3'

  /**
   * All available colors for the span
   */
  color? : 'primary' | 'secondary' | 'tertiary'

  /**
   * If the text is all caps
   */
  allCaps? : boolean

  /**
   * Custom font color for the text
   */
  fontColor? : string
}

/**
 * A label to test story book
 */
export const MyLabel : FC<LabelProps>= ({
  label = 'No label', 
  size = 'normal', 
  color = 'primary', 
  allCaps = false, 
  fontColor 
}) => {

  return <span className={`${size} text-${color}`} style={{
    color : fontColor
  }}>{`${allCaps ? label.toUpperCase() : label}`}</span>;
};
