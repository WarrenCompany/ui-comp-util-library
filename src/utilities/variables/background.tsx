import Options from "../_variables";

export default interface Background extends Options {
    background_color?: Options['colors'],
    background_color_density?: Options['hundreds']
  }