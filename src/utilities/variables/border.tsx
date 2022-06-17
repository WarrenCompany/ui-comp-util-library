import Options from "../_variables";

export default interface Border extends Options {
    border?: boolean,
    border_width?: Options['sizes'],
    border_side?: Options['sides'],
    border_radius?: Options['sizes'],
    border_color?: Options['colors'],
    border_color_density?: Options['hundreds'],
  }