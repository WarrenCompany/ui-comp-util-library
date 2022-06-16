import React from 'react';
import Background from '../shared_interfaces/background';
import Padding from '../shared_interfaces/padding';
import Font from '../shared_interfaces/font';
import Border from '../shared_interfaces/border';

export interface ButtonOptions extends Padding, Font, Border, Background {
  label: string;
  icon?: string;
  link?: string;

  isDisabled?: boolean,
  isHovered?: boolean,
  isClicked?: boolean
};
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  font,
  font_size,
  font_weight,
  font_style,
  font_case,
  padding,
  padding_side,
  padding_full,
  padding_top,
  padding_bottom,
  padding_left,
  padding_right,
  padding_x,
  padding_y,
  background_color,
  background_color_density,
  border,
  border_color,
  border_color_density,
  border_width,
  border_radius,
  text_color,
  text_color_density,
  isDisabled,
  isHovered,
  isClicked,
  ...props
}: ButtonOptions) => {
  return (
    <button
      type="button"
      className={
        `bg-${background_color}-${background_color_density}
         font-${font}
         font-${font_size}
         font-${font_weight}
         font-${font_style}
         ${font_case == true ? `uppercase`: ''}
         ${font_case == false ? `lowercase`: ''}
         text-${text_color}-${text_color_density}
         ${ border ? `border-${border_width}-${border_color}-${border_color_density}` : '' }
         ${ border_radius ? `border-${border_radius}` : ''}
         ${{/* PADDING: T/B/L/R + X/Y + FULL */}}
         ${padding
            ? padding_side.includes('t')
                ? `p-t-${padding_top}`
                : ''
            : ''
          }
          ${padding
            ? padding_side.includes('b')
                ? `p-b-${padding_bottom}`
                : ''
            : ''
          }
          ${padding
            ? padding_side.includes('l')
                ? `p-l-${padding_left}`
                : ''
            : ''
          }
          ${padding
            ? padding_side.includes('r')
                ? `p-r-${padding_right}`
                : ''
            : ''
          }
          ${padding
            ? padding_side.includes('x')
                ? `p-x-${padding_x}`
                : ''
            : ''
          }
          ${padding
            ? padding_side.includes('y')
                ? `p-y-${padding_y}`
                : ''
            : ''
          }
          ${padding
            ? padding_side.includes('full')
                ? `p-full-${padding_full}`
                : ''
            : ''
          }

          ${isDisabled ? `opacity-75`: ''}
          ${isHovered ?
              background_color_density ? background_color_density <= 900 ?
                `bg-${background_color}-${background_color_density+100}` : `bg-${background_color}-${background_color_density-100}`
              : ''
            : `bg-${background_color}-${background_color_density}`}
          ${isClicked ?
            background_color_density ? background_color_density < 800 ?
              `bg-${background_color}-${background_color_density+200}` : `bg-${background_color}-${background_color_density-200}`
            : ``
          : ``}
        `}
      {...props}
    >
      {label}
    </button>
  );
};
